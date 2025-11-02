// components/sections/ValuePropositionsSection.tsx
'use client';

import { useTranslations } from 'next-intl';

export function ValuePropositionsSection() {
  const t = useTranslations('values');

  return (
    <section id="werte" className="py-24 bg-gradient-to-br from-primary to-accent-green text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6">
            {t('mainTitle')}
          </h2>
          <p className="scroll-reveal text-xl md:text-2xl font-handwritten text-secondary" style={{ animationDelay: '0.1s' }}>
            {t('mainSubtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Unterschied 1 */}
          <div className="scroll-reveal bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">❌</div>
              <div>
                <div className="font-bold text-lg mb-2">{t('comparison1.standard.title')}</div>
                <p className="text-white/70 text-sm">{t('comparison1.standard.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-4xl">✅</div>
              <div>
                <div className="font-bold text-lg mb-2 text-secondary">{t('comparison1.ours.title')}</div>
                <p className="text-white/90 text-sm">{t('comparison1.ours.description')}</p>
              </div>
            </div>
          </div>

          {/* Unterschied 2 */}
          <div className="scroll-reveal bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">❌</div>
              <div>
                <div className="font-bold text-lg mb-2">{t('comparison2.standard.title')}</div>
                <p className="text-white/70 text-sm">{t('comparison2.standard.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-4xl">✅</div>
              <div>
                <div className="font-bold text-lg mb-2 text-secondary">{t('comparison2.ours.title')}</div>
                <p className="text-white/90 text-sm">{t('comparison2.ours.description')}</p>
              </div>
            </div>
          </div>

          {/* Unterschied 3 */}
          <div className="scroll-reveal bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">❌</div>
              <div>
                <div className="font-bold text-lg mb-2">{t('comparison3.standard.title')}</div>
                <p className="text-white/70 text-sm">{t('comparison3.standard.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-4xl">✅</div>
              <div>
                <div className="font-bold text-lg mb-2 text-secondary">{t('comparison3.ours.title')}</div>
                <p className="text-white/90 text-sm">{t('comparison3.ours.description')}</p>
              </div>
            </div>
          </div>

          {/* Unterschied 4 */}
          <div className="scroll-reveal bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">❌</div>
              <div>
                <div className="font-bold text-lg mb-2">{t('comparison4.standard.title')}</div>
                <p className="text-white/70 text-sm">{t('comparison4.standard.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-4xl">✅</div>
              <div>
                <div className="font-bold text-lg mb-2 text-secondary">{t('comparison4.ours.title')}</div>
                <p className="text-white/90 text-sm">{t('comparison4.ours.description')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full">
            <svg className="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">{t('badge')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}