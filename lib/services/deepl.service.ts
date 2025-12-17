// lib/services/deepl.service.ts

/**
 * DeepL Translation Service
 * 
 * Übersetzt Texte automatisch von Deutsch nach EN/FR
 * Free Tier: 500.000 Zeichen/Monat
 */

interface DeepLTranslation {
  text: string;
  detected_source_language: string;
}

interface DeepLResponse {
  translations: DeepLTranslation[];
}

/**
 * Text mit DeepL übersetzen
 */
export async function translateText(
  text: string,
  targetLang: 'EN' | 'FR',
  sourceLang: 'DE' = 'DE'
): Promise<string> {
  const apiKey = process.env.DEEPL_API_KEY;

  if (!apiKey) {
    throw new Error('DEEPL_API_KEY nicht in .env gesetzt');
  }

  // Leere Strings nicht übersetzen
  if (!text || text.trim() === '') {
    return text;
  }

  try {
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: [text],
        source_lang: sourceLang,
        target_lang: targetLang,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`DeepL API Error: ${response.status} - ${errorText}`);
    }

    const data: DeepLResponse = await response.json();
    return data.translations[0].text;
  } catch (error) {
    console.error('DeepL Translation Error:', error);
    throw error;
  }
}

/**
 * Mehrere Texte auf einmal übersetzen (effizient)
 */
export async function translateMultiple(
  texts: string[],
  targetLang: 'EN' | 'FR',
  sourceLang: 'DE' = 'DE'
): Promise<string[]> {
  const apiKey = process.env.DEEPL_API_KEY;

  if (!apiKey) {
    throw new Error('DEEPL_API_KEY nicht in .env gesetzt');
  }

  // Leere Arrays
  if (!texts || texts.length === 0) {
    return texts;
  }

  // Filtere leere Strings, merke Positionen
  const nonEmptyIndices: number[] = [];
  const nonEmptyTexts: string[] = [];
  
  texts.forEach((text, index) => {
    if (text && text.trim() !== '') {
      nonEmptyIndices.push(index);
      nonEmptyTexts.push(text);
    }
  });

  if (nonEmptyTexts.length === 0) {
    return texts;
  }

  try {
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: nonEmptyTexts,
        source_lang: sourceLang,
        target_lang: targetLang,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`DeepL API Error: ${response.status} - ${errorText}`);
    }

    const data: DeepLResponse = await response.json();
    
    // Ergebnis zusammenbauen mit originalen leeren Strings
    const result = [...texts];
    data.translations.forEach((translation, i) => {
      result[nonEmptyIndices[i]] = translation.text;
    });
    
    return result;
  } catch (error) {
    console.error('DeepL Translation Error:', error);
    throw error;
  }
}

/**
 * Sanity Document übersetzen (für Trips, Testimonials, Pages)
 */
export async function translateDocument(
  document: Record<string, unknown>,
  targetLang: 'EN' | 'FR',
  fieldsToTranslate: string[]
): Promise<Record<string, unknown>> {
  const translatedDoc = { ...document };

  for (const field of fieldsToTranslate) {
    const value = document[field];

    if (!value) continue;

    // String direkt übersetzen
    if (typeof value === 'string') {
      translatedDoc[field] = await translateText(value, targetLang);
    }

    // Array von Strings übersetzen
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'string') {
      translatedDoc[field] = await translateMultiple(value as string[], targetLang);
    }

    // Array von Objekten (z.B. Itinerary, mapStations)
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
      translatedDoc[field] = await Promise.all(
        value.map(async (item: Record<string, unknown>) => {
          const translatedItem = { ...item };
          
          for (const key in item) {
            // Strings übersetzen
            if (typeof item[key] === 'string') {
              translatedItem[key] = await translateText(item[key] as string, targetLang);
            }
            // Arrays von Strings (z.B. activities)
            if (Array.isArray(item[key]) && (item[key] as unknown[]).every(v => typeof v === 'string')) {
              translatedItem[key] = await translateMultiple(item[key] as string[], targetLang);
            }
          }
          
          return translatedItem;
        })
      );
    }

    // Objekt (z.B. accommodation)
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      const obj = value as Record<string, unknown>;
      const translatedObj = { ...obj };
      
      for (const key in obj) {
        if (typeof obj[key] === 'string') {
          translatedObj[key] = await translateText(obj[key] as string, targetLang);
        }
      }
      
      translatedDoc[field] = translatedObj;
    }
  }

  return translatedDoc;
}