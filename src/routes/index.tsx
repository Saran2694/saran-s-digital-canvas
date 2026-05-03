import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Globe,
  ExternalLink,
  Code2,
  Palette,
  Database,
  Film,
  Brain,
  Users,
  Award,
  Briefcase,
  Send,
  Play,
  Sparkles,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Section } from "@/components/portfolio/Section";

import heroBg from "@/assets/hero-bg.jpg";
import projPet from "@/assets/proj-pet.jpg";
import projCine from "@/assets/proj-cine.jpg";
import uxStranger from "@/assets/ux-stranger.jpg";
import uxParallax from "@/assets/ux-parallax.jpg";
import uxPetcase from "@/assets/ux-petcase.jpg";
import uxChatbot from "@/assets/ux-chatbot.jpg";
import film1 from "@/assets/film-1.jpg";
import film2 from "@/assets/film-2.jpg";
import film3 from "@/assets/film-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Saran L — Software Engineer & UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Sri Saran L — Software Engineer Trainee, full-stack developer, UI/UX designer, and filmmaker based in Coimbatore.",
      },
      { property: "og:title", content: "Sri Saran L — Portfolio" },
      {
        property: "og:description",
        content:
          "Crafting digital experiences through code, design, and creativity.",
      },
    ],
  }),
  component: Portfolio,
});

/* ------------------------------- Hero ------------------------------- */

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-secondary/25 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span className="text-muted-foreground">
              Available for opportunities · Coimbatore, IN
            </span>
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Hi, I'm{" "}
            <span className="text-gradient">Sri Saran L</span>
            <br />
            <span className="text-muted-foreground">I build & design.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            <span className="font-medium text-foreground">
              Software Engineer Trainee
            </span>{" "}
            · Full Stack Developer · UI/UX Designer
          </p>
          <p className="mt-3 max-w-xl text-lg text-foreground/80 sm:text-xl">
            Crafting digital experiences through{" "}
            <span className="text-gradient font-medium">code, design, and creativity.</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              Contact Me
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-muted-foreground">
            <a href="https://github.com/Saran2694" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              <Globe className="h-5 w-5" />
            </a>
            <span className="h-px w-12 bg-border" />
            <span className="font-mono text-xs uppercase tracking-widest">Scroll ↓</span>
          </div>
        </div>

        {/* Floating glass card */}
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative animate-float rounded-[2rem] glass-strong p-2 shadow-elevated">
            <div className="rounded-[1.6rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-foreground/70">
                  /portfolio.tsx
                </span>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
              </div>
              <pre className="font-mono text-xs leading-relaxed text-foreground/85 sm:text-sm">
{`const sri = {
  role: "SWE Trainee",
  loves: ["UI/UX", "Cinema"],
  stack: ["Java", "MySQL",
          "HTML", "CSS"],
  shipping: true,
};`}
              </pre>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <Stat label="Problems" value="500+" />
                <Stat label="Projects" value="10+" />
                <Stat label="Films" value="5+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl glass p-3 text-center">
      <div className="text-gradient font-display text-xl font-semibold">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* ------------------------------- About ------------------------------- */

function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={
        <>
          Engineer by training, <span className="text-gradient">storyteller</span> by heart.
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a <span className="text-foreground">Computer Science Engineering undergraduate</span>{" "}
            and currently working as a <span className="text-foreground">Software Engineer Trainee</span>{" "}
            in Coimbatore. I'm fluent across the stack — turning ideas into responsive
            interfaces and reliable backends.
          </p>
          <p>
            Beyond code, I design with intent — wireframes, prototypes, and pixel-perfect
            UI in Figma. I also write, direct, and edit{" "}
            <span className="text-foreground">cinematic short films</span>, blending
            engineering rigor with creative storytelling.
          </p>
          <p>
            What drives me: building products that feel as good as they work.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Code2, title: "Full-Stack", text: "Frontend + Backend" },
            { icon: Palette, title: "UI/UX", text: "Figma · Prototypes" },
            { icon: Film, title: "Filmmaking", text: "Direction · Editing" },
            { icon: Sparkles, title: "Curiosity", text: "Always learning" },
          ].map((c) => (
            <div key={c.title} className="hover-lift rounded-2xl glass p-5">
              <c.icon className="mb-4 h-6 w-6 text-secondary" />
              <div className="font-display text-base font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- Skills ------------------------------- */

const skillGroups = [
  { icon: Palette, title: "UI/UX Design", items: ["Figma", "Wireframing", "Prototyping"] },
  { icon: Code2, title: "Frontend", items: ["HTML", "CSS", "Responsive Design"] },
  { icon: Brain, title: "Programming", items: ["Java", "OOP", "DSA"] },
  { icon: Database, title: "Database", items: ["MySQL", "Schema Design"] },
  { icon: Film, title: "Video Editing", items: ["Cinematic Editing", "Short Films", "Color Grading"] },
  { icon: Users, title: "Soft Skills", items: ["Problem Solving", "Teamwork", "Creativity"] },
];

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>What I work with</>}
      description="A blend of technical depth and creative tools — picked for the job."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.title} className="hover-lift group relative overflow-hidden rounded-2xl glass p-6">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <g.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- Experience ------------------------------- */

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Currently building, daily.</>}
    >
      <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[auto_1fr]">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
            <Briefcase className="h-7 w-7" />
          </div>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold md:text-3xl">
                Software Engineer Trainee
              </h3>
              <span className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                Present
              </span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> Coimbatore, India
            </div>
            <ul className="mt-6 grid gap-3 text-muted-foreground">
              {[
                "Working on real-world software development tasks across the stack.",
                "Learning and applying full-stack development practices.",
                "Collaborating closely with team members in agile workflows.",
                "Following industry standards for code quality and delivery.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- Projects ------------------------------- */

const projects = [
  {
    title: "Pet Vaccination Tracker",
    type: "Web Application",
    description:
      "A responsive web app that helps pet owners manage and track vaccination schedules efficiently.",
    image: projPet,
    tags: ["React", "Responsive", "UX"],
    link: "https://pet-vaccine-traker.vercel.app/",
    cta: "Live Demo",
    icon: ExternalLink,
  },
  {
    title: "Cine Flow",
    type: "Mobile App Concept",
    description:
      "A platform designed for filmmakers to collaborate, share ideas, and manage creative projects.",
    image: projCine,
    tags: ["Mobile", "Concept", "Collaboration"],
    link: "https://github.com/Saran2694/CINE-FLOW",
    cta: "GitHub",
    icon: Github,
  },
];

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected work</>}
      description="Real builds — shipped, demoed, and open for review."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="hover-lift group relative overflow-hidden rounded-3xl glass-strong"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                width={1024}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs text-foreground">
                {p.type}
              </span>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                <p.icon className="h-4 w-4" />
                {p.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- UI/UX Works ------------------------------- */

const uxWorks = [
  {
    title: "Stranger Things Interactive Page",
    tag: "Interactive Web",
    image: uxStranger,
    link: "https://www.linkedin.com/posts/sri-saran-l_figma-uidesign-photoshop-activity7388923936920748032-rmTw/",
  },
  {
    title: "Figma Parallax Scrolling",
    tag: "Animation",
    image: uxParallax,
    link: "https://www.linkedin.com/posts/sri-saran-l_figma-uidesign-uxdesign-activity-7393968277678379008-ErY0/",
  },
  {
    title: "Pet Vaccination UX Case Study",
    tag: "Case Study",
    image: uxPetcase,
    link: "https://www.behance.net/gallery/239018801/-UX-Case-Study-Designing-a-Pet-Vaccination-Tracker",
  },
  {
    title: "AI Chatbot Interface",
    tag: "Product Design",
    image: uxChatbot,
    link: "https://www.figma.com/proto/lSKRfrWaRj7l3YIYFcGJpH/Untitled",
  },
];

function UIUX() {
  return (
    <Section
      id="uiux"
      eyebrow="UI/UX Works"
      title={<>Interfaces with <span className="text-gradient">intent</span></>}
      description="Concepts, case studies, and explorations across web and mobile."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {uxWorks.map((w) => (
          <a
            key={w.title}
            href={w.link}
            target="_blank"
            rel="noreferrer"
            className="hover-lift group relative block overflow-hidden rounded-2xl glass"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={w.image}
                alt={w.title}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-5">
              <div className="text-[10px] uppercase tracking-widest text-secondary">
                {w.tag}
              </div>
              <div className="mt-1 font-display text-base font-semibold leading-snug">
                {w.title}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- Films ------------------------------- */

const films = [
  {
    title: "Short Film 1",
    role: "Writer & Director",
    image: film1,
    link: "https://www.youtube.com/watch?v=FDCyj99fcfo",
  },
  {
    title: "Short Film 2",
    role: "Cinematographer and plot creator",
    image: film2,
    link: "https://drive.google.com/drive/folders/10IVbosCHt5EkLlZm-Wih8raQNWrMrUKB",
  },
];

function Films() {
  return (
    <Section
      id="films"
      eyebrow="Short Films"
      title={<>Stories told in <span className="text-gradient">frames</span></>}
      description="Selected short films I've written, directed, or shot."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {films.map((f) => (
          <a
            key={f.title}
            href={f.link}
            target="_blank"
            rel="noreferrer"
            className="hover-lift group relative block overflow-hidden rounded-2xl glass"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={f.image}
                alt={f.title}
                width={1024}
                height={576}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-primary shadow-glow">
                <Play className="h-6 w-6 fill-primary-foreground text-primary-foreground" />
              </div>
            </div>
            <div className="p-5">
              <div className="font-display text-lg font-semibold">{f.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{f.role}</div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- Achievements ------------------------------- */

const achievements = [
  { title: "Industry 4.0 & Industrial IoT", org: "NPTEL · IIT" },
  { title: "Microsoft Azure Fundamentals", org: "Microsoft" },
  { title: "Java Full Stack", org: "Wipro TalentNext" },
  { title: "500+ Problems Solved", org: "CodeChef" },
];

function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements & Certifications"
      title={<>Earned along the way</>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a) => (
          <div key={a.title} className="hover-lift relative overflow-hidden rounded-2xl glass p-6">
            <Award className="mb-4 h-6 w-6 text-accent" />
            <div className="font-display text-base font-semibold leading-snug">
              {a.title}
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              {a.org}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- Contact ------------------------------- */

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      formRef.current?.reset();
      toast.success("Message sent — I'll get back to you soon!");
    }, 700);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build <span className="text-gradient">something</span></>}
      description="Open to internships, collaborations, freelance UI/UX, and creative projects."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <ContactRow icon={Mail} label="Email" value="srisaran@example.com" href="mailto:srisaran@example.com" />
          <ContactRow icon={Phone} label="Phone" value="+91 7418570190" href="tel:+917418570190" />
          <ContactRow icon={MapPin} label="Location" value="Coimbatore, India" />
          <div className="grid grid-cols-3 gap-3">
            <SocialBtn icon={Linkedin} label="LinkedIn" href="https://linkedin.com/in/" />
            <SocialBtn icon={Github} label="GitHub" href="https://github.com/Saran2694" />
            <SocialBtn icon={Globe} label="Behance" href="https://www.behance.net/srisaran11" />
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl glass-strong p-6 md:p-8"
        >
          <Field name="name" label="Your name" placeholder="Jane Doe" />
          <Field name="email" type="email" label="Email" placeholder="jane@email.com" />
          <Field name="message" label="Message" placeholder="Tell me about your project..." textarea />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="hover-lift flex items-center gap-4 rounded-2xl glass p-5">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function SocialBtn({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Github;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover-lift flex flex-col items-center justify-center gap-2 rounded-2xl glass p-4 text-sm"
    >
      <Icon className="h-5 w-5 text-secondary" />
      {label}
    </a>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  textarea,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition";
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

/* ------------------------------- Footer ------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sri Saran L. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Designed & built with</span>
          <span className="text-gradient font-medium">care · code · cinema</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------- Page ------------------------------- */

function Portfolio() {
  // Apply dark theme by default
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <UIUX />
        <Films />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
