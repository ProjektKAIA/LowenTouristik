// sanity/actions/translateHomepageAction.ts
import { DocumentActionComponent, useDocumentOperation } from 'sanity';
import { useState } from 'react';

async function translateWithDeepL(text: string, targetLang: 'EN' | 'FR'): Promise<string> {
  const apiKey = process.env.SANITY_STUDIO_DEEPL_API_KEY;
  
  if (!apiKey) {
    throw new Error('SANITY_STUDIO_DEEPL_API_KEY nicht konfiguriert');
  }

  const response = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `DeepL-Auth-Key ${apiKey}`,
    },
    body: JSON.stringify({
      text: [text],
      source_lang: 'DE',
      target_lang: targetLang,
    }),
  });

  if (!response.ok) {
    throw new Error(`DeepL API Fehler: ${response.status}`);
  }

  const data = await response.json();
  return data.translations[0].text;
}

async function translateLocalizedFields(
  obj: any,
  targetLang: 'EN' | 'FR'
): Promise<any> {
  if (!obj || typeof obj !== 'object') return obj;

  if ('de' in obj && typeof obj.de === 'string' && obj.de.trim()) {
    const langKey = targetLang.toLowerCase() as 'en' | 'fr';
    
    if (!obj[langKey] || obj[langKey].trim() === '') {
      try {
        const translated = await translateWithDeepL(obj.de, targetLang);
        return { ...obj, [langKey]: translated };
      } catch (error) {
        console.error(`Übersetzungsfehler für "${obj.de}":`, error);
        return obj;
      }
    }
    return obj;
  }

  if (Array.isArray(obj)) {
    const results = [];
    for (const item of obj) {
      results.push(await translateLocalizedFields(item, targetLang));
    }
    return results;
  }

  const result: any = {};
  for (const key of Object.keys(obj)) {
    result[key] = await translateLocalizedFields(obj[key], targetLang);
  }
  return result;
}

export const translateHomepageAction: DocumentActionComponent = (props) => {
  const { id, type, draft, published } = props;
  const { patch } = useDocumentOperation(id, type);
  const [isTranslating, setIsTranslating] = useState(false);
  const [status, setStatus] = useState<string>('');

  if (type !== 'homepage' && type !== 'aboutPage') return null;

  const doc = draft || published;

  return {
    label: isTranslating ? status : '🌍 Übersetzen (DE → EN/FR)',
    disabled: isTranslating || !doc,
    onHandle: async () => {
      if (!doc) return;

      setIsTranslating(true);
      
      try {
        setStatus('Übersetze nach Englisch...');
        let translatedDoc = await translateLocalizedFields(doc, 'EN');
        
        setStatus('Übersetze nach Französisch...');
        translatedDoc = await translateLocalizedFields(translatedDoc, 'FR');

        setStatus('Speichere...');
        
        patch.execute([
          { setIfMissing: {} },
          { 
            set: {
              hero: translatedDoc.hero,
              valuesSection: translatedDoc.valuesSection,
              aboutPreview: translatedDoc.aboutPreview,
              ctaSection: translatedDoc.ctaSection,
              story: translatedDoc.story,
              mission: translatedDoc.mission,
              seo: translatedDoc.seo,
            }
          }
        ]);

        setStatus('✅ Übersetzung abgeschlossen!');
        
        setTimeout(() => {
          setIsTranslating(false);
          setStatus('');
        }, 2000);

      } catch (error) {
        console.error('Übersetzungsfehler:', error);
        setStatus('❌ Fehler bei der Übersetzung');
        
        setTimeout(() => {
          setIsTranslating(false);
          setStatus('');
        }, 3000);
      }
    },
  };
};