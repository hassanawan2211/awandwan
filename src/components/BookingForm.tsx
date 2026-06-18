"use client";
import { useState, useEffect, useRef } from "react";

const serviceOptions = [
  "Vehicle Rental (With Driver)",
  "Business Facilitation",
  "Agriculture & Livestock",
  "Dubai Cargo Transport",
  "Heavy Machinery / Crane Service",
  "Other",
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "923057996677";
    const text = `*New Booking Request — AWAN D-WAN*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || "N/A"}%0A*Service:* ${formData.service}%0A*Preferred Date:* ${formData.date || "Flexible"}%0A*Message:* ${formData.message || "N/A"}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-[#111827] border border-card-border text-foreground placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all duration-300 text-sm";
  const selectClass = `${inputClass} [&>option]:bg-[#111827] [&>option]:text-foreground`;

  return (
    <section id="booking" className="section-padding relative bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-primary border border-primary/20 mb-4">Get Started</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Book Our <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">
            Fill out the form below and we&apos;ll connect with you instantly via WhatsApp. Fast, easy, and direct.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="booking-name" className="block text-sm font-medium text-text-muted mb-2">Full Name *</label>
                <input type="text" id="booking-name" name="name" required placeholder="Your full name" value={formData.name} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="booking-phone" className="block text-sm font-medium text-text-muted mb-2">Phone Number *</label>
                <input type="tel" id="booking-phone" name="phone" required placeholder="+92 300 0000000" value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="booking-email" className="block text-sm font-medium text-text-muted mb-2">Email (Optional)</label>
              <input type="email" id="booking-email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="booking-service" className="block text-sm font-medium text-text-muted mb-2">Select Service *</label>
              <select id="booking-service" name="service" required value={formData.service} onChange={handleChange} className={selectClass}>
                <option value="">Choose a service...</option>
                {serviceOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
              </select>
            </div>
            <div>
              <label htmlFor="booking-date" className="block text-sm font-medium text-text-muted mb-2">Preferred Date</label>
              <input type="date" id="booking-date" name="date" value={formData.date} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="booking-message" className="block text-sm font-medium text-text-muted mb-2">Additional Details</label>
              <textarea id="booking-message" name="message" rows={4} placeholder="Tell us more about your requirements..." value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} />
            </div>
            <button type="submit" id="booking-submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-dark via-primary to-primary-light text-background font-bold text-base hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Send via WhatsApp
            </button>
            <p className="text-center text-xs text-text-muted">
              Your booking request will open WhatsApp with pre-filled details. We respond within minutes!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
