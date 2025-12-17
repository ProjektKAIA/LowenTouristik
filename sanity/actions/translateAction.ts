// sanity/actions/translateAction.ts

import { DocumentActionComponent } from 'sanity';

export const translateAction: DocumentActionComponent = (props) => {
  const { id, type } = props;

  const supportedTypes = ['trip', 'testimonial', 'page'];
  if (!supportedTypes.includes(type)) {
    return null;
  }

  return {
    label: 'Translate Document',
    icon: () => '🌍',
    onHandle: async () => {
      try {
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

        await response.json();
        props.onComplete();
        alert(`✅ Document übersetzt nach EN und FR!`);
      } catch (error) {
        console.error('Translation Error:', error);
        alert('❌ Übersetzung fehlgeschlagen. Siehe Console für Details.');
      }
    },
  };
};