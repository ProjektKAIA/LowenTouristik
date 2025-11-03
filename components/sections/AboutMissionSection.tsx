// components/sections/AboutMissionSection.tsx
'use client';

import { useTranslations } from 'next-intl';

export function AboutMissionSection() {
  const t = useTranslations('about');

  const expertise = [
    {
      icon: '🗺️',
      key: 'expertise1',
      color: 'from-primary to-accent-green'
    },
    {
      icon: '🤝',
      key: 'expertise2',
      color: 'from-accent-green to-secondary'
    },
    {
      icon: '🌍',
      key: 'expertise3',
      color: 'from-secondary to-accent-red'
    },
    {
      icon: '👥',
      key: 'expertise4',
      color: 'from-accent-red to-primary'
    },
    {
      icon: '💚',
      key: 'expertise5',
      color: 'from-primary to-accent-green'
    },
    {
      icon: '✨',
      key: 'expertise6',
      color: 'from-accent-green to-primary'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary mb-8">
            {t('mission.title')}
          </h2>
          <p className="text-xl md:text-2xl text-neutral-brown leading-relaxed">
            {t('mission.description')}
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-primary mb-12">
            {t('mission.expertiseTitle')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={item.key}
                className="group bg-neutral-cream hover:bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {item.icon}
                </div>
                
                <h4 className="text-xl font-serif font-bold text-primary mb-3">
                  {t(`mission.${item.key}.title`)}
                </h4>
                
                <p className="text-neutral-brown leading-relaxed">
                  {t(`mission.${item.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mt-20 max-w-5xl mx-auto bg-gradient-to-br from-primary to-accent-green text-white p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              {t('mission.certificationsTitle')}
            </h3>
            <p className="text-lg text-white/90">
              {t('mission.certificationsDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center">
              <div className="text-4xl mb-3">🏆</div>
              <div className="font-bold text-lg mb-2">{t('mission.cert1.title')}</div>
              <div className="text-sm text-white/80">{t('mission.cert1.description')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center">
              <div className="text-4xl mb-3">🌱</div>
              <div className="font-bold text-lg mb-2">{t('mission.cert2.title')}</div>
              <div className="text-sm text-white/80">{t('mission.cert2.description')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center">
              <div className="text-4xl mb-3">⭐</div>
              <div className="font-bold text-lg mb-2">{t('mission.cert3.title')}</div>
              <div className="text-sm text-white/80">{t('mission.cert3.description')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}