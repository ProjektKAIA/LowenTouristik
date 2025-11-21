// app/api/translate/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/sanity/client';
import { translateDocument } from '@/lib/services/deepl.service';

/**
 * API Route: Document Translation
 * 
 * Übersetzt ein Sanity Document von DE nach EN/FR
 */
export async function POST(request: NextRequest) {
  try {
    const { documentId, documentType, targetLanguages } = await request.json();

    if (!documentId || !documentType || !targetLanguages) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Original Document aus Sanity holen
    const originalDoc = await client.fetch(
      `*[_type == $type && _id == $id][0]`,
      { type: documentType, id: documentId }
    );

    if (!originalDoc) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 }
      );
    }

    // Fields die übersetzt werden sollen (pro Document Type)
    const fieldsToTranslate = getFieldsToTranslate(documentType);

    // Für jede Zielsprache übersetzen und in Sanity speichern
    const results = [];

    for (const targetLang of targetLanguages) {
      const translatedDoc = await translateDocument(
        originalDoc,
        targetLang.toUpperCase() as 'EN' | 'FR',
        fieldsToTranslate
      );

      // Neues Document in Sanity mit Sprach-Suffix erstellen
      const newDocId = `${documentId}__i18n_${targetLang}`;
      
      await client.createOrReplace({
        ...translatedDoc,
        _id: newDocId,
        _type: documentType,
        __i18n_lang: targetLang,
        __i18n_base: documentId,
      });

      results.push({
        language: targetLang,
        documentId: newDocId,
      });
    }

    return NextResponse.json({
      success: true,
      originalId: documentId,
      translations: results,
    });

  } catch (error) {
    console.error('Translation API Error:', error);
    return NextResponse.json(
      { error: 'Translation failed', details: (error as Error).message },
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
      'itinerary', // Array von Objekten
      'included',
      'notIncluded',
    ],
    testimonial: [
      'text',
      'trip', // Trip-Name
    ],
    page: [
      'title',
      'description',
      'content', // Portable Text - komplexer
    ],
  };

  return fieldMap[documentType] || [];
}