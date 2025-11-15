"use client";

import { Info, Lock } from "lucide-react";

export default function ConfigPage() {
  return (
    <div className="docs-bg min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1
          className="
            text-4xl sm:text-5xl font-semibold 
            bg-gradient-to-b from-white to-gray-300 
            text-transparent bg-clip-text
          "
        >
          Usage Limits
        </h1>

        <p className="text-white/60 text-lg mt-4 max-w-2xl">
          CommitAI is free for everyone. Each user gets a fair daily usage limit to prevent abuse.
        </p>


        {/* Free Usage */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white">Daily Usage Limit</h2>

          <ul className="space-y-3 mt-4 text-white/70 leading-relaxed">
            <li>• <span className="text-white font-medium">30 AI commits per day</span></li>
            <li>• Resets automatically at midnight (IST)</li>
            <li>• No login required on website — only GitHub login via CLI</li>
            <li>• No payment, no subscriptions, no Pro/Free plans</li>
          </ul>

          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-300 mt-1" />
            <p className="text-white/70 text-sm">
              Usage is tracked securely by your GitHub ID to prevent overuse.
            </p>
          </div>
        </div>


        {/* How usage is counted */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white">How Usage Is Counted</h2>

          <ul className="space-y-4 mt-4 text-white/70 leading-relaxed">
            <li>• Every time you run <span className="text-white font-medium">commitai commit</span>, it counts as 1 usage.</li>
            <li>• If no changes are staged, the request does NOT count.</li>
            <li>• If CommitAI fails to generate suggestions, it does NOT count.</li>
            <li>• Usage is tied to your GitHub account across all devices.</li>
          </ul>

          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-white/70 text-sm">
              The CLI stores your token in:  
              <span className="text-white block mt-1">~/.commitai.json</span>
            </p>
          </div>
        </div>


        {/* Limit Reached */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-red-400" /> When You Hit the Daily Limit
          </h2>

          <p className="text-white/60 mt-4">
            When you use all 30 commits, the CLI shows:
          </p>

          <pre className="
            bg-white/5 border border-white/10 rounded-lg p-4 
            text-white text-sm mt-4 whitespace-pre-wrap
          ">
{`⛔ Daily limit reached (30/30)
Please try again tomorrow.`}
          </pre>

          <p className="text-white/60 text-sm mt-4">
            Limits reset automatically every midnight — no action required.
          </p>
        </div>


        {/* No Billing */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white">Billing</h2>

          <p className="text-white/60 mt-4">
            CommitAI is completely free. There are:
          </p>

          <ul className="space-y-3 text-white/70 mt-4 leading-relaxed">
            <li>• No Pro plans</li>
            <li>• No payment system</li>
            <li>• No credit card required</li>
            <li>• No hidden upgrades</li>
          </ul>

          <p className="text-white/60 mt-6">
            The daily limit exists only to protect the service from abuse.
          </p>
        </div>

      </div>
    </div>
  );
}

