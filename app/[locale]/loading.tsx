// app/[locale]/loading.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Loading() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8 animate-pulse">
            {/* Hero Skeleton */}
            <div className="h-96 bg-neutral-cream rounded-3xl"></div>
            
            {/* Content Skeleton */}
            <div className="space-y-4">
              <div className="h-8 bg-neutral-cream rounded-lg w-3/4"></div>
              <div className="h-4 bg-neutral-cream rounded-lg w-full"></div>
              <div className="h-4 bg-neutral-cream rounded-lg w-5/6"></div>
            </div>

            {/* Cards Skeleton */}
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-neutral-cream rounded-3xl"></div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}