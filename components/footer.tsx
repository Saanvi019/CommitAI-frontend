export default function Footer() {
  return (
    <footer className="footer-bg py-10 mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white/90">CommitAI</h2>
            <p className="text-white/60 text-sm mt-1">
              AI-powered commit messages for developers.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="/docs" className="text-white/70 hover:text-white/90 transition">
              Docs
            </a>

            <a 
              href="https://github.com/Saanvi019/CommitAI-CLI"
              target="_blank"
              className="text-white/70 hover:text-white/90 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} CommitAI — Built by Rohan & Saanvi.
        </div>

      </div>
    </footer>
  );
}


