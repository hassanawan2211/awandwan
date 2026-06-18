import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "/dubai", label: "Dubai Operations" },
  { href: "#team", label: "Leadership" },
  { href: "#booking", label: "Book Now" },
];

const pkServices = [
  "Vehicle Rental",
  "Business Facilitation",
  "Agriculture & Livestock",
];

const uaeServices = [
  "Cargo Transport",
  "Heavy Machinery",
  "Crane & Forklift",
  "24/7 Pickup Service",
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-background to-black/50 pt-16 pb-8">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center sm:text-left">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <Image src="/images/logo.png" alt="AWAN D-WAN" fill className="object-contain" />
              </div>
              <div>
                <span className="text-lg font-bold text-gold-gradient">AWAN D-WAN</span>
                <span className="block text-[10px] text-text-muted tracking-[0.15em] uppercase">Private Limited</span>
              </div>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Delivering excellence in vehicle rental, business facilitation, and agriculture across Pakistan & UAE.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a href="https://wa.me/923057996677" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-card-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="mailto:info@zawargroupuae.com"
                className="w-10 h-10 rounded-lg bg-white/5 border border-card-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </a>
              <a href="tel:+923057996677"
                className="w-10 h-10 rounded-lg bg-white/5 border border-card-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-text-muted hover:text-primary transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Pakistan Services */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Pakistan</h3>
            <ul className="space-y-2.5 mb-4">
              {pkServices.map((s) => (<li key={s} className="text-sm text-text-muted">{s}</li>))}
            </ul>
            <p className="text-xs text-text-muted">Burewala, Punjab, Pakistan</p>
            <a href="tel:+923057996677" className="text-sm text-primary hover:text-primary-light transition-colors block mt-1">0305-7996677</a>
            <a href="tel:+923126700487" className="text-sm text-primary hover:text-primary-light transition-colors block">0312-6700487</a>
          </div>

          {/* UAE Services */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Dubai, UAE</h3>
            <ul className="space-y-2.5 mb-4">
              {uaeServices.map((s) => (<li key={s} className="text-sm text-text-muted">{s}</li>))}
            </ul>
            <p className="text-xs text-text-muted">P.O. Box: 92067, Dubai</p>
            <a href="tel:+97142942280" className="text-sm text-primary hover:text-primary-light transition-colors block mt-1">04 2942280</a>
            <a href="tel:+9710507172047" className="text-sm text-primary hover:text-primary-light transition-colors block">+971 050 717 2047</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center sm:text-left">
            &copy; {new Date().getFullYear()} AWAN D-WAN Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Powered by <span className="text-primary">Zawar Group</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
