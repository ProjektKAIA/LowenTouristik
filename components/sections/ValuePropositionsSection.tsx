// components/sections/ValuePropositionsSection.tsx
'use client';

import { VALUES } from '@/lib/constants';

export function ValuePropositionsSection() {
  return (
    <section id="werte" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-primary-blue mb-6">
            Warum mit uns reisen?
          </h2>
          <p className="text-xl text-neutral-brown/80 max-w-3xl mx-auto">
            Wir machen Reisen anders – respektvoll, authentisch und nachhaltig.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, index) => (
            <div
              key={index}
              className="bg-neutral-cream p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center group"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-blue mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-brown/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}