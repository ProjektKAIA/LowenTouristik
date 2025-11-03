// components/sections/OurValuesSection.tsx
'use client';

import { useTranslations } from 'next-intl';

export function OurValuesSection() {
  const t = useTranslations('values');

  const principles = [
    {
      icon: '🌱',
      key: 'sustainability',
      color: 'from-accent-green to-primary'
    },
    {
      icon: '🤝',
      key: 'respect',
      color: 'from-primary to-accent-green'
    },
    {
      icon: '👥',
      key: 'community',
      color: 'from-secondary to-accent-red'
    },
    {
      icon: '🎭',
      key: 'authenticity',
      color: 'from-accent-red to-primary'
    },
    {
      icon: '💰',
      key: 'fairness',
      color: 'from-primary to-secondary'
    },
    {
      icon: '🌍',
      key: 'responsibility',
      color: 'from-accent-green to-accent-red'
    }
  ];

  return (
    <section className="py-24 bg-neutral-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-primary mb-6">
            {t('principles.title')}
          </h2>
          <p className="text-xl md:text-2xl text-neutral-brown">
            {t('principles.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={principle.key}
              className="principle-card group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {principle.icon}
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                {t(`principles.${principle.key}.title`)}
              </h3>
              
              <p className="text-neutral-brown leading-relaxed mb-4">
                {t(`principles.${principle.key}.description`)}
              </p>

              <ul className="space-y-2">
                {[1, 2, 3].map((num) => (
                  <li key={num} className="flex items-start gap-2 text-sm text-neutral-brown/80">
                    <span className="text-accent-green mt-1">✓</span>
                    <span>{t(`principles.${principle.key}.point${num}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent-green text-white p-12 rounded-3xl shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              {t('commitment.title')}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              {t('commitment.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="text-4xl mb-3">{t('commitment.stat1.icon')}</div>
                <div className="text-3xl font-bold mb-2">{t('commitment.stat1.value')}</div>
                <div className="text-sm text-white/80">{t('commitment.stat1.label')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="text-4xl mb-3">{t('commitment.stat2.icon')}</div>
                <div className="text-3xl font-bold mb-2">{t('commitment.stat2.value')}</div>
                <div className="text-sm text-white/80">{t('commitment.stat2.label')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="text-4xl mb-3">{t('commitment.stat3.icon')}</div>
                <div className="text-3xl font-bold mb-2">{t('commitment.stat3.value')}</div>
                <div className="text-sm text-white/80">{t('commitment.stat3.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}