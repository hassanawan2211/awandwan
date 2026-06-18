"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Vehicle Rental",
    subtitle: "Premium Cars with Professional Drivers",
    description: "Experience comfort and reliability with our premium vehicle rental service. Currently available with professional chauffeurs, with self-drive options launching soon.",
    image: "/images/car-rental.png",
    features: ["Professional trained drivers", "Fleet of premium vehicles", "Airport pickup & drop-off", "Corporate travel packages", "Wedding & event transport", "Self-drive coming soon"],
  },
  {
    title: "Business Facilitation",
    subtitle: "Your Gateway to Success",
    description: "We streamline business operations by providing comprehensive facilitation services including company registration, market analysis, partnership development, and strategic consulting.",
    image: "/images/business-facilitation.png",
    features: ["Company registration & setup", "Market research & analysis", "Strategic partnerships", "Import/export guidance", "Legal & compliance support", "Investment consulting"],
  },
  {
    title: "Agriculture & Livestock",
    subtitle: "Nurturing Growth, Harvesting Success",
    description: "Supporting the backbone of Pakistan's economy through modern agricultural practices and livestock management with end-to-end solutions from farming consultation to market access.",
    image: "/images/agriculture.png",
    features: ["Modern farming techniques", "Livestock management", "Crop consultation services", "Supply chain solutions", "Agricultural equipment", "Market access & distribution"],
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-primary border border-primary/20 mb-4">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gold-gradient">Services</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">From premium vehicle rentals to agricultural excellence, we deliver comprehensive solutions that drive growth and prosperity.</p>
        </div>
        <div className="space-y-20 sm:space-y-24">
          {services.map((service, index) => (
            <div key={service.title} ref={(el) => { refs.current[index] = el; }} data-index={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
              <div className={`space-y-6 pt-6 lg:pt-0 text-center lg:text-left ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{service.title}</h3>
                  <p className="text-primary text-sm sm:text-base font-medium">{service.subtitle}</p>
                </div>
                <p className="text-text-muted leading-relaxed">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-text-muted">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#booking" className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors group">
                  Learn More & Book
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
