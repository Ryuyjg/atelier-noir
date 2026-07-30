"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ChevronDown, Mail, MapPin, MoveHorizontal, Send } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { ThreeBackground } from "@/components/ThreeBackground";
import { projects, testimonials } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 48, suffix: "", label: "private commissions" },
  { value: 19, suffix: "", label: "cities shaped" },
  { value: 2.4, suffix: "B", label: "portfolio value" },
  { value: 31, suffix: "", label: "international awards" }
];

const timeline = [
  ["01", "Forensic Briefing", "We map the emotional pressure points, daily rituals, collection needs, acoustic profile, climate, and security choreography."],
  ["02", "Spatial Score", "Plans are treated like music: compression, pause, reveal, shadow, and release are tested through physical models and filmic previews."],
  ["03", "Material Lab", "Stone, metal, plaster, glass, scent, and light are sampled together until the atmosphere is unmistakable and technically durable."],
  ["04", "Silent Delivery", "Construction administration, procurement, and styling are handled as one controlled instrument with obsessively logged decisions."]
];

export function AtelierNoirHome() {
  const [loading, setLoading] = useState(true);
  const [testimonial, setTestimonial] = useState(0);
  const [compare, setCompare] = useState(54);
  const [sent, setSent] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.15]);
  const featured = projects.slice(0, 6);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1250);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (loading) return;
    const context = gsap.context(() => {
      gsap.fromTo(".intro-word", { y: 120, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: "power4.out" });
      gsap.fromTo(".reveal-line", { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: "power3.out", delay: 0.35 });
      gsap.utils.toArray<HTMLElement>(".gsap-rise").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 72, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 82%" }
          }
        );
      });
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((element) => {
        const target = Number(element.dataset.value);
        gsap.fromTo(
          element,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1.7,
            snap: { textContent: target % 1 ? 0.1 : 1 },
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%" }
          }
        );
      });
    });
    return () => context.revert();
  }, [loading]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonial((current) => (current + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  const studioSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ArchitecturalService",
      name: "Atelier Noir",
      url: "https://ryuyjg.github.io/atelier-noir",
      description: "Luxury architecture and interior design studio.",
      areaServed: ["New York", "Paris", "Tokyo", "Malibu", "London"],
      sameAs: ["https://ryuyjg.github.io/atelier-noir"]
    }),
    []
  );

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="overflow-hidden bg-noir text-bone">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(studioSchema) }} />
      <ThreeBackground />
      <CustomCursor />

      <motion.div className="loader" animate={{ y: loading ? "0%" : "-110%" }} transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}>
        <div>
          <span>Atelier Noir</span>
          <i />
        </div>
      </motion.div>

      <nav className="floating-nav">
        <Link href="/" className="brand" aria-label="Atelier Noir home">
          Atelier Noir
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {["Work", "Method", "Studio", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="magnetic-link">
              {item}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">
          Begin
        </a>
      </nav>

      <section ref={heroRef} className="hero-section">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="hero-image">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88"
            alt="Cinematic dark luxury residence designed by Atelier Noir"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="hero-vignette" />
        <div className="hero-content">
          <p className="intro-word hero-eyebrow">Architecture / Interiors / Private Worlds</p>
          <h1 aria-label="Atelier Noir">
            <span className="intro-word">Atelier</span>
            <span className="intro-word">Noir</span>
          </h1>
          <div className="reveal-line" />
          <div className="hero-bottom">
            <p className="intro-word">
              We design cinematic residences, galleries, hotels, and sanctuaries where darkness becomes material and space learns to hold its breath.
            </p>
            <a href="#work" className="scroll-cue" aria-label="Scroll to portfolio">
              <ChevronDown size={18} />
              Explore
            </a>
          </div>
        </div>
      </section>

      <section id="studio" className="section-grid gsap-rise">
        <p className="section-kicker">Studio Position</p>
        <div>
          <h2 className="section-title">A practice for clients who want atmosphere with consequence.</h2>
          <p className="section-copy">
            Atelier Noir works at the intersection of architecture, interior design, art direction, and technical delivery. We build fewer projects, with deeper authorship: every threshold, handle, reflection, and shadow is decided.
          </p>
        </div>
      </section>

      <section className="stats-band gsap-rise" aria-label="Studio statistics">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>
              <span className="stat-number" data-value={stat.value}>
                0
              </span>
              {stat.suffix}
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="work" className="portfolio-section">
        <div className="section-grid gsap-rise">
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">Twelve fictional commissions, built with the gravity of real ones.</h2>
        </div>
        <div className="project-gallery">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className={`project-card ${index % 3 === 0 ? "wide" : ""}`} data-cursor="magnetic">
              <Image
                src={project.image}
                alt={`${project.title}, ${project.type}`}
                width={1600}
                height={1100}
                loading={index < 2 ? "eager" : "lazy"}
                className="project-image"
              />
              <div className="project-overlay">
                <span>{project.location}</span>
                <strong>{project.title}</strong>
                <p>{project.story}</p>
                <em>
                  Open commission <ArrowUpRight size={16} />
                </em>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="comparison-section gsap-rise">
        <div className="comparison-copy">
          <p className="section-kicker">Before / After</p>
          <h2 className="section-title">Intervention should feel inevitable, but never invisible.</h2>
          <p className="section-copy">
            Drag across the image to see how Monolith House moved from conventional coastal luxury into a darker, more architectural language.
          </p>
        </div>
        <div className="compare-frame" style={{ "--split": `${compare}%` } as React.CSSProperties}>
          <Image src={featured[0].before} alt="Monolith House before" width={1500} height={1050} className="compare-img" />
          <div className="compare-after">
            <Image src={featured[0].after} alt="Monolith House after" width={1500} height={1050} className="compare-img" />
          </div>
          <div className="compare-handle" aria-hidden>
            <MoveHorizontal size={18} />
          </div>
          <input
            aria-label="Compare before and after design"
            type="range"
            min="8"
            max="92"
            value={compare}
            onChange={(event) => setCompare(Number(event.target.value))}
          />
        </div>
      </section>

      <section id="method" className="timeline-section">
        <div className="section-grid gsap-rise">
          <p className="section-kicker">Method</p>
          <h2 className="section-title">A disciplined process with room for obsession.</h2>
        </div>
        <div className="timeline">
          {timeline.map(([number, title, body]) => (
            <article key={number} className="timeline-item gsap-rise">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-section gsap-rise" aria-label="Client testimonials">
        <div className="testimonial-shell">
          <motion.blockquote key={testimonial} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            “{testimonials[testimonial].quote}”
          </motion.blockquote>
          <div>
            <strong>{testimonials[testimonial].name}</strong>
            <span>{testimonials[testimonial].role}</span>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((item, index) => (
              <button key={item.name} aria-label={`Show testimonial from ${item.name}`} className={index === testimonial ? "active" : ""} onClick={() => setTestimonial(index)} />
            ))}
          </div>
        </div>
      </section>

      <section className="featured-strip">
        {featured.map((project) => (
          <div key={project.slug} className="strip-item">
            <Image src={project.image} alt={project.title} width={520} height={680} loading="lazy" />
            <span>{project.title}</span>
          </div>
        ))}
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy gsap-rise">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Commission the room everyone remembers.</h2>
          <div className="contact-lines">
            <p>
              <MapPin size={16} /> New York / Paris / Tokyo
            </p>
            <p>
              <Mail size={16} /> private@ateliernoir.studio
            </p>
          </div>
        </div>
        <form className="contact-form gsap-rise" onSubmit={submit}>
          <label>
            <span>Name</span>
            <input required name="name" autoComplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input required name="email" type="email" autoComplete="email" />
          </label>
          <label>
            <span>Commission Type</span>
            <select required name="type" defaultValue="">
              <option value="" disabled />
              <option>Private Residence</option>
              <option>Hospitality</option>
              <option>Retail / Gallery</option>
              <option>Workplace</option>
            </select>
          </label>
          <label>
            <span>Budget Range</span>
            <select required name="budget" defaultValue="">
              <option value="" disabled />
              <option>$5M - $10M</option>
              <option>$10M - $25M</option>
              <option>$25M+</option>
            </select>
          </label>
          <label className="full">
            <span>What should the space make people feel?</span>
            <textarea required name="message" rows={5} />
          </label>
          <button type="submit">
            {sent ? "Received" : "Request private consultation"} <Send size={16} />
          </button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-marquee" aria-hidden>
          <span>Atelier Noir</span>
          <span>Architecture</span>
          <span>Interiors</span>
          <span>Atmosphere</span>
        </div>
        <div className="footer-bottom">
          <span>Atelier Noir © 2026</span>
          <a href="#top">Return to top</a>
        </div>
      </footer>
    </main>
  );
}
