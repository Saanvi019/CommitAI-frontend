"use client";

import { Terminal, Timer, Brain, GitCommit, Rocket, Wand2 } from "lucide-react";

export default function FeaturesSection() {
  return (
<section id="features" className="features-bg py-32 px-6">

      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="
          text-4xl sm:text-5xl font-semibold 
          bg-gradient-to-b from-white to-gray-400 
          text-transparent bg-clip-text
        ">
          Stop Wasting Time Writing Commit Messages
        </h2>

        <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
          CommitAI removes the most boring part of development — thinking about commit messages.
          Just install it once and it writes clean, meaningful commits for you automatically.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        <FeatureCard
          icon={<GitCommit className="w-6 h-6 text-white/90" />}
          title="No More Manual Commit Messages"
          description="You don’t have to stop coding to think about what to write. CommitAI analyzes your changes and writes the perfect commit message for you."
        />

        <FeatureCard
          icon={<Brain className="w-6 h-6 text-white/90" />}
          title="Understands Your Code Changes"
          description="It reads your git diff, understands the actual modifications, and generates clear, conventional commit messages that make sense."
        />

        <FeatureCard
          icon={<Terminal className="w-6 h-6 text-white/90" />}
          title="Just Run a Simple Terminal Command"
          description="Install using npm, run one command like 'commitai commit', and you’re done. No configuration. No setup."
        />

        <FeatureCard
          icon={<Timer className="w-6 h-6 text-white/90" />}
          title="Saves Minutes on Every Commit"
          description="No more breaking your focus trying to summarize your work. CommitAI saves hours every week, especially on large projects."
        />

        <FeatureCard
          icon={<Wand2 className="w-6 h-6 text-white/90" />}
          title="Generates Clean, Professional Commits"
          description="Stop writing random commit messages like 'fix stuff'. CommitAI creates clean, readable messages that improve your project history."
        />

        <FeatureCard
          icon={<Rocket className="w-6 h-6 text-white/90" />}
          title="Perfect for Solo Devs & Teams"
          description="Consistent commit messages make collaboration easier. Your team members instantly understand what changed and why."
        />

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div
      className="
        p-6 rounded-xl 
        bg-white/5 backdrop-blur-sm 
        border border-white/10 
        hover:bg-white/10 transition
      "
    >
      <div className="mb-4">{icon}</div>

      <h3 className="text-lg font-semibold text-white/90">{title}</h3>

      <p className="text-white/60 text-sm mt-2 leading-relaxed">{description}</p>
    </div>
  );
}
