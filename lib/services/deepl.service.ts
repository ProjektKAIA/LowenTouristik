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

  try {
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        text,
        source_lang: sourceLang,
        target_lang: targetLang,
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepL API Error: ${response.status}`);
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

  try {
    const params = new URLSearchParams({
      source_lang: sourceLang,
      target_lang: targetLang,
    });

    // Mehrere "text" Parameter hinzufügen
    texts.forEach(text => params.append('text', text));

    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    if (!response.ok) {
      throw new Error(`DeepL API Error: ${response.status}`);
    }

    const data: DeepLResponse = await response.json();
    return data.translations.map(t => t.text);
  } catch (error) {
    console.error('DeepL Translation Error:', error);
    throw error;
  }
}

/**
 * Sanity Document übersetzen (für Trips, Testimonials, Pages)
 */
export async function translateDocument(
  document: any,
  targetLang: 'EN' | 'FR',
  fieldsToTranslate: string[]
): Promise<any> {
  const translatedDoc = { ...document };

  for (const field of fieldsToTranslate) {
    const value = document[field];

    if (!value) continue;

    // String direkt übersetzen
    if (typeof value === 'string') {
      translatedDoc[field] = await translateText(value, targetLang);
    }

    // Array von Strings übersetzen
    if (Array.isArray(value) && value.every(v => typeof v === 'string')) {
      translatedDoc[field] = await translateMultiple(value, targetLang);
    }

    // Array von Objekten (z.B. Itinerary)
    if (Array.isArray(value) && value.some(v => typeof v === 'object')) {
      translatedDoc[field] = await Promise.all(
        value.map(async (item) => {
          const translatedItem = { ...item };
          for (const key in item) {
            if (typeof item[key] === 'string') {
              translatedItem[key] = await translateText(item[key], targetLang);
            }
          }
          return translatedItem;
        })
      );
    }
  }

  return translatedDoc;
}