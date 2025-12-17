// app/api/translate/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/sanity/client';
import { writeClient } from '@/lib/sanity/writeClient';
import { translateDocument } from '@/lib/services/deepl.service';

/**
 * API Route: Document Translation
 * 
 * Übersetzt ein Sanity Document von DE nach EN/FR
 * Erstellt separate Dokumente für jede Sprache (Document Internationalization)
 */
export async function POST(request: NextRequest) {
  try {
    const { documentId, documentType, targetLanguages } = await request.json();

    // Validierung
    if (!documentId || !documentType || !targetLanguages) {
      return NextResponse.json(
        { error: 'Missing required fields: documentId, documentType, targetLanguages' },
        { status: 400 }
      );
    }

    // Token check
    if (!process.env.SANITY_API_TOKEN) {
      return NextResponse.json(
        { error: 'SANITY_API_TOKEN not configured' },
        { status: 500 }
      );
    }

    // DeepL Key check
    if (!process.env.DEEPL_API_KEY) {
      return NextResponse.json(
        { error: 'DEEPL_API_KEY not configured' },
        { status: 500 }
      );
    }

    // Original Document aus Sanity holen (mit drafts. Prefix falls vorhanden)
    const originalDoc = await client.fetch(
      `*[_type == $type && (_id == $id || _id == "drafts." + $id)][0]`,
      { type: documentType, id: documentId.replace('drafts.', '') }
    );

    if (!originalDoc) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 }
      );
    }

    // Fields die übersetzt werden sollen
    const fieldsToTranslate = getFieldsToTranslate(documentType);
    const results = [];

    // Für jede Zielsprache übersetzen
    for (const targetLang of targetLanguages) {
      const langUpper = targetLang.toUpperCase() as 'EN' | 'FR';
      
      // Übersetzen
      const translatedDoc = await translateDocument(
        originalDoc,
        langUpper,
        fieldsToTranslate
      );

      // Basis-ID ohne drafts. Prefix
      const baseId = documentId.replace('drafts.', '');
      const newDocId = `${baseId}__i18n_${targetLang}`;

      // Dokument für Sanity vorbereiten
      const docToSave = {
        ...translatedDoc,
        _id: newDocId,
        _type: documentType,
        // Document Internationalization Metadata
        language: targetLang,
        // Referenz zum Original-Dokument
        __i18n_refs: [
          {
            _key: 'base',
            _type: 'reference',
            _ref: baseId,
          }
        ],
      };

      // Interne Felder entfernen
      delete (docToSave as Record<string, unknown>)._rev;
      delete (docToSave as Record<string, unknown>)._createdAt;
      delete (docToSave as Record<string, unknown>)._updatedAt;

      // In Sanity speichern mit writeClient
      await writeClient.createOrReplace(docToSave);

      results.push({
        language: targetLang,
        documentId: newDocId,
        status: 'success',
      });
    }

    // Original-Dokument mit language: 'de' markieren (falls noch nicht)
    const baseId = documentId.replace('drafts.', '');
    await writeClient
      .patch(baseId)
      .set({ language: 'de' })
      .commit();

    return NextResponse.json({
      success: true,
      originalId: documentId,
      translations: results,
      message: `Successfully translated to ${targetLanguages.join(', ').toUpperCase()}`,
    });

  } catch (error) {
    console.error('Translation API Error:', error);
    return NextResponse.json(
      { 
        error: 'Translation failed', 
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * Helper: Welche Fields sollen übersetzt werden?
 */
function getFieldsToTranslate(documentType: string): string[] {
  const fieldMap: Record<string, string[]> = {
    trip: [
      'title',
      'shortDescription',
      'highlights',
      'itinerary',
      'mapStations',
      'included',
      'notIncluded',
      'accommodation',
    ],
    testimonial: [
      'text',
      'trip',
    ],
    page: [
      'title',
      'description',
    ],
  };

  return fieldMap[documentType] || [];
}