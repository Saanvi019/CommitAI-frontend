"use client";
 import Link from "next/link";

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
        {/* Logo */}
       

<h1 className="text-lg font-semibold tracking-tight text-white/90">
  <Link href="/" className="hover:text-white transition">
    CommitAI
  </Link>
</h1>


        {/* Nav */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a
            href="/docs"
            className="text-white/70 hover:text-white/90 transition"
          >
            Docs
          </a>

          <a
            href="/#features"
            className="text-white/70 hover:text-white/90 transition"
          >
            Features
          </a>

          <a
            href="/docs/install"
            className="text-white/70 hover:text-white/90 transition"
          >
            Install
          </a>
        </nav>
      </div>
    </header>
  );
}

