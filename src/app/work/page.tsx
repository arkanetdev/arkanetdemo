"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { WorkDetailModal } from "@/components/modals/WorkDetailModal";

interface WorkProject {
  id: string;
  category: "Websites" | "Mobile Apps & Portals" | "AI & Automation" | "Cloud & Platforms";
  title: string;
  description: string;
  aspectX: number;
  aspectY: number;
  outerImage: string;
  innerImage: string;
  staggerDelay?: number;
}

const PROJECT_DETAILS_MAP: Record<string, {
  client: string;
  year: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
}> = {
  "marble-tile-stone": {
    client: "Marble Tile & Stone Ltd.",
    year: "2025",
    services: ["E-Commerce", "3D Room Visualizer", "UI/UX Design", "Custom CMS"],
    overview: "Marble Tile & Stone needed a high-performance digital showroom capable of showcasing high-resolution stone textures and real-time 3D room visualization for interior architects.",
    challenge: "Traditional stone sampling requires long shipping turnarounds, causing friction in architectural spec approvals. The client needed an immersive digital alternative.",
    solution: "We designed and built a fast Next.js e-commerce application integrated with a WebGL room visualizer, allowing customers to preview marble patterns on floors and walls instantly.",
    impact: [
      "+142% Increase in architectural sample requests",
      "3.4x Faster contract closing cycle for commercial clients",
      "99.8% System uptime under heavy international traffic",
    ],
    techStack: ["Next.js", "TypeScript", "Three.js / WebGL", "Tailwind CSS", "Shopify Plus API", "AWS CloudFront"],
  },
  "careflow-health": {
    client: "CareFlow Healthcare Group",
    year: "2025",
    services: ["Mobile App", "Patient Portal", "HIPAA Compliance", "Telehealth UI"],
    overview: "CareFlow is a multi-specialty clinical network aiming to replace fragmented patient phone queues with a unified mobile health app and clinical admin dashboard.",
    challenge: "High patient drop-off during appointment scheduling and delayed access to lab diagnostics led to operational overhead.",
    solution: "Built a native iOS and Android application paired with a real-time doctor portal, supporting video consultations, automated prescription notifications, and instant lab report downloads.",
    impact: [
      "250,000+ Active monthly patient users",
      "68% Reduction in clinic phone queue volume",
      "4.9/5 Rating on Apple App Store & Google Play",
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "GraphQL", "WebRTC Telehealth", "PostgreSQL", "HIPAA Vault"],
  },
  "neuraldesk-ai": {
    client: "NeuralDesk Technologies",
    year: "2026",
    services: ["Conversational AI", "LLM Fine-Tuning", "Document Intelligence", "Helpdesk Integration"],
    overview: "An enterprise AI platform designed to ingest millions of internal technical documents and automate complex customer enquiry resolution.",
    challenge: "Customer support agents spent up to 25 minutes per ticket locating obscure technical documentation across legacy databases.",
    solution: "Implemented a RAG (Retrieval-Augmented Generation) pipeline powered by fine-tuned LLMs, integrating seamlessly into Zendesk, WhatsApp Business, and internal Slack channels.",
    impact: [
      "84% First-contact automated resolution rate",
      "Sub-2 second average AI response latency",
      "$1.2M Annual operational savings in support escalation costs",
    ],
    techStack: ["Python", "PyTorch", "LangChain / LlamaIndex", "Vector Database (Pinecone)", "FastAPI", "Next.js Admin UI"],
  },
  "aerologistics-cloud": {
    client: "AeroLogistics Global Inc.",
    year: "2025",
    services: ["Cloud Architecture", "IoT Tracking", "Supply Chain Portal", "DevOps"],
    overview: "A global freight tracking portal connecting air, maritime, and land transit data into a live telemetry dashboard for international cargo shippers.",
    challenge: "Data silos across regional customs authorities caused unexpected transit delays and lack of cargo location visibility.",
    solution: "Engineered a cloud-native event-driven platform utilizing IoT satellite telemetry, automated customs documentation checks, and real-time delay predictive analytics.",
    impact: [
      "Over 1.4 Million cargo shipments tracked monthly",
      "45% Reduction in unexpected logistics port delays",
      "Real-time GPS accuracy within 15 meters globally",
    ],
    techStack: ["AWS Lambda & ECS", "Kafka Streaming", "React Dashboard", "Go Microservices", "Docker / Kubernetes"],
  },
  "solara-energy": {
    client: "Solara Clean Energy Co.",
    year: "2025",
    services: ["Web Application", "Smart Grid Analytics", "Conversion Rate Optimization"],
    overview: "A commercial solar estimation platform enabling facility managers to analyze roof solar density, ROI timelines, and clean energy storage capacity.",
    challenge: "Complex solar yield mathematics intimidated non-technical building owners, slowing down quote requests.",
    solution: "Created an intuitive interactive calculator leveraging high-res satellite imagery and automated sun exposure mapping to present clear financial proposals.",
    impact: [
      "3.1x Increase in qualified commercial solar leads",
      "Instant 60-second proposal generation for sales reps",
      "Featured in Clean Energy Design Quarterly",
    ],
    techStack: ["React", "TypeScript", "Google Solar API", "Tailwind CSS", "Vercel Enterprise"],
  },
  "pulsefit-coaching": {
    client: "PulseFit Fitness Labs",
    year: "2026",
    services: ["Mobile App Development", "Biometric Sync", "AI Motion Analysis"],
    overview: "A mobile coaching platform analyzing workout posture, heart-rate zones, and recovery metrics via wearable device sync.",
    challenge: "Users struggled to maintain consistent fitness routines without real-time form guidance during home workouts.",
    solution: "Integrated computer-vision posture checking with Apple Watch / HealthConnect data sync, delivering audio guidance during workouts.",
    impact: [
      "89% User retention after 90 days",
      "Over 500,000 completed workout sessions",
      "Best App Award Nominee in Health & Wellness",
    ],
    techStack: ["Swift / Kotlin", "TensorFlow Lite", "Apple HealthKit", "Node.js API", "Firebase"],
  },
  "vesper-timepieces": {
    client: "Vesper Horology Paris",
    year: "2025",
    services: ["3D WebGL Configurator", "Luxury E-Commerce", "Brand Strategy"],
    overview: "An ultra-luxury bespoke watch configurator allowing clients to customize timepiece bezels, movements, and leather straps in 3D.",
    challenge: "Bespoke watch customization relied on physical boutique visits, limiting international luxury buyer reach.",
    solution: "Built a photorealistic 3D WebGL watch visualizer with instant price calculations and private VIP concierge booking.",
    impact: [
      "€3.8M Direct digital sales in first 6 months",
      "Average session duration increased to 7m 40s",
      "Zero loading latency across mobile and desktop devices",
    ],
    techStack: ["Three.js", "WebGL", "Next.js App Router", "Stripe Connect", "Tailwind CSS"],
  },
  "fintech-sentinel": {
    client: "Sentinel Financial Group",
    year: "2026",
    services: ["Fraud Analytics", "AI Workflow Automation", "Compliance Dashboard"],
    overview: "An automated risk assessment and fraud detection platform monitoring high-frequency digital banking transactions.",
    challenge: "Manual compliance reviews caused processing delays for legitimate cross-border wire transfers.",
    solution: "Engineered an anomaly detection engine assessing risk factors in under 80 milliseconds, routing only high-risk flags to human auditors.",
    impact: [
      "99.4% Automated fraud detection precision",
      "92% Faster wire transfer approval time",
      "Compliant with SOC2 Type II & GDPR standards",
    ],
    techStack: ["Python", "FastAPI", "React Admin", "PostgreSQL", "Redis", "Docker"],
  },
  "kratos-cybervision": {
    client: "Kratos Security Corp",
    year: "2026",
    services: ["Threat Intelligence", "Cloud Platform", "Telemetry Dashboard"],
    overview: "A cloud-native threat intelligence dashboard monitoring multi-cloud infrastructure for real-time vulnerability mitigation.",
    challenge: "DevOps teams were overwhelmed by thousands of false-positive security alerts across AWS and Azure clusters.",
    solution: "Deployed an intelligent telemetry aggregator that prioritizes critical vulnerabilities and automates patch deployment scripts.",
    impact: [
      "94% Decrease in false-positive security alerts",
      "Average threat remediation time reduced from 4 hours to 3 minutes",
      "Monitors over 50,000 active cloud containers",
    ],
    techStack: ["Go", "React", "AWS GuardDuty", "Kubernetes", "Tailwind CSS", "Grafana API"],
  },
  "dummy-project": {
    client: "Nexus Labs",
    year: "2026",
    services: ["Design System", "Component Library", "Documentation", "Developer Tools"],
    overview: "A comprehensive design system and component library built to accelerate UI development across multiple product teams.",
    challenge: "Inconsistent UI patterns and duplicated code across product lines slowed down feature delivery and increased maintenance burden.",
    solution: "Created a unified design system with 200+ accessible React components, design tokens, and interactive documentation powered by Storybook.",
    impact: [
      "60% Faster feature development velocity",
      "Zero critical accessibility violations across products",
      "Adopted by 12 product teams within 3 months",
    ],
    techStack: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Chromatic", "Vite"],
  },
};

const WORK_PROJECTS: WorkProject[] = [
  {
    id: "marble-tile-stone",
    category: "Websites",
    title: "Marble Tile & Stone",
    description: "Luxury e-commerce and interactive showroom platform designed for high-conversion architect and consumer sales.",
    aspectX: 1452,
    aspectY: 890,
    outerImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    staggerDelay: 0,
  },
  {
    id: "careflow-health",
    category: "Mobile Apps & Portals",
    title: "CareFlow Health Systems",
    description: "Patient portal and telehealth app streamlining clinical workflows, appointment booking, and instant record access.",
    aspectX: 710,
    aspectY: 890,
    outerImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    staggerDelay: 0,
  },
{
      id: "neuraldesk-ai",
      category: "AI & Automation",
      title: "NeuralDesk AI Assistant",
      description: "Enterprise document processing and conversational AI platform connected directly into customer support and operations.",
      aspectX: 710,
      aspectY: 890,
      outerImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
      innerImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
      staggerDelay: 0.1,
    },
  {
    id: "aerologistics-cloud",
    category: "Cloud & Platforms",
    title: "AeroLogistics Global Cloud",
    description: "Real-time freight tracking and automated supply chain portal supporting multi-country logistics monitoring.",
    aspectX: 1452,
    aspectY: 890,
    outerImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    staggerDelay: 0,
  },
  {
    id: "solara-energy",
    category: "Websites",
    title: "Solara Smart Grid",
    description: "Clean energy analytics dashboard and consumer web platform driving commercial solar adoption.",
    aspectX: 710,
    aspectY: 890,
    outerImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    staggerDelay: 0,
  },
  {
    id: "pulsefit-coaching",
    category: "Mobile Apps & Portals",
    title: "PulseFit AI Coach",
    description: "Next gen wellness and fitness mobile application with personalized training feedback and biometric sync.",
    aspectX: 710,
    aspectY: 890,
    outerImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop",
    staggerDelay: 0.1,
  },
  {
    id: "vesper-timepieces",
    category: "Websites",
    title: "Vesper Luxury Watches",
    description: "Interactive 3D e-commerce showcase featuring real-time product configurators and concierge booking.",
    aspectX: 1452,
    aspectY: 890,
    outerImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
    staggerDelay: 0,
  },
  {
    id: "fintech-sentinel",
    category: "AI & Automation",
    title: "FinTech Sentinel",
    description: "Automated fraud detection engine and compliance audit dashboard for scaling financial institutions.",
    aspectX: 710,
    aspectY: 890,
    outerImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    staggerDelay: 0,
  },
{
      id: "kratos-cybervision",
      category: "Cloud & Platforms",
      title: "Kratos CyberVision",
      description: "Next generation cloud security and threat intelligence platform with automated anomaly resolution and live telemetry.",
      aspectX: 710,
      aspectY: 890,
      outerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      innerImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      staggerDelay: 0,
    },
    {
      id: "dummy-project",
      category: "Websites",
      title: "Project Nexus",
      description: "A modular design system and component library enabling rapid UI development across multiple product lines.",
      aspectX: 1452,
      aspectY: 890,
      outerImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
      innerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      staggerDelay: 0,
    },
  ];

const CATEGORIES = ["All", "Websites", "Mobile Apps & Portals", "AI & Automation", "Cloud & Platforms"] as const;

interface WorkCardProps {
  project: WorkProject;
  onSelect: () => void;
}

const WorkCard: React.FC<WorkCardProps> = ({ project, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["-12%", "12%"]
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: project.staggerDelay || 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onSelect}
      style={
        {
          "--aspect-x": project.aspectX,
          "--aspect-y": project.aspectY,
          aspectRatio: "var(--aspect-x) / var(--aspect-y)",
        } as React.CSSProperties
      }
      className="group relative w-full rounded-[24px] sm:rounded-[36px] overflow-hidden cursor-pointer bg-stone-950 shadow-xl border border-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(7,0,53,0.3)] select-none"
    >
      {/* Layer 1: Parallax Background Photo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={project.outerImage}
          alt={`${project.title} background`}
          loading="lazy"
          decoding="async"
          style={{
            y: parallaxY,
            height: isMobile ? "100%" : "130%",
            top: isMobile ? "0%" : "-15%",
          }}
          className="w-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out brightness-90"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />
      </div>

      {/* Layer 2: Centered Foreground Mockup Layer */}
      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12 md:p-14 pointer-events-none z-10">
        <div className="relative w-[82%] h-[74%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/20 group-hover:scale-[1.02] transition-transform duration-500">
          <img
            src={project.innerImage}
            alt={`${project.title} detail`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/15" />
        </div>
      </div>

      {/* Gradient Overlay & Text Content (Navy & Purple Theme) */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-24 pb-8 px-6 sm:pb-12 sm:px-12 flex flex-col justify-end text-left pointer-events-none space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <h3 className="card-h3 text-white group-hover:text-[#38bdf8] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="body-main text-white/90">
              {project.description}
            </p>
          </div>
          
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#38bdf8] text-[#0b1330] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shrink-0 shadow-xl mt-1">
            <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function WorkPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll progress for the sticky pinned container transition
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  // Animated outer side margin: stays 0px across top & middle -> expands smoothly to 40px (12px mobile) as you reach the last card
  const outerSideMargin = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    isMobile ? [0, 0, 12] : [0, 0, 40]
  );

  const openContact = () => setContactOpen(true);

  const filteredProjects = WORK_PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const selectedProjectDetails = selectedProject
    ? {
        ...selectedProject,
        detail: PROJECT_DETAILS_MAP[selectedProject.id],
      }
    : null;

  return (
    <main className="min-h-screen bg-white text-[#070035] selection:bg-[#0b1330] selection:text-white overflow-x-hidden font-sans">

      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* WORK HERO & GRID SHOWCASE STICKY CONTAINER */}
      <div className="relative w-full select-none bg-white">
        <div ref={spacerRef} className="relative min-h-[140vh] sm:min-h-[150vh]">
          
          <motion.div
            style={{ paddingLeft: outerSideMargin, paddingRight: outerSideMargin }}
            className="sticky top-0 z-10 w-full bg-white pt-0"
          >
            {/* Light Container Block matching Homepage Hero Model */}
            <div className="w-full bg-[#f4f6fb] text-[#0b1330] pt-28 lg:pt-36 pb-8 sm:pb-12 rounded-t-none rounded-b-[40px] sm:rounded-b-[64px] shadow-sm border-none overflow-hidden px-6 sm:px-8 lg:px-[40px] relative">
              {/* Soft Navy-to-Blue Radial Ambient Glow */}
              <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
              
              {/* Headline */}
              <div className="w-full mb-4 relative z-10 text-left">
                <h1 className="hero-h1 text-left block">
                  Real work, <br />
                  <span>engineered to perform</span>
                </h1>
                <p className="mt-5 text-lg sm:text-xl md:text-2xl text-[#0b1330] font-medium leading-relaxed max-w-3xl">
                  Explore our recent web applications, mobile platforms, and AI systems built for ambitious brands.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mt-8 mb-6 relative z-10">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-[#0b1330] text-[#38bdf8] shadow-md font-bold uppercase tracking-wider"
                          : "bg-white text-[#0b1330] hover:bg-slate-50 font-medium shadow-sm hover:shadow-md border border-black/5"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* WORK GRID SHOWCASE */}
              <div className="space-y-6 sm:space-y-8">
                {filteredProjects.length === 0 ? (
                  <div className="py-20 text-center text-[#526a83] text-lg font-medium">
                    No projects found for &quot;{activeCategory}&quot;.
                  </div>
                ) : (
                  /* Staggered Grid Render */
                  <div className="space-y-6 sm:space-y-8">
                    {filteredProjects.map((project, idx) => {
                      const isFullWidth = idx % 3 === 0;
                      const isFirstInPair = idx % 3 === 1;

                      if (isFullWidth) {
                        return (
                          <div key={project.id} className="w-full">
                            <WorkCard project={project} onSelect={() => setSelectedProject(project)} />
                          </div>
                        );
                      }

                      if (isFirstInPair) {
                        const nextProject = filteredProjects[idx + 1];
                        return (
                          <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            <WorkCard project={project} onSelect={() => setSelectedProject(project)} />
                            {nextProject && (
                              <WorkCard project={nextProject} onSelect={() => setSelectedProject(nextProject)} />
                            )}
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                )}
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* PROJECT DETAIL MODAL (Matching ArticleDetailModal layout) */}
      <WorkDetailModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProjectDetails}
        allProjects={WORK_PROJECTS.map((p) => ({ ...p, detail: PROJECT_DETAILS_MAP[p.id] }))}
        onSelectProject={(proj) => setSelectedProject(WORK_PROJECTS.find((p) => p.id === proj.id) || null)}
      />

      {/* CLOSING CTA SECTION */}
      <AboutCTA onOpenBooking={openContact} />

      {/* FOOTER */}
      <Footer onOpenBooking={openContact} bgColor="bg-white" />
    </main>
  );
}
