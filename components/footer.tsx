export default function Footer() {
  return (
    <footer
      className="
        border-t border-white/10 
        bg-black/20 backdrop-blur-xl 
        text-white/70 
        mt-20
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Logo + Tagline */}
          <div>
            <h2 className="text-lg font-semibold text-white/90 tracking-tight">
              CommitAI
            </h2>
            <p className="text-sm text-white/50 mt-1">
              AI-powered commit messages for developers.
            </p>
          </div>

          {/* Footer Nav */}
          <nav className="flex items-center gap-8 text-sm font-medium">
            <a
              href="/docs"
              className="hover:text-white/90 transition"
            >
              Docs
            </a>
            <a
              href="/pricing"
              className="hover:text-white/90 transition"
            >
              Pricing
            </a>
            <a
              href="https://github.com"
              className="hover:text-white/90 transition"
            >
              GitHub →
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/50 gap-4">

          <p>© {new Date().getFullYear()} CommitAI. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white/80 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white/80 transition">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
