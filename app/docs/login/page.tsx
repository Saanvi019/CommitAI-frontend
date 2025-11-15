"use client";

import { Terminal, Github, Info } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="docs-bg min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="
          text-4xl sm:text-5xl font-semibold 
          bg-gradient-to-b from-white to-gray-300 
          text-transparent bg-clip-text
        ">
          Authentication
        </h1>

        <p className="text-white/60 text-lg mt-4 max-w-2xl">
          CommitAI uses GitHub login to authenticate your CLI securely using OAuth.
        </p>


        {/* Login Box */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
            <Github className="w-5 h-5 text-cyan-400" /> Login with GitHub
          </h2>

          <CodeBlock>
            commitai login
          </CodeBlock>

          <p className="text-white/60 text-sm mt-4">
            This command opens the GitHub OAuth login screen in your browser. 
            After you approve access, CommitAI stores your auth token locally.
          </p>
        </div>


        {/* How it works */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white mb-4">
            How CommitAI Login Works
          </h2>

          <ul className="space-y-4 text-white/70 leading-relaxed">
            <li>
              • <span className="text-white">commitai login</span> opens GitHub OAuth.
            </li>
            <li>
              • After approval, GitHub redirects to:
              <div className="mt-2 pl-4 text-white">http://localhost:9900/callback</div>
            </li>
            <li>
              • The CLI receives your temporary OAuth code.
            </li>
            <li>
              • The backend exchanges it for a JWT.
            </li>
            <li>
              • CLI saves the token here:
              <div className="mt-2 pl-4 text-white">~/.commitai/config.json</div>
            </li>
          </ul>
        </div>

        {/* Troubleshooting */}
        <div className="mt-12 flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
          <Info className="w-5 h-5 text-blue-300 mt-1" />
          <p className="text-white/70 text-sm">
            If login doesn't open automatically, try running:
            <span className="text-white block mt-1">commitai login --manual</span>
          </p>
        </div>

      </div>
    </div>
  );
}


/* Components */
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
