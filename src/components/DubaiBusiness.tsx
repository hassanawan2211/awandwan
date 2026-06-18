"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function DubaiBusiness() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dubai" className="section-padding relative bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-primary border border-primary/20 mb-4">International Operations</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gold-gradient">Zawar Group</span> — Dubai, UAE
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">
            Our Dubai-based transport division provides comprehensive cargo and heavy machinery transportation services across the United Arab Emirates.
          </p>
        </div>

        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {/* Image Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group">
              <Image src="/images/dubai-transport.png" alt="Dubai Transport Fleet" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center sm:text-left">
                <h3 className="text-lg font-bold text-foreground">Heavy Cargo Fleet</h3>
                <p className="text-sm text-text-muted">Dubai, United Arab Emirates</p>
              </div>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group">
              <Image src="/images/heavy-machinery.png" alt="Heavy Machinery Operations" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center sm:text-left">
                <h3 className="text-lg font-bold text-foreground">Crane & Forklift Operations</h3>
                <p className="text-sm text-text-muted">24/7 Service Available</p>
              </div>
            </div>
          </div>

          {/* Highlights + CTA */}
          <div className="glass rounded-2xl p-6 sm:p-8 text-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gold-gradient mb-1">3</div>
                <div className="text-xs sm:text-sm text-text-muted">Companies</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gold-gradient mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-text-muted">Service</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gold-gradient mb-1">6+</div>
                <div className="text-xs sm:text-sm text-text-muted">Service Types</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gold-gradient mb-1">UAE</div>
                <div className="text-xs sm:text-sm text-text-muted">Wide Coverage</div>
              </div>
            </div>
            <p className="text-text-muted mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Cargo transport, heavy machinery, trailers, cranes, forklifts, and pickup services — all under one roof in Dubai.
            </p>
            <Link
              href="/dubai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-dark via-primary to-primary-light text-background font-semibold text-base hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300"
            >
              Explore Dubai Operations
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
