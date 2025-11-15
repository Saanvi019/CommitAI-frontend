"use client";

import { useState } from "react";
import { TerminalSquare, RotateCcw } from "lucide-react";

export default function CLIDemo() {
  const [replayKey, setReplayKey] = useState(0);

  const replay = () => {
    setReplayKey(prev => prev + 1);
  };

  return (
    <section className="cli-bg relative px-6 pb-20">
      <div className="section-wave"></div>

      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-semibold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
          See CommitAI in Action
        </h2>
        <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto mb-10">
          A real example of CommitAI generating commit messages inside your project.
        </p>

        {/* Replay Button */}
        <button
          onClick={replay}
          className="
            inline-flex items-center gap-2 px-4 py-2 
            bg-white/10 hover:bg-white/20 
            text-white text-sm font-medium 
            border border-white/10 rounded-lg 
            backdrop-blur-md transition
          "
        >
          <RotateCcw className="w-4 h-4" />
          Replay Animation
        </button>
      </div>

      {/* Terminal */}
      <AnimatedTerminal key={replayKey} />
    </section>
  );
}

function AnimatedTerminal() {
  return (
    <div className="terminal-bg terminal-glow max-w-4xl mx-auto relative z-10 shadow-2xl">

      {/* Header */}
      <div className="terminal-header">
        <div className="terminal-dot t-red"></div>
        <div className="terminal-dot t-yellow"></div>
        <div className="terminal-dot t-green"></div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm text-white/80 leading-relaxed">

        <div className="flex items-center gap-2 text-white/50 mb-4">
          <TerminalSquare className="w-4 h-4" />
          <span>~/commit-ai</span>
        </div>

        {/* Typing animation */}
        <div className="typewriter mb-4 text-white">
          $ commitai login
        </div>

        <div className="fade-line delay-1 text-yellow-300">
          🔑 Opening GitHub login<span className="loading-dots"></span>
        </div>

        <div className="fade-line delay-2 text-yellow-300">
          ⏳ Waiting for GitHub login<span className="loading-dots"></span>
        </div>

        <div className="fade-line delay-3 text-green-400 mb-6">
          ✅ Login successful!
        </div>

        <div className="fade-line delay-4 text-white mb-4">
          $ commitai commit
        </div>

        <div className="fade-line delay-5 text-cyan-300 mb-4">
          🚀 Generating AI-powered commit message<span className="loading-dots"></span>
        </div>

        <div className="fade-line delay-6 text-white/70 mb-3">
          💡 Commit Suggestions:
        </div>

        {/* Suggestions */}
        <div className="space-y-3 mb-6">
          <div className="suggestion-card delay-6 p-3 rounded-lg bg-white/5 border border-white/10">
            1. fix(ai): improve error msg when token is missing
          </div>

          <div className="suggestion-card delay-7 p-3 rounded-lg bg-white/5 border border-white/10">
            2. fix(ai): improve error message when token is missing. Helps with debugging.
          </div>

          <div className="suggestion-card delay-7 p-3 rounded-lg bg-white/5 border border-white/10">
            3. fix(ai): enhance error messaging for missing authentication token to aid debugging.
          </div>
        </div>

        <div className="fade-line delay-7 text-white/90 mb-4">
          ✔ Select your commit message: <span className="text-cyan-300">fix(ai): improve error msg when token is missing</span>
        </div>

        <div className="fade-line delay-7 text-green-400 mb-2">
          [main 3765f23] fix(ai): improve error msg when token is missing
        </div>

        <div className="fade-line delay-7 text-white/60">
          1 file changed, 2 insertions(+), 2 deletions(-)
        </div>
      </div>
    </div>
  );
}

