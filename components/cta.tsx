"use client";

import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="cta-section px-6 py-40 relative">

      <div className="cta-card mx-auto max-w-7xl text-center px-10 py-20 rounded-2xl min-h-[450px]">

        <h2 className="
          text-4xl sm:text-5xl font-semibold 
          bg-gradient-to-b from-white to-gray-500 
          text-transparent bg-clip-text tracking-tight
        ">
          Ship Cleaner Commits.
          <br />
          Work Faster. Stay in Flow.
        </h2>

        <p className="
          mt-6 text-white/60 text-lg max-w-2xl mx-auto 
          leading-relaxed
        ">
          CommitAI removes the friction of writing commit messages manually.  
          Start using AI-powered commits today — no configuration, no API key required.
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">

          <a
            href="/signup"
            className="
              inline-flex items-center gap-2 px-6 py-3
              text-black font-semibold text-sm rounded-lg
              bg-amber-800 hover:bg-amber-300 transition 
              shadow-[0_0_25px_rgba(0,255,255,0.15)]
            "
          >
            <Zap className="w-4 h-4 " />
            Start Free
          </a>

          <a
            href="/docs"
            className="
              inline-flex items-center gap-2 px-6 py-3
              text-white/80 font-semibold text-sm rounded-lg
              border border-white/15 hover:border-white/30 
              hover:bg-white/10 transition
            "
          >
            Read the Docs
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>
      </div>
    </section>
  );
}
