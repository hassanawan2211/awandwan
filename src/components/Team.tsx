"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Malik Zawar Ali",
    role: "Co-Founder & CEO",
    description: "Visionary leader with over a decade of experience in transport and logistics, spearheading operations across Pakistan and the UAE.",
    initials: "MZ",
    gradient: "from-primary-dark to-primary",
    image: "/images/team/zawar-ali.jpg",
  },
  {
    name: "Malik Mudassar Awan",
    role: "CEO",
    description: "Strategic business leader driving innovation and growth in vehicle rental and agricultural services across the region.",
    initials: "MM",
    gradient: "from-primary to-primary-light",
    image: "/images/team/mudassar-awan.jpg",
  },
  {
    name: "Malik Humair Ali Awan",
    role: "Assistant Director",
    description: "Operations specialist ensuring seamless service delivery and client satisfaction across all business verticals.",
    initials: "MH",
    gradient: "from-accent to-blue-400",
    image: "/images/team/humair-awan.jpg",
  },
  {
    name: "Dr. Zohaib Ali Awan",
    role: "Advisor",
    description: "Expert advisor providing strategic counsel on business development, agricultural innovation, and corporate governance.",
    initials: "DZ",
    gradient: "from-emerald-600 to-emerald-400",
    image: "/images/team/zohaib-awan.jpg",
  },
  {
    name: "Najam Ali",
    role: "IT Director",
    description: "Technology leader overseeing digital transformation, IT infrastructure, and innovative solutions that power our business operations.",
    initials: "NA",
    gradient: "from-violet-600 to-violet-400",
    image: "/images/team/najam-ali.jpg",
  },
  {
    name: "Musawar Awan",
    role: "Advisor & Customer Support — Agriculture & Livestock",
    description: "Dedicated advisor for agriculture and livestock operations, ensuring exceptional customer service and support for our farming partners.",
    initials: "MA",
    gradient: "from-amber-600 to-amber-400",
    image: "/images/team/musawar-awan.jpg",
  },
];

function TeamAvatar({ member }: { member: typeof team[number] }) {
  const [imgError, setImgError] = useState(false);

  if (imgError || !member.image) {
    return (
      <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-2xl font-bold text-background group-hover:scale-110 transition-transform duration-300`}>
        {member.initials}
      </div>
    );
  }

  return (
    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 group-hover:scale-110 transition-all duration-300">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
        onError={() => setImgError(true)}
        sizes="96px"
      />
    </div>
  );
}

export default function Team() {
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
    <section id="team" className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-primary border border-primary/20 mb-4">Our People</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gold-gradient">Leadership</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">
            A dedicated team of professionals committed to delivering excellence and driving sustainable growth.
          </p>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {team.map((member, i) => (
            <div key={member.name}
              className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 group"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <TeamAvatar member={member} />
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-text-muted text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-text-muted mt-8 opacity-60">
          Team photos coming soon
        </p>
      </div>
    </section>
  );
}
