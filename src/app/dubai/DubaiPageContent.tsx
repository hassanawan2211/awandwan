"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const companies = [
  {
    name: "Zawar Ali Transport by Heavy & Light Trucks LLC",
    description: "Our flagship transport company specializing in all kinds of cargo transportation and heavy machinery movement across the UAE.",
  },
  {
    name: "Muftah Al Khair Cargo Transport by Heavy/Light Truck LLC",
    description: "Dedicated cargo transport fleet offering reliable and timely delivery of goods across Dubai and the Emirates.",
  },
  {
    name: "Al Diwan Al Jadeda Transport LLC",
    description: "Comprehensive transport solutions including specialized trailer services and logistics management.",
  },
];

const dubaiServices = [
  {
    title: "Cargo Transportation",
    description: "Complete cargo transport solutions for goods of all sizes across the UAE using our modern fleet of heavy and light trucks.",
    icon: "🚛",
  },
  {
    title: "Heavy Machinery Transport",
    description: "Specialized transport for construction equipment, industrial machinery, and oversized loads with full safety compliance.",
    icon: "⚙️",
  },
  {
    title: "Trailer Services",
    description: "All kinds of trailers including flatbed, lowbed, and specialized trailers for diverse transportation needs.",
    icon: "🔗",
  },
  {
    title: "Crane Operations",
    description: "Professional crane services for construction, loading/unloading, and heavy lifting operations across Dubai.",
    icon: "🏗️",
  },
  {
    title: "Forklift Services",
    description: "Industrial forklift services for warehouse operations, loading docks, and material handling requirements.",
    icon: "📦",
  },
  {
    title: "Pickup — 24 Hrs Service",
    description: "Round-the-clock pickup and delivery services ensuring your cargo reaches its destination on time, any time.",
    icon: "🕐",
  },
];

const dubaiTeam = [
  {
    name: "Malik Zawar Ali",
    role: "Co-Founder & CEO",
    description: "Visionary leader and founder of Zawar Group, overseeing all Dubai transport operations with over a decade of industry expertise in the UAE logistics sector.",
    initials: "MZ",
    gradient: "from-primary-dark to-primary",
    phone: "+971 050 717 2047",
  },
  {
    name: "Ghazi Haider",
    role: "Financial Manager",
    description: "Seasoned financial strategist managing budgets, accounts, and financial planning across all Zawar Group companies to ensure sustainable growth.",
    initials: "GH",
    gradient: "from-emerald-600 to-emerald-400",
    phone: "",
  },
  {
    name: "Moazam Ali",
    role: "Assistant Director",
    description: "Operations expert coordinating fleet management, client relationships, and day-to-day logistics for smooth service delivery across Dubai.",
    initials: "MA",
    gradient: "from-accent to-blue-400",
    phone: "",
  },
];

function useInView() {
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
  return { ref, visible };
}

export default function DubaiPageContent() {
  const hero = useInView();
  const companiesSection = useInView();
  const servicesSection = useInView();
  const teamSection = useInView();
  const contactSection = useInView();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg shadow-black/20 py-2" : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-lg">
              <Image src="/images/logo.png" alt="AWAN D-WAN" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-gold-gradient tracking-wide">Zawar Group</span>
              <span className="text-[10px] sm:text-xs text-text-muted tracking-[0.15em] uppercase">Dubai, UAE</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <a href="#companies" className="px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-foreground hover:bg-white/5 transition-all">Companies</a>
            <a href="#services-dubai" className="px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-foreground hover:bg-white/5 transition-all">Services</a>
            <a href="#team-dubai" className="px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-foreground hover:bg-white/5 transition-all">Team</a>
            <a href="#contact-dubai" className="px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-foreground hover:bg-white/5 transition-all">Contact</a>
          </div>
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary-light text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="hidden sm:inline">Back to Main</span>
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" ref={hero.ref}>
          <div className="absolute inset-0">
            <Image src="/images/dubai-transport.png" alt="Zawar Group Dubai" fill className="object-cover" priority quality={90} />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
          </div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full text-center transition-all duration-1000 ${hero.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-text-muted">Dubai, United Arab Emirates</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gold-gradient">Zawar Group</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-8">
              All kinds of cargo transportation and heavy machinery services across the UAE. Three companies, one mission — delivering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+9710507172047" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-dark via-primary to-primary-light text-background font-semibold hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
              <a href="#services-dubai" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-primary/30 text-primary font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all">
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* Companies */}
        <section id="companies" className="section-padding relative" ref={companiesSection.ref}>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${companiesSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-primary border border-primary/20 mb-4">Our Portfolio</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gold-gradient">Companies</span></h2>
              <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">Three specialized transport companies operating under the Zawar Group umbrella in Dubai.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companies.map((c, i) => (
                <div key={c.name} className="glass rounded-2xl p-6 sm:p-8 text-center hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center text-2xl">
                    🚛
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{c.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services-dubai" className="section-padding relative bg-gradient-to-b from-background via-secondary/20 to-background" ref={servicesSection.ref}>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${servicesSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-primary border border-primary/20 mb-4">What We Do</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gold-gradient">Services</span></h2>
              <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">Comprehensive transport and logistics solutions for every need.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dubaiServices.map((s, i) => (
                <div key={s.title} className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
            {/* Gallery */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group">
                <Image src="/images/dubai-transport.png" alt="Dubai Transport Fleet" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-foreground">Our Modern Fleet</h3>
                  <p className="text-sm text-text-muted">Heavy & light trucks ready for service</p>
                </div>
              </div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group">
                <Image src="/images/heavy-machinery.png" alt="Heavy Machinery" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-foreground">Heavy Machinery</h3>
                  <p className="text-sm text-text-muted">Cranes, forklifts & specialized equipment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team-dubai" className="section-padding relative" ref={teamSection.ref}>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${teamSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-primary border border-primary/20 mb-4">Dubai Leadership</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Dubai <span className="text-gold-gradient">Team</span></h2>
              <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">The experienced leadership team driving Zawar Group&apos;s success in the UAE.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {dubaiTeam.map((member, i) => (
                <div key={member.name} className="glass rounded-2xl p-6 sm:p-8 text-center hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 group" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className={`w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl font-bold text-background group-hover:scale-110 transition-transform duration-300`}>
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">{member.description}</p>
                  {member.phone && (
                    <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-primary hover:text-primary-light text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      {member.phone}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact-dubai" className="section-padding relative bg-gradient-to-b from-background via-secondary/20 to-background" ref={contactSection.ref}>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${contactSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-primary border border-primary/20 mb-4">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Contact <span className="text-gold-gradient">Us</span></h2>
            </div>
            <div className="glass rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-6 text-center sm:text-left">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Office Address</h3>
                    <p className="text-text-muted text-sm">P.O. Box: 92067<br />Dubai, United Arab Emirates</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                    <a href="tel:+97142942280" className="block text-primary hover:text-primary-light text-sm transition-colors">Tel: 04 2942280</a>
                    <a href="tel:+97142207079" className="block text-text-muted text-sm">Fax: 04 2207079</a>
                    <a href="tel:+9710507172047" className="block text-primary hover:text-primary-light text-sm mt-2 transition-colors">+971 050 717 2047</a>
                    <a href="tel:+9710556777487" className="block text-primary hover:text-primary-light text-sm transition-colors">+971 055 677 7487</a>
                  </div>
                </div>
                <div className="space-y-6 text-center sm:text-left">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                    <a href="mailto:info@zawargroupuae.com" className="block text-primary hover:text-primary-light text-sm transition-colors">info@zawargroupuae.com</a>
                    <a href="mailto:zawaralitransport@gmail.com" className="block text-primary hover:text-primary-light text-sm transition-colors">zawaralitransport@gmail.com</a>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Quick Contact</h3>
                    <a href="https://wa.me/9710507172047" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] transition-all">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-background to-black/50 py-8">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center sm:text-left">
            &copy; {new Date().getFullYear()} Zawar Group — A division of AWAN D-WAN Private Limited. All rights reserved.
          </p>
          <Link href="/" className="text-xs text-primary hover:text-primary-light transition-colors">
            ← Back to awandwan.com
          </Link>
        </div>
      </footer>
    </>
  );
}
