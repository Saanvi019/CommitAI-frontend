"use client";

import { Terminal, Info, CheckCircle } from "lucide-react";

export default function InstallPage() {
  return (
    <div className="docs-bg min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="
          text-4xl sm:text-5xl font-semibold 
          bg-gradient-to-b from-white to-gray-300 
          text-transparent bg-clip-text
        ">
          Installation
        </h1>

        <p className="text-white/60 text-lg mt-4 max-w-2xl">
          Install CommitAI globally and start generating clean commit messages instantly.
        </p>


        {/* Requirements */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white mb-4">
            Requirements
          </h2>

          <ul className="space-y-3 text-white/70">
            <li>• Node.js 18 or later</li>
            <li>• Git installed</li>
            <li>• macOS, Linux, or Windows supported</li>
          </ul>
        </div>


        {/* Install Command */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" /> Install the CLI
          </h2>

          <CodeBlock>
            npm install -g commitai
          </CodeBlock>

          <p className="text-white/50 text-sm mt-4">
            This installs CommitAI globally so the <span className="text-white">commitai</span> command
            can be used in any repository.
          </p>
        </div>


        {/* Verify Install */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" /> Verify Installation
          </h2>

          <CodeBlock>
            commitai --version
          </CodeBlock>

          <p className="text-white/50 text-sm mt-4">
            If you see a version number, your installation is working.
          </p>
        </div>


        {/* Note */}
        <div className="mt-12 flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
          <Info className="w-5 h-5 text-blue-300 mt-1" />
          <p className="text-white/70 text-sm">
            CommitAI needs Git installed because it reads your staged changes using <span className="text-white">git diff</span>.
          </p>
        </div>

      </div>
    </div>
  );
}


/* --- Components --- */

function CodeBlock({ children }: any) {
  return (
    <pre className="
      bg-white/5 border border-white/10 rounded-lg p-4 
      text-white text-sm overflow-x-auto
    ">
      {children}
    </pre>
  );
}
