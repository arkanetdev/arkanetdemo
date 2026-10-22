"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

function MagneticCloseButton({ onClick }: { onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.88 }}
      className="group absolute top-6 right-6 sm:top-8 sm:right-8 z-50 w-11 h-11 rounded-full bg-[#282828] hover:bg-[#383838] flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden shrink-0 shadow-lg border border-white/10"
      aria-label="Close modal"
    >
      <motion.div
        animate={{ rotate: isHovered ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="text-white transition-colors duration-300"
      >
        <X className="w-4 h-4" strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
}

export interface ArticleItem {
  id: number;
  title: string;
  category: string;
  readTime: string;
  description: string;
  author: string;
  date: string;
  image: string;
  avatar: string;
  content?: {
    intro: string[];
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
}

export interface ArticleDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: ArticleItem | null;
  allArticles?: ArticleItem[];
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  isOpen,
  onClose,
  article,
  allArticles = [],
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<ArticleItem | null>(null);

  // Sync current article when prop changes
  useEffect(() => {
    if (article) setCurrentArticle(article);
  }, [article]);

  // Lock body scroll while modal is open & reset scroll state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsScrolled(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Expand to full screen on scroll (same as ContactFormModal)
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 20) {
      if (!isScrolled) setIsScrolled(true);
    } else {
      if (isScrolled) setIsScrolled(false);
    }
  };

  if (!currentArticle) return null;

  // Find next article
  const currentIndex = allArticles.findIndex((a) => a.id === currentArticle.id);
  const nextArticle = allArticles[(currentIndex + 1) % allArticles.length] ?? null;

  const handleNextArticle = () => {
    if (nextArticle) {
      setCurrentArticle(nextArticle);
      // scroll back to top
      const scrollEl = document.getElementById("article-modal-scroll");
      if (scrollEl) scrollEl.scrollTop = 0;
    }
  };

  const renderParagraph = (paragraph: string) => {
    const parts = paragraph.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={`${part}-${index}`} className="font-bold text-[#07162f]">
            {part.slice(2, -2)}
          </strong>
        );
      }

      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">

          {/* Backdrop Overlay, same as ContactFormModal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/55 backdrop-blur-xs z-40 cursor-pointer"
          />

          {/* Slide-Up Panel, same shell as ContactFormModal */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`fixed bottom-0 z-50 bg-[#121212] text-white shadow-[0_-20px_80px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled
                ? "inset-x-0 top-0 rounded-t-none"
                : "inset-x-0 sm:inset-x-8 xl:inset-x-[40px] top-[80px] sm:top-[160px] lg:top-[230px] rounded-t-[28px] sm:rounded-t-[48px]"
            }`}
          >
            {/* Close (X) Button */}
            <MagneticCloseButton onClick={onClose} />

            {/* Scrollable Content Body */}
            <div
              id="article-modal-scroll"
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >

              {/* ── DARK HERO SECTION with padding & rounded image ── */}
              <div className="px-5 sm:px-8 lg:px-10 pt-5 sm:pt-8 lg:pt-[60px] pb-0 lg:pb-[40px]">
                <div className="max-w-[1350px] mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 rounded-[20px] sm:rounded-[24px] overflow-hidden">

                  {/* Left: Article Image, fixed aspect ratio to prevent stretching */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:min-h-[320px] lg:min-h-[400px]">
                    <Image
                      src={currentArticle.image}
                      alt={currentArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right: Title + Category/ReadTime + Description */}
                  <div className="flex flex-col justify-center gap-5 bg-[#1a1a1a] px-7 sm:px-10 lg:px-12 py-9 sm:py-10 lg:py-14">

                    {/* Title, large white */}
                    <h1 className="modal-hero-h1 text-white">
                      {currentArticle.title}
                    </h1>

                    {/* Category • Read time */}
                    <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-white/60">
                      <span className="font-bold text-white">{currentArticle.category}</span>
                      <span className="text-white/30">•</span>
                      <span>{currentArticle.readTime}</span>
                    </div>

                    {/* Description excerpt */}
                    <p className="modal-hero-sub text-white/75 max-w-lg">
                      {currentArticle.description}
                    </p>

                    {/* Author row */}
                    <div className="flex items-center gap-3 pt-1 text-sm sm:text-base text-white/60">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden relative bg-white/10 shrink-0">
                        <Image
                          src={currentArticle.avatar}
                          alt={currentArticle.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-semibold text-white">{currentArticle.author}</span>
                      <span className="text-white/40">{currentArticle.date}</span>
                    </div>
                  </div>

                  </div>
                </div>
              </div>

              {/* ── ARTICLE BODY, clean light bg matching site theme model ── */}
              <div className="bg-[#f4f6fb] text-[#07162f]">
                <div className="max-w-[1030px] mx-auto px-6 sm:px-10 lg:px-[40px] py-12 sm:py-16 space-y-14">

                  {/* Intro paragraphs */}
                  <div className="space-y-6 modal-body-p text-[#07162f]/80">
                    {(currentArticle.content?.intro ?? [currentArticle.description]).map((paragraph) => (
                      <p key={paragraph}>{renderParagraph(paragraph)}</p>
                    ))}
                  </div>

                  {currentArticle.content?.sections.map((section) => (
                    <div key={section.heading} className="space-y-6 pt-2 border-t border-black/10">
                      <h2 className="modal-section-h2 text-[#07162f] pt-6">
                        {section.heading}
                      </h2>
                      <div className="space-y-6 modal-body-p text-[#07162f]/80">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{renderParagraph(paragraph)}</p>
                        ))}
                      </div>
                    </div>
                  ))}

                </div>

                {/* ── UP NEXT ARTICLE SECTION ── */}
                {nextArticle && (
                  <div className="border-t border-black/10 bg-[#eeeee8]">
                    <div className="max-w-[1030px] mx-auto px-6 sm:px-10 lg:px-[40px] pt-12 sm:pt-16 pb-14 sm:pb-20">

                      {/* "Up Next" large heading */}
                      <h2
                        style={{ fontSize: "clamp(40px, 6vw, 96px)", lineHeight: 1 }}
                        className="font-display font-medium text-[#07162f] tracking-tight mb-10 sm:mb-14"
                      >
                        Up Next
                      </h2>

                      <button
                        onClick={handleNextArticle}
                        className="group w-full text-left grid grid-cols-1 sm:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-6 sm:gap-10 lg:gap-14 items-start"
                      >
                        {/* Portrait Thumbnail, 3/4 aspect ratio matching screenshot */}
                        <div className="relative w-full aspect-[3/4] rounded-[18px] overflow-hidden bg-[#ccc] shrink-0">
                          <Image
                            src={nextArticle.image}
                            alt={nextArticle.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        </div>

                        {/* Right Content */}
                        <div className="flex flex-col justify-between h-full gap-6">
                          <div className="space-y-4 pt-1">
                            {/* Category ✳ read time */}
                            <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-[#07162f]/55">
                              <span className="font-bold text-[#07162f]">{nextArticle.category}</span>
                              <span className="text-[#38bdf8] text-base">✳</span>
                              <span>{nextArticle.readTime}</span>
                            </div>

                            {/* Large title */}
                            <h3
                              style={{ fontSize: "clamp(26px, 3.5vw, 54px)", lineHeight: 1.06 }}
                              className="font-display font-semibold text-[#07162f] tracking-tight group-hover:opacity-70 transition-opacity"
                            >
                              {nextArticle.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base sm:text-lg text-[#07162f]/60 leading-relaxed line-clamp-3">
                              {nextArticle.description}
                            </p>
                          </div>

                          {/* Bottom row: Read Article pill + date */}
                          <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
                            <span className="inline-flex items-center gap-2 bg-[#07162f] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full group-hover:bg-[#0b1f3f] transition-colors">
                              Read Article
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                            <span className="text-sm sm:text-base text-[#07162f]/45 font-medium">
                              {nextArticle.date}
                            </span>
                          </div>
                        </div>
                      </button>

                    </div>
                  </div>
                )}

              </div>
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};
