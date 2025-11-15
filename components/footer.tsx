export default function Footer() {
  return (
    <footer className="footer-bg py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-white/90">CommitAI</h2>
            <p className="text-white/60 mt-2 max-w-xs">
              AI-powered commit messages that help developers save time and write cleaner histories.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10">

            <div>
              <h3 className="text-white/80 font-medium mb-3">Product</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="/docs" className="hover:text-white/90 transition">Documentation</a></li>
                <li><a href="/pricing" className="hover:text-white/90 transition">Pricing</a></li>
                <li><a href="/changelog" className="hover:text-white/90 transition">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white/80 font-medium mb-3">Company</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="/about" className="hover:text-white/90 transition">About</a></li>
                <li><a href="/privacy" className="hover:text-white/90 transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white/90 transition">Terms of Service</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center text-sm text-white/50">
          © {new Date().getFullYear()} CommitAI — All rights reserved.
        </div>

      </div>
    </footer>
  );
}

