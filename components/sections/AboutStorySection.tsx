// components/sections/AboutStorySection.tsx
'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function AboutStorySection() {
  const tStory = useTranslations('about.story');
  const tEdu = useTranslations('about.education');

  return (
    <section className="py-24 bg-neutral-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Story Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-secondary/20 rounded-3xl" />
                <div className="relative rounded-3xl shadow-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop"
                    alt={tStory('imageAlt')}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-5xl font-black text-primary mb-1">19+</div>
                    <div className="text-sm text-neutral-brown/70 font-bold">{tStory('badge')}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary mb-8">
                {tStory('title')}
              </h2>

              <p className="text-xl text-primary font-bold mb-6 leading-relaxed">
                {tStory('intro')}
              </p>

              <div className="space-y-6 text-lg text-neutral-brown/90 leading-relaxed">
                <p>{tStory('paragraph1')}</p>
                <p>{tStory('paragraph2')}</p>
                <p>{tStory('paragraph3')}</p>
              </div>
            </div>
          </div>

          {/* Languages & Representative Boxes */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🌍</div>
                <h3 className="text-2xl font-serif font-bold text-primary">
                  {tStory('languages.title')}
                </h3>
              </div>
              <p className="text-neutral-brown leading-relaxed">
                {tStory('languages.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary to-accent-green text-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🏆</div>
                <h3 className="text-2xl font-serif font-bold">
                  {tStory('representative.title')}
                </h3>
              </div>
              <p className="leading-relaxed">
                {tStory('representative.description')}
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-serif font-bold text-primary mb-4 text-center">
              {tEdu('title')}
            </h3>
            <p className="text-center text-neutral-brown/70 mb-12 text-lg">
              {tEdu('subtitle')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-bold text-primary mb-2">
                  {tEdu('degree1.title')}
                </h4>
                <p className="text-sm font-semibold text-accent-green mb-3">
                  {tEdu('degree1.institution')}
                </p>
                <p className="text-neutral-brown/80 leading-relaxed">
                  {tEdu('degree1.description')}
                </p>
              </div>

              <div className="border-l-4 border-accent-red pl-6">
                <h4 className="text-xl font-bold text-primary mb-2">
                  {tEdu('degree2.title')}
                </h4>
                <p className="text-sm font-semibold text-accent-green mb-3">
                  {tEdu('degree2.institution')}
                </p>
                <p className="text-neutral-brown/80 leading-relaxed">
                  {tEdu('degree2.description')}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-cream to-secondary/10 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                <span>✈️</span>
                {tEdu('experience.title')}
              </h4>
              <p className="text-neutral-brown/80 leading-relaxed">
                {tEdu('experience.locations')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}