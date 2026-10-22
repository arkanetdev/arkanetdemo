"use client";

import React from "react";
import { Bot, ArrowRight } from "lucide-react";

interface ChatbotHighlightProps {
  onOpenBooking: () => void;
}

export const ChatbotHighlight: React.FC<ChatbotHighlightProps> = ({ onOpenBooking }) => {
  return (
    <section id="ai-chatbot" className="py-16 bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy via-navy-mid to-navy-dark text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-navy-mid relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-blue-300 mb-4">
              <Bot className="w-4 h-4 text-blue-400" />
              <span>Proprietary AI Platform</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
              AI Chatbot &amp; Virtual Agents
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
  );
};
