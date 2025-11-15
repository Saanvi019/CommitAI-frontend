"use client";

import { GitBranch, FileDiff, Wand2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="how-bg py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2
            className="
              text-4xl sm:text-5xl font-semibold 
              bg-gradient-to-b from-white to-gray-400 
              text-transparent bg-clip-text
            "
          >
            How CommitAI Works
          </h2>

          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            CommitAI fits perfectly into your existing git workflow. No setup.
            No configuration. Just run one command and get clean commit messages.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 sm:grid-cols-3">

          {/* Step 1 */}
          <StepCard
            icon={<GitBranch className="h-10 w-10 text-white/90" />}
            step="1"
            title="Stage Your Changes"
            desc="Write code as usual and run 'git add .' to stage your updates. CommitAI analyzes your exact diff."
          />

          {/* Step 2 */}
          <StepCard
            icon={<FileDiff className="h-10 w-10 text-white/90" />}
            step="2"
            title="Run CommitAI"
            desc="Run 'commitai commit'. The CLI reads your diffs, understands what changed, and prepares a message."
          />

          {/* Step 3 */}
          <StepCard
            icon={<Wand2 className="h-10 w-10 text-white/90" />}
            step="3"
            title="Get Perfect Commit Messages"
            desc="CommitAI generates clean, conventional, meaningful commits — instantly, with zero effort."
          />

        </div>
      </div>
    </section>
  );
}

function StepCard({ icon, step, title, desc }: any) {
  return (
    <div
      className="
        p-8 rounded-xl 
        bg-white/5 backdrop-blur-sm 
        border border-white/10 
        hover:bg-white/10 transition 
        text-center
      "
    >
      <div className="mx-auto mb-6">{icon}</div>

      <p className="text-white/40 text-sm tracking-wider mb-2">
        STEP {step}
      </p>

      <h3 className="text-xl font-semibold text-white/90 mb-3">
        {title}
      </h3>

      <p className="text-white/60 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
