"use client";

import { Info, Zap, Lock, Coins } from "lucide-react";

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
          Usage & Billing
        </h1>

        <p className="text-white/60 text-lg mt-4 max-w-2xl">
          Learn how CommitAI counts your daily commits, how limits work, and how to upgrade.
        </p>

        
        {/* Free Plan */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white">Free Plan</h2>

          <ul className="space-y-3 mt-4 text-white/70 leading-relaxed">
            <li>• <span className="text-white font-medium">15 AI commits per day</span></li>
            <li>• Resets automatically every 24 hours (midnight IST)</li>
            <li>• Full CLI access</li>
            <li>• No credit card required</li>
          </ul>

          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-300 mt-1" />
            <p className="text-white/70 text-sm">
              The daily limit resets automatically — no manual action needed.
            </p>
          </div>
        </div>


        {/* Pro Plan */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-300" /> CommitAI Pro (₹99/month)
          </h2>

          <ul className="space-y-3 mt-4 text-white/70 leading-relaxed">
            <li>• <span className="text-white font-medium">Unlimited AI commits</span></li>
            <li>• Faster generation</li>
            <li>• Priority API access</li>
            <li>• No daily restrictions</li>
          </ul>

          <a
            href="/upgrade"
            className="
              inline-block mt-6 px-6 py-3 rounded-lg
              bg-yellow-400 text-black font-semibold
              hover:bg-yellow-300 transition
            "
          >
            Upgrade to Pro — ₹99/month
          </a>
        </div>


        {/* How Usage is Counted */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white">How Usage is Counted</h2>

          <ul className="space-y-4 mt-4 text-white/70 leading-relaxed">
            <li>• Every successful AI-generated commit counts as <span className="text-white">1 usage</span>.</li>
            <li>• If you cancel before selecting a message, it does NOT count.</li>
            <li>• Usage is tied to your GitHub account.</li>
          </ul>

          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-white/70 text-sm">
              The CLI stores your token in:  
              <span className="text-white block mt-1">~/.commitai/config.json</span>
            </p>
          </div>
        </div>


        {/* What happens when limit is reached */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-red-400" /> When You Hit the Daily Limit
          </h2>

          <p className="text-white/60 mt-4">
            When your 15 commits are used, CommitAI CLI shows:
          </p>

          <pre className="
            bg-white/5 border border-white/10 rounded-lg p-4 
            text-white text-sm mt-4 whitespace-pre-wrap
          ">
{`⛔ Daily limit reached (15/15)
Upgrade to CommitAI Pro (₹99/month) to continue.
https://commitai.dev/upgrade`}
          </pre>

          <p className="text-white/60 text-sm mt-4">
            Upgrading instantly unlocks unlimited usage.
          </p>
        </div>


        {/* Billing */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white flex items-center gap-2">
            <Coins className="w-5 h-5 text-green-300" /> Billing
          </h2>

          <p className="text-white/60 mt-4">
            CommitAI uses secure, recurring monthly payments powered by Stripe.
          </p>

          <ul className="space-y-3 text-white/70 mt-4 leading-relaxed">
            <li>• ₹99/month, cancel anytime</li>
            <li>• Refunds handled via Stripe support</li>
            <li>• Switching between plans happens instantly</li>
          </ul>
        </div>

      </div>
    </div>
  );
}


/* Shared Components */
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
