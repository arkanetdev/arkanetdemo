/**
 * CAPABILITIES_DATA - Comprehensive Services & Capabilities Catalog
 * Grounded in Arkanet Technologies Services & Capabilities Specification
 * (33 Services across 6 Practice Areas + Technology Stack)
 */

export interface CapabilityDetail {
  slug: string;
  badge: string;
  title: string;
  highlightText: string;
  subtitle: string;
  section2Headline: string;
  section2Subtitle: string;
  heroImages: {
    left: string;
    center: string;
    right: string;
  };
  highlights: {
    icon: string;
    title: string;
    desc: string;
  }[];
  featureRows: {
    title: string;
    description: string;
    image: string;
    imagePosition: "left" | "right";
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    image: string;
    bgColor: string;
    textColor: string;
  }[];
  techShowcase: {
    badge: string;
    title: string;
    description: string;
    image: string;
  };
  finalCtaText: string;
}

const PLACEHOLDER_TESTIMONIAL_NOTE = "[Awaiting approved client quote]";

export const CAPABILITIES_DATA: Record<string, CapabilityDetail> = {
  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 1: ENGINEERING (10 Services)
  // ═══════════════════════════════════════════════════════════════

  // 1.1 Custom Software Engineering
  "custom-software-engineering": {
    slug: "custom-software-engineering",
    badge: "CUSTOM SOFTWARE ENGINEERING",
    title: "Software built around your business,",
    highlightText: "not the other way around.",
    subtitle: "We design and build bespoke systems for organisations whose operations don't fit a template: logistics chains, multi-branch retail, field services, and regulated industries.",
    section2Headline: "When off-the-shelf software fails,\nwe build your own.",
    section2Subtitle: "Every build starts with a discovery phase that maps your actual operational workflow before a line of code is written, ensuring software that holds up under real production load.",
    heroImages: {
      left: "/assets/images/webdevelopmenttwo.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "FileSearch",
        title: "Requirements Discovery",
        desc: "We map your actual business workflows and technical specifications before writing code, so the architecture fits your operational reality.",
      },
      {
        icon: "Database",
        title: "Architecture & Data Modeling",
        desc: "Robust database schemas and scalable micro-service architectures designed for today's load and 3-year growth projections.",
      },
      {
        icon: "Code",
        title: "Full-Stack Engineering",
        desc: "Built with modern, maintainable frameworks (React, Next.js, Node.js, Python) following strict clean code principles.",
      },
      {
        icon: "CheckCircle2",
        title: "Automated QA & Delivery",
        desc: "End-to-end automated testing, continuous integration, full documentation, and seamless team handover.",
      },
    ],
    featureRows: [
      {
        title: "Bespoke Enterprise Systems",
        description: "Custom software tailored for logistics chains, multi-branch operations, and complex business workflows that rigid off-the-shelf platforms cannot support.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Database Modeling & API Architecture",
        description: "High-throughput data modeling and REST/GraphQL APIs engineered to handle high concurrency, data integrity, and fast response times.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Automated Testing & Release Pipelines",
        description: "Comprehensive CI/CD pipelines with automated unit, integration, and load testing ensuring stable production deployments.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Team Handover & Long-Term Documentation",
        description: "Thorough documentation, developer-ready APIs, and team training ensuring your software is easy to maintain and extend.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "PRODUCTION SOFTWARE",
      title: "Bespoke Systems Engineered for Real Scale",
      description: "Custom enterprise software built to run your business today and scale effortlessly for the load you'll have in three years.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's build software built for your business →",
  },

  // 1.2 Web Design & Development
  "website-development": {
    slug: "website-development",
    badge: "WEBSITE DEVELOPMENT",
    title: "Websites engineered to",
    highlightText: "convert, not just impress.",
    subtitle: "We design and build fast, mobile-first websites, static, dynamic, eCommerce, or portfolio, each crafted with precision and shaped around your customer's journey, not a template.",
    section2Headline: "Built with purpose,\nnot just polish.",
    section2Subtitle: "A site that performs is one built with a purpose behind every page, optimised for both search engines and real visitors, where layout, content, and code all serve the same goal: getting the right person to take the next step.",
    heroImages: {
      left: "/assets/images/webdevelopmenttwo.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "Award",
        title: "Expertise",
        desc: "We are experts in web development. Our team comprises skilled professionals with years of experience, ensuring that your website is crafted with precision and expertise from the first wireframe onward.",
      },
      {
        icon: "Settings",
        title: "Customization",
        desc: "We offer tailored web development solutions. We'll work closely with you to create a website that perfectly aligns with your brand and goals, no generic templates, no compromises.",
      },
      {
        icon: "UserCheck",
        title: "User-Centric Design",
        desc: "Our focus is on user-friendly design. Your website will not only look appealing but also provide an intuitive and seamless experience for your visitors, resulting in higher engagement and conversion.",
      },
      {
        icon: "Search",
        title: "SEO Optimization",
        desc: "We build websites with search engines in mind. We implement SEO best practices to help your site rank higher in search results, driving organic traffic and potential customers straight to your pages.",
      },
    ],
    featureRows: [
      {
        title: "Websites built for performance",
        description: "High-speed corporate sites and campaign landing pages designed with responsive layouts, Core Web Vitals optimization, and clean semantic code.",
        image: "/assets/images/website.webp",
        imagePosition: "left",
      },
      {
        title: "Web applications & customer dashboards",
        description: "Interactive web applications built on React and Next.js, featuring real-time data visualization, user authentication, and smooth micro-animations.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "right",
      },
      {
        title: "CMS builds with editor-friendly models",
        description: "Custom content management systems enabling marketing teams to create, edit, and publish content quickly without developer intervention.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Multilingual & RTL-ready builds",
        description: "Full Arabic right-to-left layout support and multi-currency internationalization built directly into the site architecture.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "PRODUCTION WEB PLATFORMS",
      title: "Fast, Accessible Websites That Convert",
      description: "From corporate sites to complex web applications, we build responsive, SEO-ready experiences that load fast on real-world connections.",
      image: "/assets/images/website.webp",
    },
    finalCtaText: "Let's build a website that converts →",
  },

  // 1.3 Mobile App Development
  "mobile-app-development": {
    slug: "mobile-app-development",
    badge: "MOBILE APP DEVELOPMENT",
    title: "Apps people actually",
    highlightText: "keep on their phones.",
    subtitle: "Native and cross-platform apps for iOS and Android, from first wireframe to App Store listing, built around the handful of things your users open the app to do, not a feature checklist.",
    section2Headline: "How we build apps\nthat stick.",
    section2Subtitle: "Most apps get deleted within the first week because they try to do too much, too slowly. We start by identifying the two or three core tasks your users actually came for, then make those fast, obvious, and worth opening again.",
    heroImages: {
      left: "/assets/images/appdevelopment.webp",
      center: "/assets/images/App-development-three.webp",
      right: "/assets/images/appdevelopment-two.webp",
    },
    highlights: [
      {
        icon: "Lightbulb",
        title: "Innovative Solutions",
        desc: "We stay at the forefront of innovation, building apps that incorporate the latest technologies and trends, so your business stays ahead of the competition instead of catching up to it.",
      },
      {
        icon: "Users",
        title: "User-Centered Approach",
        desc: "Our development process prioritizes the end-user. Every screen is meticulously designed to be easy to navigate, ensuring your customers have a delightful experience from the first tap onward.",
      },
      {
        icon: "ShieldCheck",
        title: "Robust Security",
        desc: "Security is paramount in the digital age. Every app we build ships with robust security measures baked into the architecture, protecting user data and safeguarding your brand's reputation.",
      },
      {
        icon: "TrendingUp",
        title: "Scalability",
        desc: "As your business grows, your app should too. We build scalable solutions that adapt to your changing needs, saving you the hassle and cost of frequent redevelopment down the line.",
      },
    ],
    featureRows: [
      {
        title: "iOS and Android cross-platform builds",
        description: "High-performance React Native and Flutter applications delivering native look, feel, and 60fps responsiveness across both Apple App Store and Google Play.",
        image: "/assets/images/appdevelopment.webp",
        imagePosition: "left",
      },
      {
        title: "Offline-first sync & background tasks",
        description: "Built for real-world connectivity. Local data caching, background syncing, and offline queueing so field teams and mobile users never lose data.",
        image: "/assets/images/App-development-three.webp",
        imagePosition: "right",
      },
      {
        title: "Push notifications & in-app payments",
        description: "Engaging push notification triggers, deep linking, biometric login, and secure payment gateway integrations built as standard features.",
        image: "/assets/images/appdevelopment-two.webp",
        imagePosition: "left",
      },
      {
        title: "Store submission & post-launch CI/CD",
        description: "Full Apple App Store and Google Play Store submission management, release pipelines, crash reporting, and analytics tracking.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "MOBILE ENGINE",
      title: "One Codebase, Two App Stores, Zero Compromise",
      description: "Cross-platform and native mobile apps with offline capability, push notifications, and payments handled as standard.",
      image: "/assets/images/App-development-three.webp",
    },
    finalCtaText: "Let's build your mobile app →",
  },

  // 1.4 SaaS Product Development
  "saas-product-development": {
    slug: "saas-product-development",
    badge: "SAAS PRODUCT DEVELOPMENT",
    title: "Multi-tenant platforms",
    highlightText: "built to scale.",
    subtitle: "From first customer to thousandth on the same architecture. We build multi-tenant SaaS products with the hard parts solved upfront: tenant isolation, subscription billing, RBAC, and usage metering.",
    section2Headline: "SaaS architecture solved\nfrom day one.",
    section2Subtitle: "Whether you're launching a new software platform or rebuilding one that's buckling under scale, we bring proven SaaS architectural patterns that protect security and revenue.",
    heroImages: {
      left: "/assets/images/webdevelopmenttwo.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "Shield",
        title: "Multi-Tenant Isolation",
        desc: "Database isolation and data privacy architectures ensuring multi-tenant security and zero cross-tenant leakage.",
      },
      {
        icon: "CreditCard",
        title: "Subscription Billing",
        desc: "Integrated Stripe, Merchant of Record, usage-based metering, tier management, and automated invoicing.",
      },
      {
        icon: "Lock",
        title: "Role-Based Access Control",
        desc: "Granular permission models, admin dashboards, SSO (SAM/OAuth), and audit logs out of the box.",
      },
      {
        icon: "BarChart3",
        title: "Analytics & Usage Metering",
        desc: "Real-time usage tracking, tenant analytics, customer health metrics, and automated onboarding flows.",
      },
    ],
    featureRows: [
      {
        title: "Multi-tenant data isolation",
        description: "Robust database schema strategies, tenant scoping middleware, and row-level security ensuring strict multi-tenant isolation.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Subscription billing & usage metering",
        description: "Automated subscription lifecycle management, usage-based pricing models, upgraded seats, and prorated billing.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "White-label & custom domains",
        description: "Custom domain mapping, SSL provisioning, and custom branding allowing your enterprise customers to white-label your SaaS.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Admin consoles & onboarding flows",
        description: "Internal admin control panels, tenant management tools, and friction-free onboarding workflows that increase activation.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "SAAS PLATFORM",
      title: "Scalable Multi-Tenant SaaS Architecture",
      description: "Built from first customer to thousandth on the same solid architecture, with tenant isolation and billing solved upfront.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's build your SaaS platform →",
  },

  // 1.5 E-Commerce & Shopify Development
  "ecommerce-shopify-development": {
    slug: "ecommerce-shopify-development",
    badge: "E-COMMERCE & SHOPIFY DEVELOPMENT",
    title: "Storefronts engineered",
    highlightText: "to generate revenue.",
    subtitle: "Beautiful stores are common. Stores that convert are engineered. We build and optimize e-commerce experiences on Shopify, WooCommerce, and headless custom stacks.",
    section2Headline: "Commerce built for speed,\nscale, and conversion.",
    section2Subtitle: "From catalogue architecture and checkout optimization to multi-currency payment gateways and seamless ERP integrations, we build online stores that scale.",
    heroImages: {
      left: "/assets/images/website.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmenttwo.webp",
    },
    highlights: [
      {
        icon: "ShoppingBag",
        title: "Headless & Custom Themes",
        desc: "Custom Shopify Liquid themes and Next.js headless storefronts built for lightning sub-second page loads.",
      },
      {
        icon: "DollarSign",
        title: "Checkout Tuning",
        desc: "Conversion-optimized cart flows, 1-click checkouts, and regional multi-currency payment gateways (Tabby, Tamara, Telr, Stripe).",
      },
      {
        icon: "Layers",
        title: "Inventory & ERP Sync",
        desc: "Seamless synchronization between storefront inventory, warehouse ERPs, and fulfillment logistics.",
      },
      {
        icon: "TrendingUp",
        title: "SEO Data Preservation",
        desc: "Platform migrations with 100% SEO equity preservation, redirect mapping, and order history retention.",
      },
    ],
    featureRows: [
      {
        title: "Custom Shopify Liquid & Headless storefronts",
        description: "Tailored Shopify Plus themes and Next.js Hydrogen storefronts designed for extreme speed and high mobile conversion rates.",
        image: "/assets/images/website.webp",
        imagePosition: "left",
      },
      {
        title: "Product catalogue & inventory architecture",
        description: "Scalable variant structures, complex matrix bundling, dynamic pricing rules, and real-time multi-warehouse stock management.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "right",
      },
      {
        title: "Regional payment gateways & BNPL setup",
        description: "Seamless integration of Stripe, Razorpay, Telr, Network International, plus Buy-Now-Pay-Later (Tabby, Tamara).",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "left",
      },
      {
        title: "Platform migration with zero SEO loss",
        description: "Expert migration from WooCommerce or legacy engines to Shopify Plus with full SEO redirect mapping and zero downtime.",
        image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "E-COMMERCE ENGINE",
      title: "Storefronts Engineered to Convert & Scale",
      description: "Commerce platforms covering catalogue architecture, checkout performance, payment gateways, and post-purchase flows.",
      image: "/assets/images/website.webp",
    },
    finalCtaText: "Let's engineer your e-commerce store →",
  },

  // 1.6 Marketplace & Directory Platforms
  "marketplace-directory-platforms": {
    slug: "marketplace-directory-platforms",
    badge: "MARKETPLACE PLATFORMS",
    title: "Two-sided marketplaces,",
    highlightText: "built for high volume.",
    subtitle: "Two-sided platforms have twice the complexity. We handle vendor onboarding, commission logic, split payouts, moderation, and discovery search experiences.",
    section2Headline: "End-to-end multi-vendor\nplatform engineering.",
    section2Subtitle: "Whether building a retail marketplace, service directory, or property listing platform, we build the vendor verification, escrow, search, and payout tools needed to succeed.",
    heroImages: {
      left: "/assets/images/webdevelopmenttwo.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "UserCheck",
        title: "Vendor Onboarding & Dashboards",
        desc: "Streamlined vendor registration, KYC verification, product listing management, and sales performance dashboards.",
      },
      {
        icon: "Split",
        title: "Commission & Split Payouts",
        desc: "Automated split payments via Stripe Connect, commission calculation, escrow holding, and multi-currency merchant payouts.",
      },
      {
        icon: "MapPin",
        title: "Search, Filter & Geolocation",
        desc: "Lightning-fast elastic search, dynamic filtering, map discovery, and location-based vendor matching.",
      },
      {
        icon: "ShieldAlert",
        title: "Moderation & Reviews",
        desc: "Automated review moderation, dispute resolution flows, rating systems, and admin fraud detection.",
      },
    ],
    featureRows: [
      {
        title: "Vendor onboarding & verification portals",
        description: "Self-service seller portals with document verification, listing creation tools, inventory management, and real-time earnings analytics.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Automated commission & split payouts",
        description: "Flexible marketplace monetization models: percentage commissions, fixed listing fees, subscription tiers, and automated multi-party bank payouts.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Geo-location & faceted search discovery",
        description: "Instant faceted search, interactive map clustering, proximity filtering, and AI-assisted listing recommendations.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Dispute resolution & review moderation",
        description: "Built-in buyer/seller messaging, review verification algorithms, escrow holds, and admin dispute handling workflows.",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "MARKETPLACE ENGINE",
      title: "Scalable Two-Sided Marketplace Architecture",
      description: "Marketplaces, directories, and multi-vendor platforms handling onboarding, commission split payouts, and fast discovery.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's build your marketplace platform →",
  },

  // 1.7 Custom Portals
  "custom-portals": {
    slug: "custom-portals",
    badge: "ENTERPRISE PORTALS",
    title: "Give every stakeholder",
    highlightText: "their own front door.",
    subtitle: "Role-aware portals that put the right information in front of the right people: customers checking orders, partners submitting claims, employees filing requests.",
    section2Headline: "Secure, role-based portals\nbuilt for real adoption.",
    section2Subtitle: "Most internal portals fail because they feel clunky or slow. We design role-aware portals with modern UX, granular access control, and seamless database sync.",
    heroImages: {
      left: "/assets/images/webdevelopmentthree.webp",
      center: "/assets/images/webdevelopmenttwo.webp",
      right: "/assets/images/webdevelopmentone.webp",
    },
    highlights: [
      {
        icon: "Shield",
        title: "Role-Based Security",
        desc: "Role-level access controls, multi-factor authentication, and Single Sign-On (SSO) integration for enterprise compliance.",
      },
      {
        icon: "Users",
        title: "Multi-Stakeholder Portals",
        desc: "Dedicated user views for customers, vendors, distributors, and internal employees within a unified platform.",
      },
      {
        icon: "FileCheck",
        title: "Workflows & E-Signatures",
        desc: "Document uploading, automated multi-tier approval chains, and digital e-signature capabilities.",
      },
      {
        icon: "Activity",
        title: "Audit Logging & Reporting",
        desc: "Complete audit trails, compliance-ready reporting, and self-service analytics dashboards.",
      },
    ],
    featureRows: [
      {
        title: "Customer & Client Portals",
        description: "Self-service portals enabling clients to track project statuses, view invoices, download deliverables, and communicate securely.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "left",
      },
      {
        title: "Vendor & Partner Ecosystem Portals",
        description: "Collaborative portals for suppliers and partners to manage inventory claims, submit compliance docs, and track payouts.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "right",
      },
      {
        title: "Employee & Operations Portals",
        description: "Internal team portals streamlining HR requests, expense approvals, document repositories, and operational workflows.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Audit Logging & Compliance Dashboards",
        description: "SOC2/GDPR compliance-ready audit trails, granular permissions, and automated activity log reporting.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "ENTERPRISE PORTAL",
      title: "Secure, Scalable Portal Architecture",
      description: "Built to handle real concurrent users and sensitive data from day one, with security hardening and monitoring out of the box.",
      image: "/assets/images/webdevelopmenttwo.webp",
    },
    finalCtaText: "Let's build your enterprise portal →",
  },

  // 1.8 API & Systems Integration
  "api-systems-integration": {
    slug: "api-systems-integration",
    badge: "API & SYSTEMS INTEGRATION",
    title: "Make your software systems",
    highlightText: "talk to each other.",
    subtitle: "Most companies don't need new software; they need their existing tools connected. We integrate ERPs, CRMs, payment providers, and databases into a coherent flow.",
    section2Headline: "Eliminate duplicate data entry\nand manual handoffs.",
    section2Subtitle: "We build reliable webhook pipelines, middleware bridges, and REST/GraphQL API layers so information moves automatically between all your business platforms.",
    heroImages: {
      left: "/assets/images/webdevelopmentone.webp",
      center: "/assets/images/webdevelopmenttwo.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "Share2",
        title: "API Design & Documentation",
        desc: "Clean REST and GraphQL API endpoints engineered with OpenAPI/Swagger specifications for third-party developer integration.",
      },
      {
        icon: "Layers",
        title: "ERP & CRM Bridges",
        desc: "Bi-directional data sync between Salesforce, HubSpot, Zoho, SAP, Oracle, and custom internal SQL databases.",
      },
      {
        icon: "Zap",
        title: "Event-Driven Pipelines",
        desc: "High-throughput webhook infrastructure and message queues (Kafka, RabbitMQ, Redis) handling real-time data events.",
      },
      {
        icon: "RefreshCw",
        title: "Data Reconciliation",
        desc: "Automated data validation, conflict resolution logic, and reconciliation monitoring to prevent data drift.",
      },
    ],
    featureRows: [
      {
        title: "ERP, CRM & Finance System Integrations",
        description: "Seamless integration between core enterprise platforms, updating accounting, inventory, and customer records instantly.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Webhook & Event Pipeline Architecture",
        description: "Real-time event processing pipelines that trigger multi-system updates the moment a customer action occurs.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Legacy System Middleware Bridges",
        description: "Custom API layers wrapping legacy database servers, making old software accessible to modern mobile and web apps.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Data Synchronization & Reconciliation",
        description: "Automated verification routines ensuring all integrated systems maintain identical data without manual auditing.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "API ENGINE",
      title: "Connected Systems Architecture",
      description: "We connect ERPs, CRMs, logistics tools, and internal databases into a coherent flow, eliminating duplicate data entry.",
      image: "/assets/images/webdevelopmenttwo.webp",
    },
    finalCtaText: "Let's connect your systems →",
  },

  // 1.9 Cloud, DevOps & Hosting
  "cloud-devops-hosting": {
    slug: "cloud-devops-hosting",
    badge: "CLOUD & DEVOPS ENGINEERING",
    title: "Infrastructure that stays up,",
    highlightText: "whatever the traffic.",
    subtitle: "Shipping is easy. Staying live under load is the job. We architect, deploy, and maintain cloud infrastructure on AWS, GCP, Azure, and Vercel.",
    section2Headline: "Zero-downtime CI/CD\nand auto-scaling infrastructure.",
    section2Subtitle: "We build continuous integration pipelines, automated monitoring, and backup strategies from day one, auditing and hardening your existing servers.",
    heroImages: {
      left: "/assets/images/webdevelopmenttwo.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "Cloud",
        title: "Cloud Architecture",
        desc: "Scalable cloud provisioning on AWS, Google Cloud, and Azure using Infrastructure-as-Code (Terraform/Docker).",
      },
      {
        icon: "GitBranch",
        title: "CI/CD Pipelines",
        desc: "Automated build, test, and release pipelines ensuring zero-downtime production deployments.",
      },
      {
        icon: "Activity",
        title: "Monitoring & Alerting",
        desc: "Real-time metrics, server health monitoring, log aggregation, and automated incident response alerts.",
      },
      {
        icon: "ShieldAlert",
        title: "Disaster Recovery",
        desc: "Automated database backups, failover strategies, security hardening, and cloud cost optimization.",
      },
    ],
    featureRows: [
      {
        title: "Multi-cloud architecture & provisioning",
        description: "Cloud setup tailored for performance and cost efficiency across AWS, GCP, Azure, and bare-metal environments.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Automated CI/CD & container deployments",
        description: "Docker containerization, Kubernetes orchestration, and GitHub Actions pipelines that deploy updates reliably.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Real-time monitoring & log aggregation",
        description: "Centralized logging, APM performance tracking, and instant alerts that catch bottlenecks before users do.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Security hardening & cost optimization",
        description: "Cloud security audits, DDoS mitigation, compliance hardening, and infrastructure cost reduction strategies.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "CLOUD ENGINE",
      title: "Infrastructure Built to Stay Live Under Load",
      description: "Cloud architecture, CI/CD deployment pipelines, monitoring, and disaster recovery strategies in place from day one.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's harden your cloud infrastructure →",
  },

  // 1.10 Legacy Modernization
  "legacy-modernization": {
    slug: "legacy-modernization",
    badge: "LEGACY MODERNIZATION",
    title: "Bring old systems",
    highlightText: "into the modern era.",
    subtitle: "The system still works. It just can't do anything new. We modernize aging applications without stopping the business, migrating in phases with non-negotiable data integrity.",
    section2Headline: "Refactor, replace, and extend\nwithout business downtime.",
    section2Subtitle: "We assess your legacy codebase and infrastructure to build phased migration roadmaps that preserve business logic while giving your team modern speed and mobile capabilities.",
    heroImages: {
      left: "/assets/images/webdevelopmentthree.webp",
      center: "/assets/images/webdevelopmenttwo.webp",
      right: "/assets/images/webdevelopmentone.webp",
    },
    highlights: [
      {
        icon: "FileCode",
        title: "Codebase Assessment",
        desc: "In-depth code and database audits identifying technical debt, security vulnerabilities, and refactoring priorities.",
      },
      {
        icon: "GitPullRequest",
        title: "Phased Migration Roadmaps",
        desc: "Step-by-step modular migration strategies with zero business interruption and full rollback safeguards.",
      },
      {
        icon: "Database",
        title: "Data Migration & Validation",
        desc: "ETL migration scripts, schema cleanup, and data validation ensuring 100% data integrity during transition.",
      },
      {
        icon: "Smartphone",
        title: "Modern UI & Mobile Enablement",
        desc: "Creating modern web and mobile user interfaces on top of existing backend database engines.",
      },
    ],
    featureRows: [
      {
        title: "Codebase & infrastructure audits",
        description: "Thorough architectural evaluation of legacy monoliths, identifying what to keep, what to refactor, and what to rebuild.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "left",
      },
      {
        title: "Phased migration with zero downtime",
        description: "Deconstructing legacy applications into modular micro-services or modern Next.js frontends without interrupting active operations.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "right",
      },
      {
        title: "API wrappers over legacy databases",
        description: "Building modern REST/GraphQL API layers over legacy SQL/Oracle databases without requiring full core rewrites.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Interface modernization & mobile enablement",
        description: "Replacing outdated desktop user interfaces with responsive web and mobile apps that employees love to use.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "MODERNIZATION ENGINE",
      title: "Bring Legacy Systems Into the Modern Era",
      description: "We modernize aging applications without stopping the business, assessing what to refactor or replace in seamless phases.",
      image: "/assets/images/webdevelopmenttwo.webp",
    },
    finalCtaText: "Let's modernize your legacy software →",
  },


  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 2: ARTIFICIAL INTELLIGENCE (8 Services)
  // ═══════════════════════════════════════════════════════════════

  // 2.1 Applied AI & ML
  "applied-ai-ml": {
    slug: "applied-ai-ml",
    badge: "APPLIED AI & ML",
    title: "Custom models, built & evaluated",
    highlightText: "against your actual business metric.",
    subtitle: "Not generic \"we do AI\", real engineering across the full stack a production system needs, from raw data through to the interface people actually use.",
    section2Headline: "AI that earns its keep\nin production.",
    section2Subtitle: "We identify where AI creates genuine value in your operation, then build and deploy models for forecasting, classification, recommendation, and anomaly detection.",
    heroImages: {
      left: "/assets/images/ai-chat-bots.webp",
      center: "/assets/images/ai-chat-bottwo.webp",
      right: "/assets/images/ai-chat-bots.webp",
    },
    highlights: [
      {
        icon: "Target",
        title: "Feasibility Assessment",
        desc: "We analyze your datasets and business metrics upfront so you know the ROI before committing to model development.",
      },
      {
        icon: "TrendingUp",
        title: "Predictive Analytics",
        desc: "Custom ML models for demand forecasting, customer churn prediction, credit risk scoring, and anomaly detection.",
      },
      {
        icon: "Eye",
        title: "Computer Vision & OCR",
        desc: "Document classification, automated image inspection, and OCR extraction pipelines processing structured data.",
      },
      {
        icon: "RefreshCw",
        title: "Model MLOps & Retraining",
        desc: "Continuous model monitoring, drift detection, and automated retraining pipelines running in production.",
      },
    ],
    featureRows: [
      {
        title: "Predictive models for demand & risk",
        description: "Tailored machine learning algorithms trained on your historical data to forecast inventory needs, detect fraud, and reduce churn.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "Personalization & recommendation engines",
        description: "Real-time recommendation systems driving higher average order value and customer engagement across web and mobile platforms.",
        image: "/assets/images/ai-chat-bottwo.webp",
        imagePosition: "right",
      },
      {
        title: "Computer vision & document OCR",
        description: "High-accuracy visual classification and automated OCR document extraction processing invoices, IDs, and forms.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "Production MLOps & model retraining",
        description: "Robust MLOps infrastructure ensuring your models stay accurate over time with automated drift alerts and continuous retraining.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "PRODUCTION ML",
      title: "Applied Machine Learning That Delivers Outcomes",
      description: "We deploy machine learning and language models against specific business problems with measurable outcomes, not demos.",
      image: "/assets/images/ai-chat-bottwo.webp",
    },
    finalCtaText: "Let's scope your AI model →",
  },

  // 2.2 Conversational AI & Agents
  "ai-chatbot-automation": {
    slug: "ai-chatbot-automation",
    badge: "CONVERSATIONAL AI & AGENTS",
    title: "Agents that act,",
    highlightText: "not just answer.",
    subtitle: "A chatbot answers questions. An agent completes the task. We build LLM-powered assistants grounded in your knowledge base and connected to your live business systems.",
    section2Headline: "Intelligent agents that check inventory,\nbook meetings & raise tickets.",
    section2Subtitle: "Rather than reciting generic FAQ text, our AI agents execute actions inside your CRM, ERP, and databases with built-in guardrails and human escalation paths.",
    heroImages: {
      left: "/assets/images/ai-chat-bots.webp",
      center: "/assets/images/ai-chat-bottwo.webp",
      right: "/assets/images/ai-chat-bots.webp",
    },
    highlights: [
      {
        icon: "Database",
        title: "RAG Knowledge Base",
        desc: "Retrieval-Augmented Generation grounded in your company's actual PDF manuals, documents, and product knowledge.",
      },
      {
        icon: "Bot",
        title: "Tool-Using Autonomous Agents",
        desc: "Agents connected to live APIs capable of executing actions like booking appointments, creating orders, or updating CRMs.",
      },
      {
        icon: "MessageSquare",
        title: "Multi-Channel Deployment",
        desc: "Deployed seamlessly across Web, WhatsApp Business, Instagram DMs, Microsoft Teams, and internal portals.",
      },
      {
        icon: "ShieldCheck",
        title: "Guardrails & Human Handoff",
        desc: "Strict safety controls, hallucination prevention, and instant handoff to human agents when sentiment or value requires.",
      },
    ],
    featureRows: [
      {
        title: "Retrieval-augmented AI grounded in your data",
        description: "Secure RAG pipelines that index your internal documentation, knowledge base, and product specs for accurate, hallucination-free answers.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "Action-oriented autonomous agents",
        description: "AI assistants with function-calling capabilities that interact directly with your APIs to complete tasks, book schedules, and process requests.",
        image: "/assets/images/ai-chat-bottwo.webp",
        imagePosition: "right",
      },
      {
        title: "WhatsApp, Web & Omnichannel deployment",
        description: "Omnichannel AI agents that maintain full conversation history whether a customer chats on your website or WhatsApp.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "Analytics, guardrails & continuous tuning",
        description: "Comprehensive conversation analytics dashboards, sentiment tracking, and prompt optimization tooling.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "AI AGENT ENGINE",
      title: "LLM Agents Grounded in Your Systems",
      description: "LLM-powered assistants connected to your live business systems that check inventory, book appointments, or raise tickets.",
      image: "/assets/images/ai-chat-bottwo.webp",
    },
    finalCtaText: "Let's deploy your AI agents →",
  },

  // 2.3 AI Commerce Assistants
  "ai-commerce-assistants": {
    slug: "ai-commerce-assistants",
    badge: "AI COMMERCE ASSISTANTS",
    title: "A personal shopper on",
    highlightText: "every single product page.",
    subtitle: "Most abandoned carts are unanswered questions. Embed an AI assistant into your storefront that understands your catalogue and guides shoppers to the right purchase.",
    section2Headline: "Recover sales that generic\nFAQ pages always lose.",
    section2Subtitle: "Our AI commerce assistants handle sizing questions, product comparisons, compatibility objections, and cross-selling in the exact moment queries arise.",
    heroImages: {
      left: "/assets/images/ai-chat-bots.webp",
      center: "/assets/images/website.webp",
      right: "/assets/images/ai-chat-bottwo.webp",
    },
    highlights: [
      {
        icon: "ShoppingBag",
        title: "Catalogue-Aware Discovery",
        desc: "Deep integration with your product database for natural-language product search, sizing advice, and guided selling.",
      },
      {
        icon: "HelpCircle",
        title: "Instant Objection Handling",
        desc: "Answers customer questions on fit, shipping policies, returns, and compatibility in real time right on the PDP.",
      },
      {
        icon: "ShoppingCart",
        title: "Cart Recovery & Upselling",
        desc: "Intelligent abandoned cart recovery prompts and personalized product bundle recommendations.",
      },
      {
        icon: "Globe",
        title: "Multilingual Shopping",
        desc: "Fluent shopping assistance in Arabic, English, Malayalam, Hindi, and regional languages.",
      },
    ],
    featureRows: [
      {
        title: "Catalogue-aware product discovery",
        description: "Natural-language product discovery engines that understand customer preferences and recommend exact product matches.",
        image: "/assets/images/website.webp",
        imagePosition: "left",
      },
      {
        title: "Sizing & compatibility guidance",
        description: "Instant guidance on size, compatibility, ingredients, and specs, removing pre-purchase doubt.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "right",
      },
      {
        title: "Cart recovery & intelligent upsells",
        description: "AI shopper prompts that re-engage hesitant buyers before they drop off, boosting conversion rate.",
        image: "/assets/images/ai-chat-bottwo.webp",
        imagePosition: "left",
      },
      {
        title: "Multilingual shopping experiences",
        description: "Bilingual shopping in Arabic and English, tailored for GCC e-commerce growth.",
        image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "COMMERCE AI",
      title: "AI Personal Shoppers for E-Commerce",
      description: "Embedded AI assistants that understand your catalogue and guide shoppers to the right purchase in real time.",
      image: "/assets/images/website.webp",
    },
    finalCtaText: "Let's add AI to your online store →",
  },

  // 2.4 Hybrid AI Support Desk
  "hybrid-ai-support-desk": {
    slug: "hybrid-ai-support-desk",
    badge: "HYBRID AI SUPPORT DESK",
    title: "AI handles volume.",
    highlightText: "Humans handle nuance.",
    subtitle: "Fully automated support frustrates customers. Fully human support doesn't scale. The answer is both: AI resolves routine queries, instantly handing off complex tickets with full context.",
    section2Headline: "Speed up ticket resolution\nwithout sacrificing human care.",
    section2Subtitle: "Agents get AI-drafted replies and instant internal knowledge retrieval, making every human interaction faster and better informed.",
    heroImages: {
      left: "/assets/images/ai-chat-bots.webp",
      center: "/assets/images/ai-chat-bottwo.webp",
      right: "/assets/images/ai-chat-bots.webp",
    },
    highlights: [
      {
        icon: "Bot",
        title: "AI First-Response Routing",
        desc: "Confidence-based routing resolving tier-1 repetitive tickets automatically 24/7.",
      },
      {
        icon: "UserCheck",
        title: "Seamless Human Handoff",
        desc: "Instant handoff to human support agents with complete chat summary, sentiment, and user context.",
      },
      {
        icon: "Zap",
        title: "Agent Copilot Assist",
        desc: "AI suggested replies, automated ticket tagging, and instant knowledge lookup inside agent dashboards.",
      },
      {
        icon: "Inbox",
        title: "Unified Support Inbox",
        desc: "Unified inbox consolidating Web, WhatsApp, Email, and Social Media inquiries into one desk.",
      },
    ],
    featureRows: [
      {
        title: "Confidence-based AI routing",
        description: "AI resolves routine queries and intelligently routes edge cases to the right human specialist.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "Seamless human handoff with full context",
        description: "Human agents receive a concise AI summary of the issue the second they take over a ticket.",
        image: "/assets/images/ai-chat-bottwo.webp",
        imagePosition: "right",
      },
      {
        title: "AI Copilot for human agents",
        description: "Drafting suggested responses, searching knowledge bases, and auto-filling resolution codes.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "Unified omnichannel inbox",
        description: "Managing tickets across Web chat, WhatsApp Business, email, and social media from a single queue.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "SUPPORT AI",
      title: "Hybrid AI Support Desk Infrastructure",
      description: "AI resolves routine queries instantly and hands off to human agents with full conversation context.",
      image: "/assets/images/ai-chat-bots.webp",
    },
    finalCtaText: "Let's scale your support desk →",
  },

  // 2.5 Document Intelligence & Automated Reporting
  "document-intelligence": {
    slug: "document-intelligence",
    badge: "DOCUMENT INTELLIGENCE",
    title: "Turn documents into data,",
    highlightText: "and data into documents.",
    subtitle: "If your team is retyping information from PDFs, that's an automation waiting to happen. We extract structured data from invoices and generate pixel-perfect reports automatically.",
    section2Headline: "Extract, generate, and typeset\ndocuments in seconds.",
    section2Subtitle: "Two directions, one capability: automated OCR data extraction from scanned contracts and forms, plus automated generation of brand-consistent PDF proposals.",
    heroImages: {
      left: "/assets/images/webdevelopmentone.webp",
      center: "/assets/images/ai-chat-bots.webp",
      right: "/assets/images/webdevelopmenttwo.webp",
    },
    highlights: [
      {
        icon: "FileText",
        title: "Automated OCR Extraction",
        desc: "Extract structured data from scanned invoices, receipts, contracts, and handwritten documents with high precision.",
      },
      {
        icon: "Printer",
        title: "Dynamic Proposal Generation",
        desc: "Automatically produce pixel-perfect, branded PDF proposals and reports from your live CRM and database data.",
      },
      {
        icon: "CheckSquare",
        title: "Data Verification & Validation",
        desc: "Validation rules that cross-check extracted document numbers against your accounting or ERP database.",
      },
      {
        icon: "Clock",
        title: "Scheduled Reporting Pipelines",
        desc: "Automated daily/monthly PDF report generation typeset and emailed to stakeholders on schedule.",
      },
    ],
    featureRows: [
      {
        title: "Automated invoice & contract data extraction",
        description: "Intelligent document processing pipelines converting PDF invoices and contracts into structured database JSON.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "Dynamic PDF proposal & report generation",
        description: "Generates custom typeset PDF quotes, proposals, and certificates automatically from your CRM input.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "right",
      },
      {
        title: "OCR for scanned & handwritten forms",
        description: "Advanced OCR pipelines processing historical physical paperwork, legal records, and handwritten forms.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "left",
      },
      {
        title: "Scheduled multi-language reporting",
        description: "Automated scheduled reporting pipelines producing branded multilingual PDFs in seconds.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "DOCUMENT AI",
      title: "Automated Document Processing & Reporting",
      description: "Extract structured data from invoices and contracts, or generate pixel-perfect proposals automatically from live data.",
      image: "/assets/images/ai-chat-bots.webp",
    },
    finalCtaText: "Let's automate your document workflow →",
  },

  // 2.6 Multilingual AI Solutions
  "multilingual-ai-solutions": {
    slug: "multilingual-ai-solutions",
    badge: "MULTILINGUAL AI SOLUTIONS",
    title: "Arabic, Malayalam, & beyond,",
    highlightText: "done with true cultural fluency.",
    subtitle: "Machine translation isn't localization. We build AI systems that work correctly in languages most vendors treat as an afterthought, with proper RTL layout and cultural adaptation.",
    section2Headline: "Genuine regional fluency,\nnot literal translation.",
    section2Subtitle: "Built for GCC-facing businesses and Indian regional market platforms, with correct font pipelines, script rendering, and culturally adapted content generation.",
    heroImages: {
      left: "/assets/images/webdevelopmentone.webp",
      center: "/assets/images/ai-chat-bots.webp",
      right: "/assets/images/webdevelopmenttwo.webp",
    },
    highlights: [
      {
        icon: "Globe",
        title: "Arabic RTL & Bilingual Design",
        desc: "Flawless right-to-left layout rendering, typography handling, and bilingual web/app UI experiences.",
      },
      {
        icon: "Languages",
        title: "Indian Regional Languages",
        desc: "Malayalam, Hindi, Tamil, and regional Indian language AI text processing and conversational models.",
      },
      {
        icon: "MessageSquare",
        title: "Multilingual AI Chatbots",
        desc: "Chatbots and voice assistants that converse naturally in regional dialects without breaking context.",
      },
      {
        icon: "Sparkles",
        title: "Culturally Adapted Content",
        desc: "AI content generation pipelines tuned for regional cultural context, tone, and local market nuances.",
      },
    ],
    featureRows: [
      {
        title: "Arabic RTL layout & bilingual web experiences",
        description: "Proper right-to-left design systems ensuring Arabic interfaces look native and beautiful.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Malayalam & Indian regional language NLP",
        description: "Natural language processing tailored for regional Indian languages and multi-script input.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "right",
      },
      {
        title: "Multilingual voice & chatbot agents",
        description: "Voice and text AI agents that switch languages fluidly based on user speech input.",
        image: "/assets/images/ai-chat-bottwo.webp",
        imagePosition: "left",
      },
      {
        title: "Embedded font & script rendering pipelines",
        description: "Specialized font engineering preventing script distortion or rendering glitches across devices.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "MULTILINGUAL AI",
      title: "Regional AI Solutions Built for Genuine Fluency",
      description: "AI systems built with proper right-to-left layout, correct script rendering, and cultural adaptation.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's build your multilingual AI solution →",
  },

  // 2.7 Data Engineering
  "data-engineering": {
    slug: "data-engineering",
    badge: "DATA ENGINEERING & DATA SCIENCE",
    title: "Turn messy data into",
    highlightText: "answers you can trust.",
    subtitle: "We turn scattered, siloed data into something your team can query, trust, and act on using applied data science and custom dashboards to help you predict outcomes.",
    section2Headline: "Data you can\nactually rely on.",
    section2Subtitle: "The only thing worse than no data is data you can't trust. We build systems with quality checks and governance built in, so your reports work from a single source of truth.",
    heroImages: {
      left: "/assets/images/webdevelopmenttwo.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "Target",
        title: "Built for Your Questions",
        desc: "We design each system around the questions your team actually asks, so every metric tracked has a business reason to exist.",
      },
      {
        icon: "GitBranch",
        title: "ETL & ELT Pipelines",
        desc: "Automated collection, cleanup, and loading pipelines keeping data fresh across warehouses without manual handoffs.",
      },
      {
        icon: "Server",
        title: "Data Lakehouse Architecture",
        desc: "Cloud data warehouses (Snowflake, BigQuery, PostgreSQL) configured for security, speed, and cost efficiency.",
      },
      {
        icon: "BarChart3",
        title: "BI Dashboards & Real-time AI",
        desc: "Custom PowerBI and Metabase dashboards plugging directly into your machine learning models.",
      },
    ],
    featureRows: [
      {
        title: "ETL & ELT data pipeline engineering",
        description: "Automated data ingestion pipelines that extract data from all your SaaS tools and consolidate it securely.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Data warehouse & lakehouse architecture",
        description: "Structuring BigQuery, Snowflake, or PostgreSQL warehouses for lightning-fast analytical queries.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Data cleansing & quality monitoring",
        description: "Automated deduplication, data cleaning, and anomaly detection ensuring high data integrity.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "BI dashboards & real-time streaming",
        description: "Interactive real-time dashboards giving executives clarity on KPIs and operations.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "DATA PIPELINES",
      title: "Data Engineering & Analytics Architecture",
      description: "We build pipelines and warehouses that consolidate data from every system into a single trustworthy source.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let me clean up your data architecture →",
  },

  // 2.8 Voice AI & IVR Systems
  "voice-ai-ivr-systems": {
    slug: "voice-ai-ivr-systems",
    badge: "VOICE AI & IVR SYSTEMS",
    title: "Phone support without",
    highlightText: "the hold music.",
    subtitle: "Callers hang up on queues. They don't hang up on answers. Intelligent voice systems that answer inbound calls, understand natural speech in multiple languages, and resolve requests.",
    section2Headline: "Replace rigid press-one menus\nwith real natural conversation.",
    section2Subtitle: "Our voice AI agents understand natural speech in English, Arabic, and Malayalam, resolving routine requests outright and routing complex calls with context already gathered.",
    heroImages: {
      left: "/assets/images/ai-chat-bots.webp",
      center: "/assets/images/ai-chat-bottwo.webp",
      right: "/assets/images/ai-chat-bots.webp",
    },
    highlights: [
      {
        icon: "PhoneCall",
        title: "Conversational IVR",
        desc: "Natural speech recognition replacing frustrating press-button IVR menus with instant conversational understanding.",
      },
      {
        icon: "Languages",
        title: "Multilingual Voice AI",
        desc: "Voice handling in English, Arabic, Malayalam, and regional dialects with natural voice synthesis.",
      },
      {
        icon: "Headphones",
        title: "Intelligent Call Routing",
        desc: "Smart callback scheduling, queue management, and context-rich routing to human agents.",
      },
      {
        icon: "FileText",
        title: "CRM Auto Call Logging",
        desc: "Automatic call transcription, sentiment analysis, and instant logging into your CRM or helpdesk.",
      },
    ],
    featureRows: [
      {
        title: "Conversational IVR with natural speech recognition",
        description: "Inbound call processing that lets callers speak naturally and receive immediate automated assistance.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "Multilingual voice AI in Arabic & Malayalam",
        description: "Fluent voice interactions tailored for GCC healthcare, logistics, and regional service desks.",
        image: "/assets/images/ai-chat-bottwo.webp",
        imagePosition: "right",
      },
      {
        title: "Intelligent routing & callback scheduling",
        description: "Zero hold times: automated callback scheduling when queue volumes spike during peak hours.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "CRM integration & call transcription",
        description: "Transcribes phone conversations, extracts key action items, and syncs summaries to customer records.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "VOICE AI ENGINE",
      title: "Intelligent Multilingual Voice AI Systems",
      description: "Intelligent voice systems that answer calls, understand natural speech, and route everything with context gathered.",
      image: "/assets/images/ai-chat-bottwo.webp",
    },
    finalCtaText: "Let's automate your phone support →",
  },


  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 3: AUTOMATION (3 Services)
  // ═══════════════════════════════════════════════════════════════

  // 3.1 Business Process Automation
  "business-automation": {
    slug: "business-automation",
    badge: "BUSINESS AUTOMATION",
    title: "We map the manual work.",
    highlightText: "Then we make it disappear.",
    subtitle: "We identify repetitive, manual workflows and rebuild them as automated systems, freeing your team for work that actually needs a person.",
    section2Headline: "Automation built on\nhow you actually work.",
    section2Subtitle: "Generic automation templates break the moment your process doesn't fit the template. We document how your team works first, then build the system around that.",
    heroImages: {
      left: "/assets/images/webdevelopmentone.webp",
      center: "/assets/images/webdevelopmenttwo.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "ClipboardList",
        title: "Map Before You Build",
        desc: "We document the actual current workflow, every handoff, every manual step, before proposing anything, so the automation replaces the real process.",
      },
      {
        icon: "Layers",
        title: "One Team, Entire Stack",
        desc: "Triggers, pipeline logic, and integrations with your existing tools, handled end to end by a single team.",
      },
      {
        icon: "Settings",
        title: "Right Tool, Not One Tool",
        desc: "We build with whatever automation platform or custom code fits the job, not one preferred tool applied to everything.",
      },
      {
        icon: "RefreshCw",
        title: "Wired Into What You Already Use",
        desc: "Automations that live inside your existing CRM, email, or internal systems, instead of adding another app your team has to remember to check.",
      },
    ],
    featureRows: [
      {
        title: "Workflow mapping before any build",
        description: "We document the actual process, every handoff, every spreadsheet someone maintains by hand, so the automation replaces the real workflow.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Built into the tools you already use",
        description: "Automations that live inside your existing CRM, email, or internal systems, instead of forcing your team onto a new platform.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Freeing your team for real work",
        description: "The goal isn't fewer people, it's less time spent on copy-paste tasks and more time on decisions that actually move the business.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Long-term partnership & support",
        description: "As your business grows, so do your workflows. We stay on to extend the automation as new needs come up.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "WORKFLOW ENGINE",
      title: "Automation Built Around Your Actual Workflow",
      description: "Not off-the-shelf recipes, automations mapped to how your team genuinely works, then built to fit.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's find out what's eating your team's time →",
  },

  // 3.2 Workflow & Integration Automation
  "workflow-integration-automation": {
    slug: "workflow-integration-automation",
    badge: "WORKFLOW AUTOMATION",
    title: "Connect your SaaS tools",
    highlightText: "into one seamless flow.",
    subtitle: "Your tools are fine. The gaps between them are the problem. We wire your existing applications together so information moves automatically without copying and pasting.",
    section2Headline: "Bridging the gaps\nbetween your software.",
    section2Subtitle: "A new lead in your CRM triggers the onboarding sequence, updates the finance system, and notifies the account manager automatically with full monitoring.",
    heroImages: {
      left: "/assets/images/webdevelopmenttwo.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "Zap",
        title: "Cross-App Triggers",
        desc: "Automated event handoffs triggering multi-tool sequences across CRM, finance, and support tools.",
      },
      {
        icon: "Link",
        title: "Deep CRM & ERP Wiring",
        desc: "Connecting HubSpot, Zoho, Salesforce, QuickBooks, and Xero with custom webhook middleware.",
      },
      {
        icon: "AlertCircle",
        title: "Failure Alerting & Retries",
        desc: "Built-in error handling, automatic retry logic, and instant Slack/Email alerts if an API call fails.",
      },
      {
        icon: "Activity",
        title: "Centralized Flow Monitoring",
        desc: "Centralized monitoring dashboard tracking execution logs, data volume, and time-saved metrics.",
      },
    ],
    featureRows: [
      {
        title: "Cross-application automated handoffs",
        description: "Connecting your sales, operations, and accounting software into automated trigger pipelines.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "CRM, ERP & accounting integration",
        description: "Eliminating manual data transfer between customer records, invoice creation, and inventory updates.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Custom automation logic beyond no-code limits",
        description: "When Zapier or Make hit complexity limits, we build custom Python/Node.js micro-services.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Failure alerting & retry mechanisms",
        description: "Resilient integration architecture ensuring no lead or transaction is ever lost due to API downtime.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "INTEGRATION ENGINE",
      title: "Workflow & Integration Automation",
      description: "We wire your existing applications together so information moves automatically between all your business platforms.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's connect your SaaS tools →",
  },

  // 3.3 WhatsApp & Social Commerce Automation
  "whatsapp-social-commerce-automation": {
    slug: "whatsapp-social-commerce-automation",
    badge: "WHATSAPP & SOCIAL COMMERCE",
    title: "Sell and serve where your",
    highlightText: "customers already are.",
    subtitle: "In this region, business happens on WhatsApp. Your systems should too. We build automated commerce and messaging on WhatsApp Business API, Instagram, and Facebook.",
    section2Headline: "Catalogue browsing, orders & payments\ndirectly inside WhatsApp chat.",
    section2Subtitle: "Turn social channels into sales engines: automated catalogue browsing, order placement, payment links, and broadcast re-engagement campaigns connected to live CRM.",
    heroImages: {
      left: "/assets/images/ai-chat-bots.webp",
      center: "/assets/images/ai-chat-bottwo.webp",
      right: "/assets/images/ai-chat-bots.webp",
    },
    highlights: [
      {
        icon: "MessageSquare",
        title: "WhatsApp API Verification",
        desc: "Official Meta WhatsApp Business API setup, green tick verification, and multi-agent inbox configuration.",
      },
      {
        icon: "ShoppingBag",
        title: "In-Chat Catalogue & Checkout",
        desc: "Browsing product catalogues, selecting items, and completing payments via local links right inside WhatsApp.",
      },
      {
        icon: "Bell",
        title: "Automated Tracking & Notifications",
        desc: "Instant automated order confirmations, delivery tracking updates, and appointment reminders.",
      },
      {
        icon: "Users",
        title: "DM Automation & Broadcasts",
        desc: "Instagram & Facebook DM automation, segmented broadcast campaigns, and automated re-engagement flows.",
      },
    ],
    featureRows: [
      {
        title: "WhatsApp Business API & green tick setup",
        description: "Official Meta API integration allowing high-volume message throughput and multi-agent customer support.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "In-chat product catalogues & payment links",
        description: "Interactive product carousels and instant payment gateway links right inside chat conversations.",
        image: "/assets/images/ai-chat-bottwo.webp",
        imagePosition: "right",
      },
      {
        title: "Automated order confirmation & delivery updates",
        description: "Triggering automated shipping alerts, tracking links, and feedback requests when orders update in your ERP.",
        image: "/assets/images/ai-chat-bots.webp",
        imagePosition: "left",
      },
      {
        title: "Instagram DM & broadcast marketing",
        description: "Converting Instagram comments into private DM sales conversations and sending targeted broadcast offers.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "CHAT COMMERCE",
      title: "WhatsApp & Social Commerce Automation Engine",
      description: "Automated commerce on WhatsApp API, Instagram, and Facebook: catalogue browsing, order placement, and payments.",
      image: "/assets/images/ai-chat-bottwo.webp",
    },
    finalCtaText: "Let's automate your WhatsApp commerce →",
  },


  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 4: PLATFORMS & SOLUTIONS (6 Services)
  // ═══════════════════════════════════════════════════════════════

  // 4.1 Learning Management & Live Classrooms
  "learning-management-systems": {
    slug: "learning-management-systems",
    badge: "LEARNING MANAGEMENT SYSTEMS",
    title: "Teach, assess, and certify",
    highlightText: "in one complete platform.",
    subtitle: "Recorded video is a library. Live teaching is a school. Complete learning platforms combining course delivery, live virtual classrooms, assessment, and certification.",
    section2Headline: "Built for institutions running\nreal academic & corporate cohorts.",
    section2Subtitle: "Engineered for training institutes, universities, coaching centres, and corporate teams needing attendance tracking, proctored exams, grading, and parent portals.",
    heroImages: {
      left: "/assets/images/webdevelopmentthree.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmenttwo.webp",
    },
    highlights: [
      {
        icon: "BookOpen",
        title: "Curriculum & Course Authoring",
        desc: "Flexible course authoring, video lesson hosting, structured curriculum modules, and downloadable resource libraries.",
      },
      {
        icon: "Video",
        title: "Live Virtual Classrooms",
        desc: "Interactive live classes with WebRTC video, screen sharing, interactive whiteboards, and cloud recording.",
      },
      {
        icon: "FileCheck2",
        title: "Assignments & Proctored Exams",
        desc: "Automated grading, timed quizzes, assignment submission, and AI-assisted proctored online examination tools.",
      },
      {
        icon: "Award",
        title: "Certificates & Parent Portals",
        desc: "Automated PDF certificate issuance, attendance tracking, fee collection, and dedicated parent visibility dashboards.",
      },
    ],
    featureRows: [
      {
        title: "Course authoring & video delivery",
        description: "Structured lesson modules, video streaming with adaptive bitrate, and interactive quiz checkpoints.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Live interactive virtual classrooms",
        description: "High-definition live video classes with breakout rooms, digital whiteboards, and auto-archived recordings.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Assignments, quizzes & automated grading",
        description: "Comprehensive testing engine supporting multiple choice, essay submissions, and automated gradebook sync.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Fee collection & parent portals",
        description: "Integrated online tuition fee collection, attendance notifications, and parent monitoring portals.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "EDTECH PLATFORM",
      title: "Complete Learning Management Architecture",
      description: "Complete learning platforms combining course delivery, live virtual classrooms, assessment, and certification.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's build your learning platform →",
  },

  // 4.2 Video Conferencing & Meeting Platforms
  "video-conferencing-platforms": {
    slug: "video-conferencing-platforms",
    badge: "VIDEO CONFERENCING PLATFORMS",
    title: "Your own branded meeting rooms,",
    highlightText: "on your own infrastructure.",
    subtitle: "Not every organisation wants its conversations on somebody else's servers. White-label and self-hosted video conferencing built on proven WebRTC infrastructure.",
    section2Headline: "Compliance, data residency & zero\nper-seat licensing fees.",
    section2Subtitle: "Embed custom WebRTC video conferencing directly into your SaaS product, telehealth portal, or public institution with full data residency control.",
    heroImages: {
      left: "/assets/images/webdevelopmentone.webp",
      center: "/assets/images/webdevelopmenttwo.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "Video",
        title: "White-Label Meeting Rooms",
        desc: "Custom-branded video meeting rooms carrying your logo, domain, and custom access permissions.",
      },
      {
        icon: "Users",
        title: "Screen Sharing & Breakouts",
        desc: "HD video, screen sharing, cloud recording, breakout rooms, and in-call interactive chat.",
      },
      {
        icon: "Radio",
        title: "Webinar & Large Audience Mode",
        desc: "Webinar streaming for thousands of concurrent attendees with moderation and Q&A controls.",
      },
      {
        icon: "Server",
        title: "Self-Hosted Data Residency",
        desc: "Deploy on your private cloud or on-premise servers for 100% data sovereignty and compliance.",
      },
    ],
    featureRows: [
      {
        title: "Branded WebRTC video rooms",
        description: "Custom video rooms embedded inside your web app or client portal without external third-party branding.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "left",
      },
      {
        title: "Screen sharing, recording & breakout rooms",
        description: "Feature-rich WebRTC infrastructure supporting interactive whiteboards, cloud recordings, and sub-group breakouts.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "right",
      },
      {
        title: "Self-hosted deployment & data residency",
        description: "Full server control ensuring sensitive telehealth or corporate video streams stay strictly within your private cloud.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Webinar mode with audience controls",
        description: "Large-scale broadcast webinar streams with presenter controls, polls, hand-raising, and live chat.",
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "WEBRTC ENGINE",
      title: "Self-Hosted WebRTC Video Platforms",
      description: "White-label video conferencing built on WebRTC carrying your branding, access rules, and data residency.",
      image: "/assets/images/webdevelopmenttwo.webp",
    },
    finalCtaText: "Let's build your video conferencing platform →",
  },

  // 4.3 Event Management & Ticketing
  "event-management-ticketing": {
    slug: "event-management-ticketing",
    badge: "EVENT TICKETING PLATFORMS",
    title: "From registration,",
    highlightText: "straight to the entrance gate.",
    subtitle: "Every event is judged at the door before anything else has started. End-to-end event platforms covering registration, ticket sales, QR check-in, and self-service kiosks.",
    section2Headline: "Live attendance data & entrance queues\nthat actually move.",
    section2Subtitle: "Engineered for conference organizers, expos, concerts, and stadium events needing reliable offline QR scanning, badge printing, and exhibitor tools.",
    heroImages: {
      left: "/assets/images/webdevelopmentone.webp",
      center: "/assets/images/webdevelopmentthree.webp",
      right: "/assets/images/webdevelopmenttwo.webp",
    },
    highlights: [
      {
        icon: "Ticket",
        title: "Tiered Ticketing & Promo Codes",
        desc: "Custom ticket sales tiers, early-bird promo discounts, group seat reservations, and instant PDF ticket generation.",
      },
      {
        icon: "QrCode",
        title: "QR & NFC Offline Check-In",
        desc: "High-speed mobile QR code and NFC gate check-in app with offline sync capability during internet dropouts.",
      },
      {
        icon: "Printer",
        title: "Badge Printing Kiosks",
        desc: "Self-service badge printing kiosk software for instant attendee registration and physical badge printing.",
      },
      {
        icon: "BarChart3",
        title: "Live Attendance Dashboards",
        desc: "Real-time gate scan metrics, capacity tracking, exhibitor lead retrieval, and post-event analytics.",
      },
    ],
    featureRows: [
      {
        title: "Tiered ticket sales & payment gateways",
        description: "Branded event registration portals with instant ticket sales, seat allocation, and promo code support.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Fast QR & NFC gate check-in scanner app",
        description: "Mobile check-in scanner apps processing over 30 scans per minute per gate with offline backup.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "right",
      },
      {
        title: "Self-service badge printing kiosks",
        description: "Integration with thermal badge printers for automated attendee check-in and custom badge printing.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "left",
      },
      {
        title: "Exhibitor lead retrieval & analytics",
        description: "Empowering event exhibitors to scan attendee badges for instant lead capture and follow-up.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "EVENT PLATFORM",
      title: "End-to-End Event Ticketing & Gate Infrastructure",
      description: "End-to-end event platforms covering registration, ticket sales, QR check-in, and on-site self-service kiosks.",
      image: "/assets/images/webdevelopmentthree.webp",
    },
    finalCtaText: "Let's power your event ticketing →",
  },

  // 4.4 ERP & Business Management Systems
  "erp-business-management": {
    slug: "erp-business-management",
    badge: "ERP & BUSINESS MANAGEMENT",
    title: "One unified system for",
    highlightText: "your entire operation.",
    subtitle: "When finance, inventory, and sales each keep their own version of the truth, none of them are right. Integrated ERP covering accounting, inventory, procurement, and CRM.",
    section2Headline: "Configured around how your business\nactually runs.",
    section2Subtitle: "We build bespoke ERP systems where needed and extend established platforms like Odoo or SAP, configuring software to fit your operational reality.",
    heroImages: {
      left: "/assets/images/webdevelopmenttwo.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "FileSpreadsheet",
        title: "VAT-Compliant Accounting",
        desc: "Integrated general ledger, automated invoicing, tax compliance, and multi-currency financial reporting.",
      },
      {
        icon: "Boxes",
        title: "Multi-Warehouse Stock Control",
        desc: "Real-time inventory tracking, multi-branch stock transfers, reorder triggers, and SKU management.",
      },
      {
        icon: "Briefcase",
        title: "Procurement & Purchase Approvals",
        desc: "Vendor management, purchase order approvals, multi-tier authorization workflows, and bill matching.",
      },
      {
        icon: "PieChart",
        title: "Role-Based Management Dashboards",
        desc: "Executive KPI dashboards providing real-time visibility into revenue, margins, and operational workloads.",
      },
    ],
    featureRows: [
      {
        title: "Accounting & VAT-compliant invoicing",
        description: "Automated billing pipelines tailored for UAE/GCC VAT regulations and regional tax requirements.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Multi-branch inventory & warehouse control",
        description: "Tracking stock movements across multiple warehouses with barcode scanning and low-stock alerts.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Procurement & vendor approval workflows",
        description: "Streamlining purchase requisitions, vendor scorecards, and multi-level approval hierarchies.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Sales CRM & customer account management",
        description: "Unifying lead pipelines, quotation generation, and order processing into one central system.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "ERP ENGINE",
      title: "Integrated Business Management Systems",
      description: "Integrated ERP covering accounting, inventory, procurement, and reporting, configured around your business.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's build your ERP system →",
  },

  // 4.5 HR, Attendance & Access Control
  "hr-attendance-access-control": {
    slug: "hr-attendance-access-control",
    badge: "HR & ACCESS CONTROL",
    title: "Attendance data is only useful",
    highlightText: "if payroll can read it.",
    subtitle: "Workforce systems connecting physical access control and biometric attendance directly to HR records, leave management, and automated payroll calculations.",
    section2Headline: "Hardware and software integrated\nso gate and salary sheet agree.",
    section2Subtitle: "Built for factories, hospitals, campuses, and multi-site offices needing biometric, RFID, and face-recognition attendance integrated directly into statutory payroll.",
    heroImages: {
      left: "/assets/images/webdevelopmentthree.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmenttwo.webp",
    },
    highlights: [
      {
        icon: "Fingerprint",
        title: "Biometric & Face Recognition",
        desc: "Hardware integration with RFID, fingerprint, and face-recognition turnstiles and attendance terminals.",
      },
      {
        icon: "Clock",
        title: "Shift Rostering & Overtime",
        desc: "Automated shift planning, rotas, grace-period rules, overtime calculation, and leave management.",
      },
      {
        icon: "Shield",
        title: "Door Access Control",
        desc: "Zone-based security access permissions, time-restricted entry, and visitor check-in management.",
      },
      {
        icon: "FileSpreadsheet",
        title: "Statutory Payroll Integration",
        desc: "Direct calculation of attendance hours, leave deductions, overtime pay, and WPS-compliant payroll files.",
      },
    ],
    featureRows: [
      {
        title: "Biometric & RFID attendance hardware sync",
        description: "Real-time attendance capture connecting door turnstiles and biometric terminals directly to HR database logs.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Leave management & shift rostering",
        description: "Flexible shift allocation, employee self-service leave requests, approval flows, and automated overtime rules.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "WPS payroll integration & reporting",
        description: "Automated WPS file creation and statutory payroll calculations matching exact gate attendance logs.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Visitor & contractor check-in management",
        description: "Digital visitor logging, badge printing, host notifications, and contractor site access management.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "WORKFORCE PLATFORM",
      title: "Integrated HR & Physical Access Control",
      description: "Workforce systems connecting physical access control and biometric attendance directly to HR records and payroll.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's connect your HR & attendance system →",
  },

  // 4.6 Retail & Mall Automation
  "retail-mall-automation": {
    slug: "retail-mall-automation",
    badge: "RETAIL & MALL AUTOMATION",
    title: "Thousands of store decisions,",
    highlightText: "made automatically.",
    subtitle: "A hypermarket generates thousands of small decisions a day. Connected systems combining AI video analytics, self-service kiosks, and real-time floor operations management.",
    section2Headline: "Live footfall analytics, queue alerts\nand automated stock detection.",
    section2Subtitle: "Surface footfall, queue spikes, empty shelves, and safety events as they happen rather than waiting for next week's manual reports.",
    heroImages: {
      left: "/assets/images/website.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmenttwo.webp",
    },
    highlights: [
      {
        icon: "Camera",
        title: "AI CCTV Footfall Analytics",
        desc: "AI video analytics tracking store footfall, dwell time, queue lengths, and crowd density alerts.",
      },
      {
        icon: "Package",
        title: "Shelf-Gap & Stock-Out Alerts",
        desc: "Automated visual camera detection of empty shelves and planogram non-compliance.",
      },
      {
        icon: "Monitor",
        title: "Wayfinding & Ordering Kiosks",
        desc: "Interactive self-service mall wayfinding, store directory, and product ordering touchscreen kiosks.",
      },
      {
        icon: "Smartphone",
        title: "AI Floor-Manager Alerts",
        desc: "Instant mobile alerts to store floor managers when queues build up or cash registers need staffing.",
      },
    ],
    featureRows: [
      {
        title: "AI CCTV footfall & queue length analytics",
        description: "Converting existing store security cameras into real-time operational analytics engines.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Shelf-gap & planogram stock-out detection",
        description: "Visual AI monitoring that alerts inventory teams the second popular items run empty on shelves.",
        image: "/assets/images/website.webp",
        imagePosition: "right",
      },
      {
        title: "Self-service information & wayfinding kiosks",
        description: "Interactive touchscreen kiosks guiding mall visitors to store locations and promotional deals.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "left",
      },
      {
        title: "Tenant & promotion management portals",
        description: "Centralized dashboards for mall operators to manage tenant leases, footfall reporting, and campaign displays.",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "RETAIL AI ENGINE",
      title: "Intelligent Retail & Mall Automation",
      description: "Connected systems for hypermarkets and malls combining AI video analytics, kiosks, and real-time floor ops.",
      image: "/assets/images/website.webp",
    },
    finalCtaText: "Let's automate your retail operations →",
  },


  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 5: DESIGN & GROWTH (4 Services)
  // ═══════════════════════════════════════════════════════════════

  // 5.1 UI/UX & Graphic Design
  "graphic-design": {
    slug: "graphic-design",
    badge: "UI/UX & GRAPHIC DESIGN",
    title: "Interfaces people understand",
    highlightText: "instantly, without a manual.",
    subtitle: "Good engineering deserves to be seen. If users need a manual, the design failed. We design digital products from user research through to production-ready design systems.",
    section2Headline: "User research, wireframes & developer-ready\ndesign systems.",
    section2Subtitle: "We craft interfaces testable against real user goals: wireframes, interactive prototypes, WCAG accessibility reviews, and developer-ready component specs.",
    heroImages: {
      left: "/assets/images/webdevelopmentone.webp",
      center: "/assets/images/website.webp",
      right: "/assets/images/webdevelopmenttwo.webp",
    },
    highlights: [
      {
        icon: "Compass",
        title: "User Research & Personas",
        desc: "In-depth user research, customer journey mapping, and usability testing guiding every UI decision.",
      },
      {
        icon: "Layout",
        title: "Wireframes & Prototypes",
        desc: "Interactive Figma wireframes and clickable prototypes that allow rapid testing before writing code.",
      },
      {
        icon: "Palette",
        title: "Design Systems & Tokens",
        desc: "Comprehensive component libraries, color design tokens, and typography systems built for React.",
      },
      {
        icon: "CheckCircle2",
        title: "WCAG Accessibility Review",
        desc: "Strict adherence to WCAG 2.1 AA contrast and accessibility standards ensuring inclusive design.",
      },
    ],
    featureRows: [
      {
        title: "User research & journey mapping",
        description: "Understanding your users' core goals through persona creation, interview insights, and clickpath mapping.",
        image: "/assets/images/website.webp",
        imagePosition: "left",
      },
      {
        title: "Interactive Figma prototypes & testing",
        description: "Clickable prototypes that test user flows and validate conversion hypothesis before engineering begins.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "right",
      },
      {
        title: "Production design systems & component libraries",
        description: "Figma design systems mapped directly to Tailwind CSS tokens for 1:1 developer implementation.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "left",
      },
      {
        title: "Developer-ready specs & WCAG reviews",
        description: "Pixel-perfect handoffs with spacing rules, interactive states, micro-animations, and accessibility compliance.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "DESIGN SYSTEM",
      title: "Interfaces People Understand Instantly",
      description: "We design digital products from research through to production-ready design systems that engineering can build directly.",
      image: "/assets/images/website.webp",
    },
    finalCtaText: "Let's design your product interface →",
  },

  // 5.2 Brand Identity & Creative
  "brand-identity-creative": {
    slug: "brand-identity-creative",
    badge: "BRAND IDENTITY & CREATIVE",
    title: "Credibility is visual",
    highlightText: "long before it's verbal.",
    subtitle: "We develop complete brand identities: naming direction, logo, color, typography, and brand guidelines that keep everything consistent across every customer touchpoint.",
    section2Headline: "A brand system built to outlast\na single campaign.",
    section2Subtitle: "We produce the real collateral your team needs to use day to day: pitch decks, social media templates, marketing collateral, packaging, and digital guidelines.",
    heroImages: {
      left: "/assets/images/webdevelopmenttwo.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "Palette",
        title: "Logo & Visual Identity",
        desc: "Distinctive logo design, brand mark exploration, color palette creation, and typography pairing systems.",
      },
      {
        icon: "BookOpen",
        title: "Comprehensive Brand Guidelines",
        desc: "Detailed brand guidelines covering logo usage, spacing rules, font scales, and brand tone of voice.",
      },
      {
        icon: "Presentation",
        title: "Marketing Decks & Collateral",
        desc: "Investor pitch decks, sales collateral, print materials, and digital presentation templates.",
      },
      {
        icon: "Share2",
        title: "Social & Packaging Assets",
        desc: "Social media post templates, campaign creative, signage, and product packaging design.",
      },
    ],
    featureRows: [
      {
        title: "Logo design & visual identity systems",
        description: "Crafting iconic brand logos and cohesive visual language systems tailored to your industry scale.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Brand guidelines & asset libraries",
        description: "Detailed brand guidelines ensuring brand consistency across web, print, mobile, and advertising.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Marketing decks & investor collateral",
        description: "High-impact presentation decks and sales collateral that convey enterprise credibility.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Packaging & environmental design",
        description: "Physical packaging design, retail signage, and event booth visual assets.",
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "BRAND SYSTEM",
      title: "A Complete Brand Identity System",
      description: "Guidelines and visual assets built to outlast a single campaign, so every piece of marketing looks like it belongs to the same company.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's build a brand that holds up →",
  },

  // 5.3 Digital Marketing
  "digital-marketing": {
    slug: "digital-marketing",
    badge: "DIGITAL MARKETING",
    title: "Marketing that grows",
    highlightText: "your revenue, not your reports.",
    subtitle: "SEO, paid campaigns, and content strategy built around measurable outcomes, not vanity metrics like impressions or followers.",
    section2Headline: "Marketing that earns\nits budget back.",
    section2Subtitle: "Impressions and follower counts are easy to grow. Qualified leads and revenue are harder, and that's exactly what we optimise for, from day one of every campaign.",
    heroImages: {
      left: "/assets/images/understand-digital.webp",
      center: "/assets/images/undestand.webp",
      right: "/assets/images/understand-digital.webp",
    },
    highlights: [
      {
        icon: "Award",
        title: "Proven Results",
        desc: "Data-driven strategies that deliver measurable revenue growth, lead generation, and verified ROI.",
      },
      {
        icon: "Layers",
        title: "Comprehensive Spectrum",
        desc: "Paid search, paid social, SEO, and email marketing managed as one integrated campaign system.",
      },
      {
        icon: "Target",
        title: "Targeted Audience Campaigns",
        desc: "Hyper-targeted campaigns reaching decision-makers on Google, LinkedIn, Meta, and regional platforms.",
      },
      {
        icon: "BarChart3",
        title: "Real-Time Attribution",
        desc: "Transparent multi-touch attribution dashboards tracking every ad dollar spent to revenue won.",
      },
    ],
    featureRows: [
      {
        title: "Paid search & social performance ads",
        description: "Precision PPC campaigns on Google Search, LinkedIn Ads, Meta, and TikTok optimized for customer acquisition cost.",
        image: "/assets/images/understand-digital.webp",
        imagePosition: "left",
      },
      {
        title: "Landing page conversion rate tuning",
        description: "A/B testing landing pages, copy tuning, and user friction removal to double lead conversion rates.",
        image: "/assets/images/undestand.webp",
        imagePosition: "right",
      },
      {
        title: "Email marketing & lifecycle automation",
        description: "Automated email nurture sequences, lead scoring, re-engagement flows, and newsletter campaigns.",
        image: "/assets/images/understand-digital.webp",
        imagePosition: "left",
      },
      {
        title: "Attribution setup & performance analytics",
        description: "GA4, server-side tracking, and multi-touch attribution models showing exact ROAS.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "REVENUE MARKETING",
      title: "Marketing Tied to Revenue, Not Vanity Metrics",
      description: "Every campaign measured against qualified leads and sales pipeline, reported transparently every month.",
      image: "/assets/images/understand-digital.webp",
    },
    finalCtaText: "Let's get you more qualified leads →",
  },

  // 5.4 SEO & Performance Marketing
  "seo-performance-marketing": {
    slug: "seo-performance-marketing",
    badge: "SEO & PERFORMANCE MARKETING",
    title: "Be found online when",
    highlightText: "it matters most.",
    subtitle: "Ranking is compounding. Start late, pay more. We handle technical SEO, content strategy, and authority building to grow your organic visibility across multi-region search.",
    section2Headline: "Grow your organic traffic\nand lower acquisition costs.",
    section2Subtitle: "We pair technical site architecture fixes and high-intent keyword strategy with performance paid search when speed matters more than waiting for organic growth.",
    heroImages: {
      left: "/assets/images/understand-digital.webp",
      center: "/assets/images/undestand.webp",
      right: "/assets/images/understand-digital.webp",
    },
    highlights: [
      {
        icon: "Search",
        title: "Technical SEO Audits",
        desc: "Fixing crawlability, indexation, Core Web Vitals, site architecture, and structured Schema markup.",
      },
      {
        icon: "FileText",
        title: "High-Intent Keyword Strategy",
        desc: "Researching high-buyer-intent keywords that turn organic search visitors into qualified sales inquiries.",
      },
      {
        icon: "Globe",
        title: "Local & Multilingual SEO",
        desc: "Local search optimization for Dubai/GCC and regional Indian markets, with multi-region hreflang setup.",
      },
      {
        icon: "Link",
        title: "Authority & Link Building",
        desc: "High-authority digital PR, link building, and monthly search engine ranking performance reporting.",
      },
    ],
    featureRows: [
      {
        title: "Technical SEO audits & site speed fixes",
        description: "Eliminating technical errors, optimizing JavaScript rendering, and achieving top Core Web Vitals scores.",
        image: "/assets/images/understand-digital.webp",
        imagePosition: "left",
      },
      {
        title: "High-intent content & keyword strategy",
        description: "Creating authoritative content hubs targeting high-value commercial search terms.",
        image: "/assets/images/undestand.webp",
        imagePosition: "right",
      },
      {
        title: "Local & multi-region international SEO",
        description: "Optimizing Google Business profiles and multi-language hreflang structures for regional search dominance.",
        image: "/assets/images/understand-digital.webp",
        imagePosition: "left",
      },
      {
        title: "Authority building & monthly ranking reports",
        description: "White-hat link building and monthly keyword ranking reports showing clear organic growth.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "SEO ENGINE",
      title: "Compounding Organic Search Visibility",
      description: "Technical SEO, content strategy, and authority building to grow organic visibility and cut acquisition costs.",
      image: "/assets/images/understand-digital.webp",
    },
    finalCtaText: "Let's boost your search rankings →",
  },


  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 6: ADVISORY & SUPPORT (2 Services)
  // ═══════════════════════════════════════════════════════════════

  // 6.1 Product Strategy & Consulting
  "product-strategy-consulting": {
    slug: "product-strategy-consulting",
    badge: "PRODUCT STRATEGY & CONSULTING",
    title: "Get the plan right",
    highlightText: "before you write a line of code.",
    subtitle: "The most expensive code is the code that shouldn't have been written. We help you decide what to build, in what order, and whether it's worth building through discovery workshops.",
    section2Headline: "Scope the problem before\nproposing a solution.",
    section2Subtitle: "Useful before a project starts, and equally useful when one has stalled. We provide architecture assessments, MVP scoping, vendor evaluation, and cost estimates.",
    heroImages: {
      left: "/assets/images/webdevelopmentone.webp",
      center: "/assets/images/webdevelopmenttwo.webp",
      right: "/assets/images/webdevelopmentthree.webp",
    },
    highlights: [
      {
        icon: "Lightbulb",
        title: "Discovery Workshops",
        desc: "Interactive requirements workshops mapping user journeys, business goals, and technical scope.",
      },
      {
        icon: "FileSearch",
        title: "Technical Feasibility Audit",
        desc: "Evaluating technical feasibility, architecture risks, and selecting the optimal technology stack.",
      },
      {
        icon: "CheckSquare",
        title: "MVP Scoping & Roadmaps",
        desc: "Scoping minimum viable products and phased release roadmaps so you launch early and iterate.",
      },
      {
        icon: "DollarSign",
        title: "Cost & Timeline Estimation",
        desc: "Realistic cost estimation, timeline projections, and vendor evaluation to keep projects on track.",
      },
    ],
    featureRows: [
      {
        title: "Discovery workshops & requirements definition",
        description: "Turning vague product ideas into technical specs and actionable user stories.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Technical feasibility & architecture assessment",
        description: "Assessing system architecture options to prevent costly rework down the line.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "MVP scoping & phased release planning",
        description: "Prioritizing high-impact features for launch v1 while mapping clear v2/v3 expansion roadmaps.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Vendor evaluation & cost estimation",
        description: "Unbiased technical advisory, team scoping, and cost/timeline risk assessment.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "PRODUCT ADVISORY",
      title: "Get the Plan Right Before You Build",
      description: "We help you decide what to build, in what order, and whether it's worth building at all.",
      image: "/assets/images/webdevelopmentone.webp",
    },
    finalCtaText: "Let's scope your product strategy →",
  },

  // 6.2 Maintenance & Support Retainers
  "maintenance-support-retainers": {
    slug: "maintenance-support-retainers",
    badge: "MAINTENANCE & SUPPORT RETAINERS",
    title: "Someone on call",
    highlightText: "when it matters most.",
    subtitle: "Launch day is the beginning of software's life, not the end. Ongoing retainers covering 24/7 monitoring, security patching, dependency updates, and bug fixes.",
    section2Headline: "SLA-backed retainers for systems\nwe built or inherited.",
    section2Subtitle: "We keep your applications online, secure, and updated with defined response times, regular health reports, and incremental feature enhancements.",
    heroImages: {
      left: "/assets/images/webdevelopmentthree.webp",
      center: "/assets/images/webdevelopmentone.webp",
      right: "/assets/images/webdevelopmenttwo.webp",
    },
    highlights: [
      {
        icon: "ShieldCheck",
        title: "Proactive Monitoring & Uptime",
        desc: "24/7 server monitoring, uptime tracking, and instant alerts catching server issues before users notice.",
      },
      {
        icon: "Lock",
        title: "Security & Dependency Patching",
        desc: "Regular security audits, framework updates, dependency vulnerability patching, and SSL management.",
      },
      {
        icon: "Wrench",
        title: "Bug Fixes & Incremental Work",
        desc: "Dedicated developer hours each month for bug fixes, performance tuning, and new feature enhancements.",
      },
      {
        icon: "Clock",
        title: "Defined SLAs & Priority Tiers",
        desc: "Guaranteed SLA response times (down to 15 mins for critical outages) with transparent ticket tracking.",
      },
    ],
    featureRows: [
      {
        title: "24/7 uptime monitoring & alerting",
        description: "Continuous infrastructure monitoring ensuring 99.9% uptime with automated error logging.",
        image: "/assets/images/webdevelopmentone.webp",
        imagePosition: "left",
      },
      {
        title: "Security patching & framework updates",
        description: "Routine dependency updates, security vulnerability patching, and database maintenance.",
        image: "/assets/images/webdevelopmenttwo.webp",
        imagePosition: "right",
      },
      {
        title: "Bug fixes & incremental feature enhancements",
        description: "Monthly allocated engineering sprints for continuous product improvements and UI refinements.",
        image: "/assets/images/webdevelopmentthree.webp",
        imagePosition: "left",
      },
      {
        title: "Regular health reports & SLA guarantees",
        description: "Monthly system health reports, performance metrics, and guaranteed response SLAs.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#070035]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#070035]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "SUPPORT RETAINER",
      title: "SLA-Backed Support & Maintenance",
      description: "Launch day is the beginning of software's life. We support systems we built and systems we inherit.",
      image: "/assets/images/webdevelopmentthree.webp",
    },
    finalCtaText: "Let's secure your maintenance retainer →",
  },
};

// ═══════════════════════════════════════════════════════════════
// ROUTE ALIASES (Ensures 100% clean resolution for all URL patterns)
// ═══════════════════════════════════════════════════════════════
CAPABILITIES_DATA["web-development"] = CAPABILITIES_DATA["website-development"];
CAPABILITIES_DATA["app-development"] = CAPABILITIES_DATA["mobile-app-development"];
CAPABILITIES_DATA["portal-development"] = CAPABILITIES_DATA["custom-portals"];
CAPABILITIES_DATA["chatbots-virtual-agents"] = CAPABILITIES_DATA["ai-chatbot-automation"];
CAPABILITIES_DATA["conversational-ai"] = CAPABILITIES_DATA["ai-chatbot-automation"];
CAPABILITIES_DATA["ml-development"] = CAPABILITIES_DATA["applied-ai-ml"];
CAPABILITIES_DATA["automation"] = CAPABILITIES_DATA["business-automation"];
CAPABILITIES_DATA["ui-ux-design"] = CAPABILITIES_DATA["graphic-design"];
CAPABILITIES_DATA["ui-ux"] = CAPABILITIES_DATA["graphic-design"];
CAPABILITIES_DATA["shopify-development"] = CAPABILITIES_DATA["ecommerce-shopify-development"];
CAPABILITIES_DATA["marketplace-platforms"] = CAPABILITIES_DATA["marketplace-directory-platforms"];
CAPABILITIES_DATA["cloud-devops"] = CAPABILITIES_DATA["cloud-devops-hosting"];
CAPABILITIES_DATA["learning-management"] = CAPABILITIES_DATA["learning-management-systems"];
CAPABILITIES_DATA["erp-systems"] = CAPABILITIES_DATA["erp-business-management"];
CAPABILITIES_DATA["hr-access-control"] = CAPABILITIES_DATA["hr-attendance-access-control"];
CAPABILITIES_DATA["seo-marketing"] = CAPABILITIES_DATA["seo-performance-marketing"];
CAPABILITIES_DATA["brand-identity"] = CAPABILITIES_DATA["brand-identity-creative"];
CAPABILITIES_DATA["strategy-consulting"] = CAPABILITIES_DATA["product-strategy-consulting"];
