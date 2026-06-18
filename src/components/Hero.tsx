"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "3", label: "Countries" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.png"
          alt="AWAN D-WAN Hero Banner"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Main Content */}
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-text-muted">
                Now Operating in Pakistan &amp; UAE
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-gold-gradient">AWAN</span>{" "}
              <span className="text-foreground">D-WAN</span>
              <br />
              <span className="text-lg sm:text-2xl md:text-3xl font-light text-text-muted tracking-[0.15em] uppercase">
                Private Limited
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              Delivering excellence in vehicle rental, business facilitation, 
              and agriculture services across Pakistan and the UAE. Your trusted
              partner for growth and mobility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="#booking"
                className="group relative inline-flex items-center justify-center px-10 py-4 rounded-xl bg-gradient-to-r from-primary-dark via-primary to-primary-light text-background font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02]"
              >
                <span className="relative z-10">Book a Vehicle</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl border border-primary/30 text-primary font-semibold text-base sm:text-lg hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              >
                Explore Services
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div
            className={`mt-14 sm:mt-20 w-full max-w-5xl transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`glass rounded-2xl p-6 sm:p-8 text-center hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${
                    index === 0 ? "animation-delay-200" : ""
                  } ${index === 1 ? "animation-delay-400" : ""} ${
                    index === 2 ? "animation-delay-600" : ""
                  } ${index === 3 ? "animation-delay-800" : ""}`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs text-text-muted">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
