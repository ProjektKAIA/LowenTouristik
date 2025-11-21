// sanity/actions/translateAction.ts

import { DocumentActionComponent } from 'sanity';

/**
 * Sanity Document Action: "Translate to EN/FR"
 * 
 * Zeigt einen Button im Studio, der das Document automatisch übersetzt
 */
export const translateAction: DocumentActionComponent = (props) => {
  const { id, type, draft, published } = props;

  // Nur für bestimmte Document Types zeigen
  const supportedTypes = ['trip', 'testimonial', 'page'];
  if (!supportedTypes.includes(type)) {
    return null;
  }

  return {
    label: 'Translate Document',
    icon: () => '🌍',
    onHandle: async () => {
      try {
        // API Route aufrufen die die Übersetzung macht
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            documentId: id,
            documentType: type,
            targetLanguages: ['en', 'fr'],
          }),
        });

        if (!response.ok) {
          throw new Error('Translation failed');
        }

        const result = await response.json();
        
        // Success feedback
        props.onComplete();
        
        // Optional: Toast notification
        alert(`✅ Document übersetzt nach EN und FR!`);
      } catch (error) {
        console.error('Translation Error:', error);
        alert('❌ Übersetzung fehlgeschlagen. Siehe Console für Details.');
      }
    },
  };
};