"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ahmad Raza",
    location: "Multan, Punjab",
    service: "Vehicle Rental",
    rating: 5,
    text: "I booked a car with driver for my brother's wedding and the service was outstanding. The driver was professional, the vehicle was spotless, and they arrived right on time. Highly recommend AWAN D-WAN!",
  },
  {
    name: "Bilal Hussain",
    location: "Burewala, Punjab",
    service: "Agriculture Consultation",
    rating: 5,
    text: "Their agriculture team helped us modernize our wheat farming practices. Crop yield increased significantly this season. Musawar Awan's guidance on livestock management has been invaluable.",
  },
  {
    name: "Tariq Mehmood",
    location: "Lahore, Punjab",
    service: "Business Facilitation",
    rating: 5,
    text: "AWAN D-WAN helped me set up my import-export business with proper registration and compliance. Their team handled everything professionally. A truly reliable partner for business growth.",
  },
  {
    name: "Shahbaz Khan",
    location: "Vehari, Punjab",
    service: "Vehicle Rental",
    rating: 5,
    text: "We use their car rental service regularly for corporate travel. The drivers are always courteous and the vehicles are well-maintained. Best rental service in South Punjab!",
  },
  {
    name: "Usman Ali",
    location: "Bahawalpur, Punjab",
    service: "Agriculture & Livestock",
    rating: 4,
    text: "Great support for livestock management. Their supply chain solutions helped us reach better markets. The team is knowledgeable and always available when needed.",
  },
  {
    name: "Hamza Awan",
    location: "Khanewal, Punjab",
    service: "Business Facilitation",
    rating: 5,
    text: "From company registration to market research, AWAN D-WAN made the entire process smooth and stress-free. Their professionalism is unmatched in the region.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-primary" : "text-card-border"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
    <section id="testimonials" className="section-padding relative bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-primary border border-primary/20 mb-4">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">
            Trusted by hundreds of clients across Pakistan. Here&apos;s what they have to say about our services.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-primary/30 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-card-border pt-4">
                <StarRating rating={t.rating} />
                <div className="mt-3">
                  <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                  <p className="text-xs text-text-muted">{t.location}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/10 text-primary">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
