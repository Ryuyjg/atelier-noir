import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Award, Calendar, MapPin, Ruler, Wallet } from "lucide-react";
import { ThreeBackground } from "@/components/ThreeBackground";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.story,
    openGraph: {
      title: `${project.title} | Atelier Noir`,
      description: project.story,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }]
    }
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const nextProject = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    creator: "Atelier Noir",
    locationCreated: project.location,
    award: project.awards.join(", "),
    description: project.story,
    image: project.image
  };

  return (
    <main className="min-h-screen overflow-hidden bg-noir text-bone">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ThreeBackground />
      <nav className="floating-nav">
        <Link href="/" className="magnetic-link">
          <ArrowLeft size={16} />
          Studio
        </Link>
        <span>{project.year}</span>
      </nav>

      <section className="relative z-10 min-h-screen px-5 pb-12 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="project-kicker">
            <span>{project.type}</span>
            <span>{project.location}</span>
          </div>
          <h1 className="font-display text-[18vw] font-medium leading-[0.78] tracking-normal text-bone sm:text-[13vw] lg:text-[9.4vw]">
            {project.title}
          </h1>
        </div>
        <div className="mx-auto mt-10 max-w-[1500px] overflow-hidden border border-white/10">
          <Image
            src={project.image}
            alt={`${project.title} by Atelier Noir`}
            width={1800}
            height={1050}
            priority
            className="h-[62vh] w-full object-cover"
          />
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1500px] gap-8 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <p className="max-w-md text-xs uppercase tracking-[0.45em] text-champagne">Design Narrative</p>
        <div>
          <p className="font-display text-4xl leading-tight text-bone sm:text-6xl">{project.story}</p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: MapPin, label: "Location", value: project.location },
              { icon: Ruler, label: "Area", value: project.area },
              { icon: Wallet, label: "Budget", value: project.budget },
              { icon: Calendar, label: "Timeline", value: project.timeline }
            ].map((item) => (
              <div key={item.label} className="project-spec">
                <item.icon size={18} />
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-2">
          <Image src={project.before} alt={`${project.title} before design intervention`} width={1400} height={1100} className="h-[72vh] w-full object-cover grayscale" />
          <Image src={project.after} alt={`${project.title} finished interior`} width={1400} height={1100} className="h-[72vh] w-full object-cover" />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-champagne">Material System</p>
            <div className="mt-8 flex gap-3">
              {project.palette.map((color) => (
                <span key={color} className="h-20 flex-1 border border-white/10" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="metric-tile">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-y border-white/10 py-8">
          <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-champagne">
            <Award size={16} /> Recognition
          </p>
          <div className="flex flex-wrap gap-3">
            {project.awards.map((award) => (
              <span key={award} className="award-pill">
                {award}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-28 sm:px-8 lg:px-12">
        <Link href={`/projects/${nextProject.slug}`} className="next-project group mx-auto block max-w-[1500px]">
          <span>Next commission</span>
          <strong>{nextProject.title}</strong>
        </Link>
      </section>
    </main>
  );
}
