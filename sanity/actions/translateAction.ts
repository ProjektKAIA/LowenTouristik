// sanity/actions/translateAction.ts

import { DocumentActionComponent } from 'sanity';
import { useState } from 'react';

export const translateAction: DocumentActionComponent = (props) => {
  const { id, type, published, draft } = props;
  const [isTranslating, setIsTranslating] = useState(false);

  // Nur für unterstützte Typen anzeigen
  const supportedTypes = ['trip', 'testimonial', 'page'];
  if (!supportedTypes.includes(type)) {
    return null;
  }

  // Nicht anzeigen wenn es bereits eine Übersetzung ist
  if (id.includes('__i18n_')) {
    return null;
  }

  const doc = draft || published;
  const hasContent = doc && (doc.title || doc.text || doc.shortDescription);

  return {
    label: isTranslating ? '⏳ Übersetze...' : '🌍 Nach EN/FR übersetzen',
    disabled: isTranslating || !hasContent,
    tone: 'primary',
    onHandle: async () => {
      if (!confirm('Dokument nach Englisch und Französisch übersetzen?')) {
        return;
      }

      setIsTranslating(true);

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

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Translation failed');
        }

        alert(`✅ Erfolgreich übersetzt!\n\nEN: ${data.translations[0]?.documentId}\nFR: ${data.translations[1]?.documentId}`);
        
        // Seite neu laden um Übersetzungen zu sehen
        window.location.reload();

      } catch (error) {
        console.error('Translation Error:', error);
        alert(`❌ Übersetzung fehlgeschlagen:\n${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
      } finally {
        setIsTranslating(false);
      }
    },
  };
};