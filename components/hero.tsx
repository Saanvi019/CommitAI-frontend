'use client'

export default function Hero() {
  return (
    <div
  className="
    hero-bg
    relative min-h-screen w-full
    flex flex-col items-center justify-center text-center px-6
  "
>
      
      {/* ---- Starfield Animation ---- */}
      <div className="star-bg pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      {/* ---- Badge ---- */}
      <div className="mb-6 inline-flex items-center rounded-full border 
                      border-white/10 bg-white/5 px-4 py-1 text-sm 
                      text-white/80 backdrop-blur-sm">
        CommitAI — AI-powered Git commits  
        <span className="ml-2 font-semibold text-white/90">Try the CLI →</span>
      </div>

      {/* ---- Heading ---- */}
         <h1 className="
  bg-gradient-to-b from-white to-gray-500
  bg-clip-text text-transparent
  py-6
  text-5xl sm:text-6xl md:text-7xl lg:text-8xl
  font-semibold leading-none tracking-tight
">
  AI That Writes Your<br className="hidden md:block"/> Commit Messages.
</h1>



      {/* ---- Subtext ---- */}
      <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
        CommitAI analyzes your staged changes and generates clean,
        conventional commit messages automatically. No API keys. No setup. Just 
        <span className="font-semibold text-white/90"> commit smarter</span>.
      </p>

      {/* ---- CTA Buttons ---- */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <a
          href="#get-started"
          className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow 
                     hover:bg-white/90 transition"
        >
          Get Started →
        </a>

        <a
          href="#docs"
          className="text-sm font-semibold text-white/70 hover:text-white/90 transition"
        >
          View Docs →
        </a>
      </div>

    </div>
  );
}
