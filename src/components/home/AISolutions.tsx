"use client";

import React from "react";
import { Bot, ArrowRight, Brain, Database, Zap, Code2, Users, Sparkles } from "lucide-react";
import { AI_CAPABILITIES } from "@/lib/data";

interface AISolutionsProps {
  onOpenBooking: () => void;
}

const AI_CAPABILITY_ICONS: Record<string, React.ReactNode> = {
  "Technology Strategy & Roadmapping": <Brain className="w-5 h-5" />,
  "Applied AI & Machine Learning": <Sparkles className="w-5 h-5" />,
  "Conversational AI & Virtual Agents": <Bot className="w-5 h-5" />,
  "Data Engineering & Analytics": <Database className="w-5 h-5" />,
  "Legacy System Modernisation": <Zap className="w-5 h-5" />,
  "Product & UI/UX Design": <Users className="w-5 h-5" />,
  "Full-Stack App Development": <Code2 className="w-5 h-5" />,
};

export const AISolutions: React.FC<AISolutionsProps> = ({ onOpenBooking }) => {
  return (
    <>
      <section id="ai-capabilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-subtle border border-borderline text-xs font-semibold text-navy mb-4">
              AI Solutions
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
              AI Solutions Built for Real Work
            </h2>
            <p className="text-lg text-navy-muted max-w-2xl mx-auto leading-relaxed">
              From custom ML models to conversational agents that actually understand context. We design, build, and deploy AI systems that integrate with your stack, learn from your data, and deliver measurable ROI, not demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {AI_CAPABILITIES.map((cap, idx) => {
              const Icon = AI_CAPABILITY_ICONS[cap.title] || <Sparkles className="w-5 h-5" />;
              return (
                <div
                  key={idx}
                  className="bg-white border border-borderline hover:border-navy-mid rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy-bright/10 flex items-center justify-center text-navy-bright mb-4">
                    {Icon}
                  </div>
                  <div className="text-xs font-bold text-navy-bright uppercase tracking-wider mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ai-chatbot" className="py-16 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy via-navy-mid to-navy-dark text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-navy-mid relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-blue-300 mb-4">
                <Bot className="w-4 h-4 text-blue-400" />
                <span>Proprietary AI Platform</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                AI Chatbot & Virtual Agents
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                Arkanet's chatbot platform handles real conversations, not decision trees. Built on modern language models, it understands intent, holds context, and hands off to a human only when it genuinely needs to. Deploy it on your website, WhatsApp, or as an internal helpdesk assistant, and cut response times without growing your support headcount.
              </p>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-navy-bright hover:bg-navy-hover text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:-translate-y-0.5"
              >
                Request Chatbot Demo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};