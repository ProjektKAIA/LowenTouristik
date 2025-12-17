// sanity/lib/live.ts
// Live Content API für Sanity Preview Mode
// Hinweis: defineLive wurde in next-sanity v9+ entfernt
// Stattdessen nutzen wir den Standard-Client mit draftMode()

import { client } from '@/lib/sanity/client';

// Re-export für Kompatibilität
export { client };

// Falls Preview Mode benötigt wird, kann hier später
// eine eigene Implementierung mit draftMode() hinzugefügt werden