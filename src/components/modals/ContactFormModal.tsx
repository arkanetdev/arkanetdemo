"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Loader2, Check, Upload, FileText, Trash2 } from "lucide-react";

export interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ═══════════════════════════════════════════════════════════════
   🔘 CLOSE (X)
═══════════════════════════════════════════════════════════════ */
const MagneticCloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
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
      className="group absolute top-4 right-4 sm:top-8 sm:right-8 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-[#0b1330] flex items-center justify-center cursor-pointer transition-colors duration-300 overflow-hidden shrink-0 shadow-md"
      aria-label="Close modal"
    >
      <motion.div
        animate={{ rotate: isHovered ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="text-slate-700 group-hover:text-white transition-colors duration-300"
      >
        <X className="w-[18px] h-[18px]" strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
};

/* ═══════════════════════════════════════════════════════════════
   ✨ FLOATING LABEL FIELD, Used for ALL inputs
═══════════════════════════════════════════════════════════════ */
const FloatingLabelField: React.FC<{
  label: string;
  helper?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  multiline?: boolean;
  rows?: number;
}> = ({ label, helper, value, onChange, required, type = "text", multiline = false, rows = 4 }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const isFloating = focused || hasValue;

  return (
    <div className="w-full">
      <div className="relative pt-5 pb-1">
        {/* Floating label */}
        <motion.label
          initial={false}
          animate={{
            y: isFloating ? 0 : 20,
            scale: isFloating ? 0.85 : 1,
            color: focused ? "#4A6FCF" : isFloating ? "#0b1330" : "#94a3b8",
            fontWeight: isFloating ? 700 : 500,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left center" }}
          className="absolute left-0 top-0 text-sm sm:text-base pointer-events-none select-none whitespace-nowrap"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </motion.label>

        {/* Input or Textarea */}
        {multiline ? (
          <textarea
            required={required}
            value={value}
            rows={rows}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="peer w-full bg-transparent text-base sm:text-lg text-[#0b1330] focus:outline-none font-medium pt-1 pb-1 caret-[#4A6FCF] resize-none"
          />
        ) : (
          <input
            type={type}
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="peer w-full bg-transparent text-base sm:text-lg text-[#0b1330] focus:outline-none font-medium pt-1 pb-1 caret-[#4A6FCF]"
          />
        )}

        {/* Base underline */}
        <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-slate-200 rounded-full" />

        {/* Animated accent underline */}
        <motion.div
          initial={false}
          animate={{ scaleX: isFloating ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transformOrigin: "left",
            background: "linear-gradient(90deg, #4A6FCF 0%, #6b8dd6 100%)",
          }}
          className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full"
        />

        {/* Glowing dot */}
        <AnimatePresence>
          {focused && (
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -6 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 bottom-[-3px] w-2 h-2 rounded-full bg-[#4A6FCF]"
              style={{ boxShadow: "0 0 10px rgba(74, 111, 207, 0.7)" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Helper text */}
      {helper && (
        <motion.p
          initial={false}
          animate={{ opacity: isFloating ? 1 : 0.5, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs sm:text-sm text-slate-400 font-medium mt-1 leading-relaxed"
        >
          {helper}
        </motion.p>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   🔘 CHIP TOGGLE
═══════════════════════════════════════════════════════════════ */
const ChipToggle: React.FC<{
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ label, active, onClick }) => (
  <motion.button
    type="button"
    onClick={onClick}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={`relative overflow-hidden px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-300 cursor-pointer select-none ${
      active
        ? "border-[#4A6FCF] bg-[#4A6FCF] text-white"
        : "border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:text-[#0b1330]"
    }`}
  >
    <span className="relative z-10 flex items-center gap-1.5">
      <AnimatePresence mode="wait" initial={false}>
        {active && (
          <motion.span
            key="check"
            initial={{ scale: 0, width: 0, marginRight: 0 }}
            animate={{ scale: 1, width: "auto", marginRight: 0 }}
            exit={{ scale: 0, width: 0, marginRight: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="inline-flex overflow-hidden"
          >
            <Check className="w-3 h-3" strokeWidth={3.5} />
          </motion.span>
        )}
      </AnimatePresence>
      {label}
    </span>
  </motion.button>
);

/* ═══════════════════════════════════════════════════════════════
   🔘 SUBMIT
═══════════════════════════════════════════════════════════════ */
const SubmitButton: React.FC<{ submitting: boolean }> = ({ submitting }) => (
  <motion.button
    type="submit"
    disabled={submitting}
    whileHover={!submitting ? { scale: 1.03, y: -1 } : {}}
    whileTap={!submitting ? { scale: 0.97 } : {}}
    transition={{ type: "spring", stiffness: 400, damping: 22 }}
    className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-80 bg-[#0b1330] hover:bg-[#151c3a] text-white font-semibold text-sm px-8 py-3.5 min-w-[180px] transition-colors duration-300"
  >
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
    <span className="relative z-10 flex items-center gap-2">
      <AnimatePresence mode="wait" initial={false}>
        {submitting ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-2"
          >
            Submit
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  </motion.button>
);

/* ═══════════════════════════════════════════════════════════════
   🔘 DONE
═══════════════════════════════════════════════════════════════ */
const DoneButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <motion.button
    type="button"
    onClick={onClick}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 20 }}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    className="group inline-flex items-center gap-2 bg-[#0b1330] hover:bg-[#151c3a] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors cursor-pointer"
  >
    Done
    <ArrowRight
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
      strokeWidth={2.5}
    />
  </motion.button>
);

/* ═══════════════════════════════════════════════════════════════
   ✨ FLOATING LABEL TEXTAREA, for Project Details
═══════════════════════════════════════════════════════════════ */
const FloatingLabelTextarea: React.FC<{
  label: string;
  helper?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  rows?: number;
}> = ({ label, helper, value, onChange, required, rows = 4 }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const isFloating = focused || hasValue;

  return (
    <div className="w-full">
      <div className="relative pt-5 pb-1">
        {/* Floating label */}
        <motion.label
          initial={false}
          animate={{
            y: isFloating ? 0 : 20,
            scale: isFloating ? 0.85 : 1,
            color: focused ? "#4A6FCF" : isFloating ? "#0b1330" : "#94a3b8",
            fontWeight: isFloating ? 700 : 500,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left center" }}
          className="absolute left-0 top-0 text-sm sm:text-base pointer-events-none select-none whitespace-nowrap"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </motion.label>

        {/* Textarea */}
        <textarea
          required={required}
          value={value}
          rows={rows}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="peer w-full bg-transparent text-base sm:text-lg text-[#0b1330] focus:outline-none font-medium pt-1 pb-1 caret-[#4A6FCF] resize-none"
        />

        {/* Base underline */}
        <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-slate-200 rounded-full" />

        {/* Animated accent underline */}
        <motion.div
          initial={false}
          animate={{ scaleX: isFloating ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transformOrigin: "left",
            background: "linear-gradient(90deg, #4A6FCF 0%, #6b8dd6 100%)",
          }}
          className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full"
        />

        {/* Glowing dot */}
        <AnimatePresence>
          {focused && (
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -6 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 bottom-[-3px] w-2 h-2 rounded-full bg-[#4A6FCF]"
              style={{ boxShadow: "0 0 10px rgba(74, 111, 207, 0.7)" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Helper */}
      {helper && (
        <motion.p
          initial={false}
          animate={{ opacity: isFloating ? 1 : 0.5, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs sm:text-sm text-slate-400 font-medium mt-1 leading-relaxed"
        >
          {helper}
        </motion.p>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MAIN MODAL
═══════════════════════════════════════════════════════════════ */
export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Website"]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    budget: "",
    timeline: "",
    projectDetails: "",
    hearAbout: "",
  });

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

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 20) {
      if (!isScrolled) setIsScrolled(true);
    } else {
      if (isScrolled) setIsScrolled(false);
    }
  };

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const projectTypeOptions = [
    "Website",
    "Mobile App",
    "Portal Development",
    "UI/UX & Graphic Design",
    "Digital Marketing",
    "Business Automation",
    "Applied AI",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-end"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/55 backdrop-blur-xs z-40 cursor-pointer"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed bottom-0 z-50 bg-white text-[#0b1330] shadow-[0_-20px_80px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden font-sans transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled
                ? "inset-x-0 top-0 rounded-t-none"
                : "inset-x-0 sm:inset-x-6 xl:inset-x-[32px] top-[30px] sm:top-[60px] lg:top-[80px] rounded-t-[28px] sm:rounded-t-[44px]"
            }`}
          >
            <MagneticCloseButton onClick={onClose} />

            <div
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto pt-8 sm:pt-14 pb-16 sm:pb-24 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              <div className="max-w-[1080px] mx-auto px-4 sm:px-12 lg:px-[48px]">
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 sm:space-y-10 text-left"
                  >
                    {/* ── Headline ── */}
                    <div className="space-y-3 mb-8 sm:mb-14">
                      <h1 className="hero-h1 font-extrabold text-3xl sm:text-6xl lg:text-[104px] leading-[1.05] sm:leading-[0.98] tracking-tight text-left text-[#0b1330]">
                        Let&apos;s get started.
                      </h1>
                      <div className="pt-2 sm:pt-4 space-y-1 text-sm sm:text-xl">
                        <p className="font-bold text-[#0b1330]">
                          Tell us about your project. We&apos;ll respond within 24 hours.
                        </p>
                        <p className="text-slate-400 font-medium">
                          Or reach us directly by call or email.
                        </p>
                      </div>
                    </div>

                    {/* ── Section 1: Tell us about yourself ── */}
                    <div className="space-y-4 sm:space-y-6">
                      <p className="text-lg sm:text-2xl font-bold text-[#0b1330]">
                        Tell us about yourself
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-14">
                        <FloatingLabelField
                          label="Your name"
                          value={formData.name}
                          onChange={(v) =>
                            setFormData({ ...formData, name: v })
                          }
                          required
                        />
                        <FloatingLabelField
                          label="Company name"
                          helper="e.g. Widgets, Inc"
                          value={formData.company}
                          onChange={(v) =>
                            setFormData({ ...formData, company: v })
                          }
                        />
                      </div>
                    </div>

                    {/* ── Section 2: How shall we contact you? ── */}
                    <div className="space-y-4 sm:space-y-6 pt-3 sm:pt-6">
                      <p className="text-lg sm:text-2xl font-bold text-[#0b1330]">
                        How shall we contact you?
                        <span className="text-red-500 ml-1">*</span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-14">
                        <FloatingLabelField
                          label="Phone number"
                          type="tel"
                          value={formData.phone}
                          onChange={(v) =>
                            setFormData({ ...formData, phone: v })
                          }
                        />
                        <FloatingLabelField
                          label="Email address"
                          type="email"
                          value={formData.email}
                          onChange={(v) =>
                            setFormData({ ...formData, email: v })
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* ── Section 3: Type of project ── */}
                    <div className="space-y-3 pt-3 sm:pt-6">
                      <label className="block text-lg sm:text-2xl font-bold text-[#0b1330]">
                        Type of project
                      </label>
                      <p className="text-xs sm:text-base text-slate-400 font-medium">
                        Select all that may apply
                      </p>
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                        {projectTypeOptions.map((type) => (
                          <ChipToggle
                            key={type}
                            label={type}
                            active={selectedTypes.includes(type)}
                            onClick={() => toggleType(type)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* ── Section 4: Tell us about the project ── */}
                    <div className="space-y-3 pt-3 sm:pt-6">
                      <label className="block text-lg sm:text-2xl font-bold text-[#0b1330]">
                        Tell us about the project
                      </label>
                      <FloatingLabelTextarea
                        label="Let us know how we can help"
                        value={formData.projectDetails}
                        onChange={(v) =>
                          setFormData({ ...formData, projectDetails: v })
                        }
                        rows={4}
                      />
                    </div>

                    {/* ── Submit ── */}
                    <div className="pt-6 sm:pt-10 pb-6">
                      <SubmitButton submitting={submitting} />
                    </div>
                  </form>
                ) : (
                  /* ── Success State ── */
                  <div className="py-20 text-center space-y-7">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 14,
                        delay: 0.1,
                      }}
                      className="w-20 h-20 rounded-full bg-[#4A6FCF]/10 border-2 border-[#4A6FCF] flex items-center justify-center mx-auto text-[#4A6FCF]"
                    >
                      <CheckCircle2 className="w-12 h-12" strokeWidth={2} />
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.22 }}
                      className="font-extrabold text-3xl sm:text-4xl text-[#0b1330]"
                    >
                      Thank you!
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28 }}
                      className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed"
                    >
                      We have received your message. Our team will review your
                      project details and respond in one business day.
                    </motion.p>

                    <DoneButton onClick={handleReset} />
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