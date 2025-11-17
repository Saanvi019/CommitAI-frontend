"use client";

import { Terminal, ChevronRight, Github, BookOpen } from "lucide-react";
import Link from "next/link";

export default function DocsHome() {
  return (
    <div className="docs-bg min-h-screen px-6 py-24">

      <div className="max-w-4xl mx-auto">

        {/* Top Intro */}
        <h1 className="
          text-4xl sm:text-6xl font-semibold 
          bg-gradient-to-b from-white to-gray-300 
          text-transparent bg-clip-text
        ">
          CommitAI Documentation
        </h1>

        <p className="text-white/60 text-lg mt-4 max-w-2xl leading-relaxed">
          Learn how to install, authenticate, and use CommitAI in your development workflow.
        </p>


        {/* Quick Install Box */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" /> Quick Start
          </h2>

          <div className="space-y-6">

            <CodeBlock label="Install CLI">
             npm install -g @rohaavi/commitai
            </CodeBlock>

            <CodeBlock label="Login with GitHub">
              commitai login
            </CodeBlock>

            <CodeBlock label="Generate Commit Messages">
              commitai commit
            </CodeBlock>

          </div>
        </div>


        {/* Section Links */}
        <div className="mt-16 space-y-4">

          <SectionLink title="Installation" href="/docs/install" />
          <SectionLink title="Authentication" href="/docs/login" />
          <SectionLink title="Using CommitAI" href="/docs/commit" />
          <SectionLink title="Configuration & API Key" href="/docs/config" />
          <SectionLink title="Troubleshooting" href="/docs/troubleshooting" />

        </div>
      </div>
    </div>
  );
}

function SectionLink({ title, href }: any) {
  return (
    <Link
      href={href}
      className="
        flex items-center justify-between
        bg-white/5 hover:bg-white/10 transition
        border border-white/10
        rounded-lg p-4 text-white
      "
    >
      <span className="font-medium">{title}</span>
      <ChevronRight className="w-5 h-5 text-white/40" />
    </Link>
  );
}

function CodeBlock({ children, label }: any) {
  return (
    <div>
      <div className="text-white/40 text-sm mb-1">{label}</div>
      <pre className="bg-white/5 border border-white/10 rounded-lg p-4 text-white text-sm overflow-x-auto">
        {children}
      </pre>
    </div>
  );
}
