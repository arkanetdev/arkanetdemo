"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { ArticleDetailModal, ArticleItem } from "@/components/modals/ArticleDetailModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { ArrowRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  category: string;
  readTime: string;
  description: string;
  author: string;
  date: string;
  image: string;
  avatar: string;
  content: {
    intro: string[];
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
}

const articlesData: Article[] = [
  {
    id: 1,
    title: "Websites, Apps & AI: What Indian Businesses Should Build First",
    category: "Digital Strategy",
    readTime: "6 min read",
    description:
      "A practical guide to choosing the right first digital investment, from conversion-ready websites to mobile apps, portals, automation, and AI pilots.",
    author: "Arkanet Strategy Team",
    date: "13 July 2026",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    content: {
      intro: [
        "Most businesses do not need every digital product at once. They need the right first move: a website that converts, an app that solves a repeat problem, or an AI workflow that removes daily friction.",
        "The strongest roadmap starts with the customer journey, the operational bottleneck, and the measurable outcome the business wants to improve."
      ],
      sections: [
        {
          heading: "Start with the business outcome",
          paragraphs: [
            "A new website makes sense when lead generation, credibility, SEO, and conversion are the priority. A mobile app makes sense when customers or staff need repeated access to a workflow.",
            "Portals and automation usually come next, once manual handoffs, spreadsheets, and email threads start slowing the team down."
          ]
        },
        {
          heading: "Add AI where it has a job",
          paragraphs: [
            "AI works best when it is connected to a clear task: answering customer questions, routing enquiries, summarising data, or supporting internal teams.",
            "For Arkanet clients, the right sequence is discovery, roadmap, implementation, and ongoing support so each investment compounds instead of becoming another disconnected tool."
          ]
        }
      ]
    },
  },
  {
    id: 2,
    title: "What a High-Converting Business Website Needs in 2026",
    category: "Website Development",
    readTime: "5 min read",
    description:
      "Beyond good visuals, a strong website needs fast pages, clear messaging, trust signals, lead capture, SEO foundations, and a path to ongoing improvement.",
    author: "Nisha Varghese",
    date: "12 July 2026",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    content: {
      intro: [
        "A modern website has to do more than look polished. It needs to explain the offer quickly, prove credibility, and make the next action obvious on mobile and desktop.",
        "For service businesses, every section should move a visitor toward a consultation, a WhatsApp message, a quote request, or a useful article."
      ],
      sections: [
        {
          heading: "Build for clarity before decoration",
          paragraphs: [
            "The first screen should answer what the business does, who it helps, and why the visitor should continue. Clear service pages and pricing cues reduce hesitation.",
            "Trust signals such as project examples, certifications, client logos, FAQs, and contact details should support the decision without overwhelming the visitor."
          ]
        },
        {
          heading: "Performance is part of conversion",
          paragraphs: [
            "Fast load times, accessible structure, metadata, schema, and analytics are not extras. They are what make the website easier to find, use, and improve.",
            "After launch, the site should keep earning: publishing articles, tracking lead sources, and refining pages based on real user behaviour."
          ]
        }
      ]
    },
  },
  {
    id: 3,
    title: "From Wireframe to App Store: How Mobile Apps Actually Ship",
    category: "Mobile Apps",
    readTime: "6 min read",
    description:
      "A plain-English walkthrough of mobile app delivery, covering discovery, UX, development, testing, deployment, and support after launch.",
    author: "Rohan Menon",
    date: "11 July 2026",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    content: {
      intro: [
        "A successful app is not just a set of screens. It is a product with real users, permissions, edge cases, performance expectations, and long-term maintenance needs.",
        "The best app projects begin with a small, useful version that can reach real users quickly, prove demand, and improve from there.",
        "For founders and growing businesses, the goal is not to build every possible feature on day one. The goal is to launch the right core workflow, learn from usage, and keep improving without rebuilding from scratch."
      ],
      sections: [
        {
          heading: "Discovery shapes the build",
          paragraphs: [
            "Before design starts, the team should understand user goals, device requirements, authentication, payments, notifications, offline needs, and admin workflows.",
            "This discovery stage turns a rough idea into a practical product roadmap: what must ship first, what can wait, and which technical decisions should be protected early.",
            "That roadmap helps founders and SMEs avoid building every feature at once while still protecting the product architecture."
          ]
        },
        {
          heading: "Define the MVP carefully",
          paragraphs: [
            "A good MVP is not a cheap or unfinished app. It is the smallest complete version of the product that solves one important problem properly.",
            "For a booking app, that might mean user login, service selection, availability, payment, confirmation, and admin management. For an internal operations app, it may mean role-based access, task status, file uploads, and reporting.",
            "Clear MVP scope keeps cost, timeline, and quality under control while leaving space for future releases."
          ]
        },
        {
          heading: "Design around repeated use",
          paragraphs: [
            "Mobile apps live or die through repeated use. Navigation, onboarding, forms, empty states, notifications, and error messages should all feel simple under real-world conditions.",
            "The interface must support the way people actually use phones: short sessions, interruptions, slow networks, small screens, and quick decisions.",
            "Good UI/UX reduces support requests because users can understand what to do without calling the business for help."
          ]
        },
        {
          heading: "Plan the architecture before coding",
          paragraphs: [
            "Behind the screens, every app needs a reliable foundation: database design, APIs, security rules, storage, admin tools, backups, and deployment environments.",
            "If the app needs payments, maps, chat, push notifications, WhatsApp, CRM, ERP, or analytics integrations, those should be planned before development begins.",
            "Strong architecture makes future features easier, while rushed architecture makes every later change slower and more expensive."
          ]
        },
        {
          heading: "Test beyond the happy path",
          paragraphs: [
            "Real users forget passwords, lose internet, enter unexpected data, close the app during checkout, and use devices with different screen sizes.",
            "Testing should cover core flows, edge cases, permissions, loading states, failed payments, form validation, and performance on common Android and iOS devices.",
            "A polished app is not the one that works only in a demo. It is the one that stays dependable when customers use it in everyday situations."
          ]
        },
        {
          heading: "Launch is only one milestone",
          paragraphs: [
            "Store submission, analytics, crash monitoring, and support processes matter as much as the first version of the app.",
            "Before launch, the team should prepare app store assets, privacy details, release notes, analytics events, support contacts, and a plan for urgent fixes.",
            "After launch, the real product work begins: reviewing usage data, listening to customer feedback, fixing friction points, and choosing the next features based on evidence.",
            "Arkanet's sustain stage keeps the product monitored, maintained, and improved after customers begin using it."
          ]
        },
        {
          heading: "What to prepare before talking to a developer",
          paragraphs: [
            "You do not need a perfect specification to start. A simple brief with the target users, main problem, must-have features, reference apps, budget range, and launch goal is enough for a productive first discussion.",
            "Screenshots, rough sketches, spreadsheet workflows, WhatsApp conversations, or manual process notes can all help the team understand what the app needs to replace or improve.",
            "The better the starting context, the faster the project can move from idea to roadmap."
          ]
        }
      ]
    },
  },
  {
    id: 4,
    title: "When Your Business Needs a Custom Portal",
    category: "Portal Development",
    readTime: "4 min read",
    description:
      "If your team runs on spreadsheets, email approvals, and repeated status calls, a portal can give staff, partners, and customers one secure place to work.",
    author: "Anjali Das",
    date: "10 July 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop",
    content: {
      intro: [
        "A custom portal becomes useful when the same operational questions keep appearing: who approved this, where is that document, what is the latest status, and which version is correct?",
        "Instead of forcing people through scattered tools, a portal creates one reliable workspace for the process."
      ],
      sections: [
        {
          heading: "Portals turn process into product",
          paragraphs: [
            "Customer portals, partner dashboards, internal approval systems, and booking platforms all share the same goal: reduce repeated manual coordination.",
            "The build should focus on roles, permissions, audit trails, data accuracy, and a clean interface that people can use daily."
          ]
        },
        {
          heading: "Start with the workflow map",
          paragraphs: [
            "Before writing code, document the current process and identify the steps that create delay or confusion.",
            "That map becomes the portal scope, helping teams replace fragile spreadsheets without overbuilding."
          ]
        }
      ]
    },
  },
  {
    id: 5,
    title: "Business Automation: Where to Begin Without Overbuilding",
    category: "Automation",
    readTime: "6 min read",
    description:
      "How to identify repetitive workflows, choose the right automation candidates, and build systems that free the team for higher-value work.",
    author: "Arkanet Automation Team",
    date: "9 July 2026",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    content: {
      intro: [
        "Automation is most effective when it removes repetitive handoffs rather than replacing judgment. The goal is to give people better systems for work that does not need to be manual.",
        "Good candidates include lead routing, follow-up reminders, reporting, invoice workflows, document collection, and customer support triage."
      ],
      sections: [
        {
          heading: "Measure the friction first",
          paragraphs: [
            "Look for tasks that happen often, take measurable time, and follow predictable rules. Those are usually better automation targets than rare exceptions.",
            "A short discovery phase can reveal which workflows deserve a simple integration, a custom dashboard, or a larger business system."
          ]
        },
        {
          heading: "Keep humans in the right places",
          paragraphs: [
            "Approvals, exceptions, customer-sensitive messages, and strategic decisions should still have clear human ownership.",
            "The best automation makes the handoff cleaner: fewer missed messages, fewer duplicate entries, and better visibility."
          ]
        }
      ]
    },
  },
  {
    id: 6,
    title: "AI Chatbots That Hold Real Conversations",
    category: "Conversational AI",
    readTime: "5 min read",
    description:
      "What separates modern LLM-based assistants from rigid FAQ bots, and how businesses can deploy them on websites, WhatsApp, and internal helpdesks.",
    author: "Vivek Nair",
    date: "8 July 2026",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    content: {
      intro: [
        "A useful chatbot should understand intent, keep context, answer from approved business content, and hand off to a human when the conversation needs care.",
        "That is very different from a rigid FAQ tree that forces visitors to guess the right button."
      ],
      sections: [
        {
          heading: "Start with trusted content",
          paragraphs: [
            "The assistant should be grounded in the website, service pages, pricing rules, policies, and support documents the business actually trusts.",
            "That foundation helps the bot answer clearly while reducing inaccurate or off-brand responses."
          ]
        },
        {
          heading: "Design the handoff",
          paragraphs: [
            "Every chatbot needs a path to a person. WhatsApp, forms, calendar booking, or internal ticket creation should be part of the flow from the beginning.",
            "Analytics then show which questions customers ask most often and where better content or automation can improve the experience."
          ]
        }
      ]
    },
  },
  {
    id: 7,
    title: "Data Engineering for Growing SMEs",
    category: "Data Engineering",
    readTime: "4 min read",
    description:
      "Why clean pipelines, trustworthy dashboards, and analytics foundations matter before advanced AI or large-scale automation projects.",
    author: "Sara Joseph",
    date: "7 July 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    content: {
      intro: [
        "AI and automation are only as reliable as the data beneath them. For many SMEs, the first data challenge is not advanced modelling; it is knowing which numbers are correct.",
        "Data engineering creates the pipelines and warehouses that turn scattered information into something the team can query and trust."
      ],
      sections: [
        {
          heading: "Unify the important sources",
          paragraphs: [
            "Sales, website enquiries, payment tools, support channels, inventory systems, and spreadsheets often tell separate stories.",
            "A practical data foundation brings the most valuable sources together before layering dashboards or machine learning on top."
          ]
        },
        {
          heading: "Build governance early",
          paragraphs: [
            "Access control, naming conventions, validation checks, and documentation are what keep dashboards trustworthy as a company grows.",
            "Those practices also prepare the business for AI work that depends on clean, explainable inputs."
          ]
        }
      ]
    },
  },
  {
    id: 8,
    title: "SEO Foundations for a New Service Website",
    category: "Digital Marketing",
    readTime: "3 min read",
    description:
      "The essentials every launch should include: metadata, sitemap, structured data, content strategy, analytics, and service pages that answer real searches.",
    author: "Meera Krishnan",
    date: "6 July 2026",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
    content: {
      intro: [
        "SEO for a service business begins with useful pages, not tricks. Each service page should answer a buyer's question clearly and give search engines enough structure to understand the offer.",
        "A launch-ready site needs metadata, sitemap, schema, analytics, and a plan for consistent blog content."
      ],
      sections: [
        {
          heading: "Make service intent obvious",
          paragraphs: [
            "Website development, mobile app development, portal development, AI chatbots, and digital marketing should each have focused pages with plain-English explanations.",
            "Local and international buyers should also find contact details, pricing cues, proof, and a clear consultation path."
          ]
        },
        {
          heading: "Measure what content produces",
          paragraphs: [
            "GA4, conversion events, newsletter tracking, and attribution help connect organic traffic to real enquiries.",
            "Over time, the blog should answer customer objections and support the service pages that matter most commercially."
          ]
        }
      ]
    },
  },
  {
    id: 9,
    title: "One-Off Project or Monthly Technology Partner?",
    category: "Pricing & Support",
    readTime: "5 min read",
    description:
      "How to choose between a fixed build and an ongoing subscription model when your website, app, automation, or AI system needs continuous improvement.",
    author: "Arkanet Client Success",
    date: "5 July 2026",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    content: {
      intro: [
        "Some projects are best handled as a clear one-time build. Others need a partner who keeps improving the product after launch.",
        "The right model depends on the pace of change, the number of stakeholders, and whether the system will need ongoing engineering time."
      ],
      sections: [
        {
          heading: "When a fixed project works",
          paragraphs: [
            "A brochure website, focused landing page, brand refresh, or defined MVP can often be scoped, built, launched, and handed over with support.",
            "This works best when requirements are stable and the business has someone responsible for ongoing content and operations."
          ]
        },
        {
          heading: "When subscription support fits better",
          paragraphs: [
            "AI pilots, active apps, portals, automation systems, and growth websites benefit from continuous monitoring and iteration.",
            "A monthly plan gives the business predictable access to engineering, design, and improvement work without restarting procurement for every change."
          ]
        }
      ]
    },
  },
  {
    id: 10,
    title: "How Arkanet's Understand, Architect, Deliver, Sustain Process Works",
    category: "Process",
    readTime: "4 min read",
    description:
      "A closer look at the four-stage engagement model behind Arkanet projects, from discovery and roadmap planning through delivery and long-term support.",
    author: "Roshan, Arkanet",
    date: "4 July 2026",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    content: {
      intro: [
        "A reliable digital project needs more than a handoff. It needs a shared understanding of the goal, a roadmap, transparent delivery, and support after launch.",
        "Arkanet's process is built around four stages: understand, architect, deliver, and sustain."
      ],
      sections: [
        {
          heading: "Discovery before decisions",
          paragraphs: [
            "The understand stage is where objectives, constraints, users, existing systems, and success metrics become clear.",
            "From there, the architect stage turns discovery into scope, sequencing, technical decisions, and a realistic path to launch."
          ]
        },
        {
          heading: "Support after launch",
          paragraphs: [
            "Delivery includes transparent progress reporting and careful implementation, but launch is not the end of the relationship.",
            "The sustain stage keeps the system monitored, maintained, and improved so the investment continues to serve the business."
          ]
        }
      ]
    },
  },
];

export default function BlogPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isMobile, setIsMobile] = useState(false);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  const outerSideMargin = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    isMobile ? [0, 0, 12] : [0, 0, 40]
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, articlesData.length));
  };

  return (
    <main className="min-h-screen bg-white text-[#0b1330] flex flex-col justify-between selection:bg-[#0b1330] selection:text-white select-none">
      {/* STICKY CONTAINER WITH DYNAMIC PADDING EXPANSION MATCHING WORK & ABOUT MODEL */}
      <div className="relative w-full select-none bg-white">
        <div ref={spacerRef} className="relative min-h-[140vh] sm:min-h-[150vh]">
          <motion.div
            style={{ paddingLeft: outerSideMargin, paddingRight: outerSideMargin }}
            className="sticky top-0 z-10 w-full bg-white pt-0"
          >
            {/* Combined Blog Container with rounded bottom */}
            <div className="w-full bg-[#f4f6fb] text-[#0b1330] rounded-t-none rounded-b-[40px] sm:rounded-b-[64px] shadow-sm border-none overflow-hidden pb-16 sm:pb-24 relative">
              {/* Hero Header matching Homepage Hero model */}
              <div className="relative w-full pt-28 lg:pt-36 pb-8 sm:pb-12 px-6 sm:px-8 lg:px-[40px] overflow-hidden select-none">
                {/* Soft Navy-to-Blue Radial Ambient Glow */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="w-full relative z-10 text-left">
                  <h1 className="hero-h1 text-left block">
                    Blog &amp; <br />
                    <span>Engineering Perspectives</span>
                  </h1>
                  <p className="mt-5 text-lg sm:text-xl md:text-2xl text-[#0b1330] font-medium leading-relaxed max-w-3xl">
                    Practical thinking on websites, apps, and AI systems from the engineering team at Arkanet.
                  </p>
                </div>
              </div>

              {/* Main Container */}
              <div className="pb-8 px-6 sm:px-8 lg:px-[40px] max-w-[1400px] min-[1800px]:max-w-[1600px] mx-auto w-full">
                {/* Articles Feed */}
                <div className="divide-y divide-black/10">
                  {articlesData.slice(0, visibleCount).map((article) => (
                    <article
                      key={article.id}
                      onClick={() => setSelectedArticle(article)}
                      className="group grid grid-cols-1 sm:grid-cols-[280px_1fr] md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr] xl:grid-cols-[400px_1fr] gap-6 sm:gap-10 lg:gap-12 items-center py-10 sm:py-11 lg:py-[50px] transition-colors cursor-pointer"
                    >
                      {/* Left Thumbnail Image */}
                      <div className="relative w-full aspect-[1/1.05] rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#161616] shadow-sm border-0 shrink-0 group-hover:shadow-md transition-all">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>

                      {/* Right Content Column */}
                      <div className="flex flex-col justify-center h-full space-y-5 my-auto">
                        <div className="space-y-3.5">
                          {/* 1. Article Title */}
                          <h3 className="card-h3 text-[#07162f] group-hover:opacity-80 transition-opacity">
                            {article.title}
                          </h3>

                          {/* 2. Category Pill + Read Time */}
                          <div className="flex items-center gap-2.5 text-sm sm:text-base lg:text-[17px] font-medium text-[#07162f]/60 pt-1">
                            <span className="font-semibold text-[#07162f]">{article.category}</span>
                            <span className="text-[#07162f]/30">•</span>
                            <span>{article.readTime}</span>
                          </div>

                          {/* 3. Excerpt Description */}
                          <p className="body-main text-[#07162f]/70 pt-1 line-clamp-4">
                            {article.description}
                          </p>
                        </div>

                        {/* 4. Article Card Bottom Controls */}
                        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 mt-auto">
                          {/* Read Article Pill Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedArticle(article);
                            }}
                            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#07162f] hover:bg-[#0b1f3f] text-white text-sm sm:text-base font-bold font-sans uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                          >
                            <span>Read Article</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>

                          {/* Author Avatar, Name & Date */}
                          <div className="flex items-center gap-3 text-sm sm:text-base lg:text-[16px] font-medium text-[#07162f]/75">
                            <div className="w-8 h-8 rounded-full overflow-hidden relative bg-slate-300 shrink-0">
                              <Image
                                src={article.avatar}
                                alt={article.author}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span>{article.author}</span>
                            <span className="text-[#07162f]/40 ml-2">{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < articlesData.length && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={handleLoadMore}
                      className="bg-[#07162f] hover:bg-[#0b1f3f] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Load more</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pre-Footer CTA */}
      <AboutCTA onOpenBooking={() => setContactModalOpen(true)} />

      {/* Standard Site Footer */}
      <Footer
        onOpenBooking={() => setContactModalOpen(true)}
        bgColor="bg-white"
      />

      {/* Article Detail Modal */}
      <ArticleDetailModal
        isOpen={!!selectedArticle}
        article={selectedArticle}
        allArticles={articlesData}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </main>
  );
}
