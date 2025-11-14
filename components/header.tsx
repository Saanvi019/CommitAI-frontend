"use client";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
   <header
  className="
    fixed top-0 left-0 w-full z-[999]
    bg-black/40 backdrop-blur-xl
    border-b border-white/10
  "
>
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <h1 className="text-lg font-semibold tracking-tight text-white/90">
      CommitAI
    </h1>

    <nav className="flex items-center gap-8 text-sm font-medium">
      <a href="/docs" className="text-white/70 hover:text-white/90 transition">
        Docs
      </a>
      <a href="/pricing" className="text-white/70 hover:text-white/90 transition">
        Pricing
      </a>

      <button
        onClick={() => {
          window.location.href =
            "http://localhost:4000/api/auth/github?callback=http://localhost:3000/callback";
        }}
        className="text-white/90 hover:text-white font-semibold transition"
      >
        Login →
      </button>
    </nav>
  </div>
</header>

  );
}
