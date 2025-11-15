"use client";

import { AlertTriangle, Terminal, RefreshCw, Info } from "lucide-react";

export default function TroubleshootingPage() {
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
          Troubleshooting
        </h1>

        <p className="text-white/60 text-lg mt-4 max-w-2xl">
          Common issues and how to fix them when using CommitAI.
        </p>


        {/* SECTION 1: Git not installed */}
        <Section title="Git is not installed" icon={<AlertTriangle className="text-red-400" />}>
          <p className="text-white/60">
            CommitAI uses <span className="text-white">git diff</span> to read your changes.
            If Git is missing, you will see:
          </p>

          <CodeBlock>git: command not found</CodeBlock>

          <p className="text-white/60 mt-4">Install Git:</p>

          <ul className="text-white/70 mt-3 space-y-2">
            <li>• macOS: <span className="text-white">brew install git</span></li>
            <li>• Ubuntu: <span className="text-white">sudo apt install git</span></li>
            <li>• Windows: Install Git from <span className="text-white">git-scm.com</span></li>
          </ul>
        </Section>


        {/* SECTION 2: No staged changes */}
        <Section title="No staged changes detected" icon={<Terminal className="text-yellow-300" />}>
          <p className="text-white/60">If you run:</p>

          <CodeBlock>commitai commit</CodeBlock>

          <p className="text-white/60 mt-4">And see:</p>

          <CodeBlock>No staged changes found</CodeBlock>

          <p className="text-white/60 mt-4">Make sure you stage your files first:</p>

          <CodeBlock>git add .</CodeBlock>
        </Section>


        {/* SECTION 3: Login not working */}
        <Section title="GitHub login doesn't open" icon={<RefreshCw className="text-blue-300" />}>
          <p className="text-white/60">
            Sometimes browsers block local redirects. Try manual login:
          </p>

          <CodeBlock>commitai login --manual</CodeBlock>

          <p className="text-white/60 mt-4">
            This prints a URL you can open manually in your browser.
          </p>
        </Section>


        {/* SECTION 4: Localhost callback blocked */}
        <Section title="OAuth callback not received" icon={<AlertTriangle className="text-red-400" />}>
          <p className="text-white/60">
            CommitAI listens on:
            <span className="text-white block mt-1">http://localhost:9900/callback</span>
          </p>

          <p className="text-white/60 mt-4">If blocked:</p>

          <ul className="text-white/70 space-y-2 mt-2">
            <li>• Check if another app is using port 9900</li>
            <li>• Disable firewall temporarily</li>
            <li>• Retry login:</li>
          </ul>

          <CodeBlock>commitai login</CodeBlock>
        </Section>


        {/* SECTION 5: Token expired */}
        <Section title="Token expired or invalid" icon={<AlertTriangle className="text-orange-400" />}>
          <p className="text-white/60">If the CLI prints:</p>

          <CodeBlock>Authentication token expired</CodeBlock>

          <p className="text-white/60 mt-4">
            Just login again:
          </p>

          <CodeBlock>commitai login</CodeBlock>
        </Section>


        {/* SECTION 6: Rate limit reached */}
        <Section title="Daily limit reached" icon={<Info className="text-yellow-300" />}>
          <p className="text-white/60">
            CommitAI allows <span className="text-white">30 commits per day</span>.
          </p>

          <p className="text-white/60 mt-4">When your limit is reached:</p>

          <CodeBlock>
{`⛔ Daily limit reached (30/30)
Please try again tomorrow.`}
          </CodeBlock>

          <p className="text-white/60 text-sm mt-4">
            The limit resets automatically at midnight.
          </p>
        </Section>


        {/* SECTION 7: API unreachable */}
        <Section title="Cannot reach CommitAI servers" icon={<AlertTriangle className="text-red-400" />}>
          <p className="text-white/60">
            Check your internet connection or try again in a few seconds.
          </p>

          <p className="text-white/60 mt-4">
            You may also see:
          </p>

          <CodeBlock>Failed to reach CommitAI API</CodeBlock>

          <p className="text-white/60 mt-4">This usually resolves quickly.</p>
        </Section>


        {/* SECTION 8: Very large diffs */}
        <Section title="Diff too large" icon={<Info className="text-blue-400" />}>
          <p className="text-white/60">
            CommitAI rejects diffs over 200 KB to avoid extremely large model requests.
          </p>

          <p className="text-white/60 mt-4">Fix:</p>

          <ul className="text-white/70 space-y-2 mt-2">
            <li>• Stage smaller chunks using:</li>
          </ul>

          <CodeBlock>git add -p</CodeBlock>
        </Section>

      </div>
    </div>
  );
}


/* COMPONENTS */
function Section({ title, icon, children }: any) {
  return (
    <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-2xl font-medium text-white">{title}</h2>
      </div>
      <div className="text-white/70 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ children }: any) {
  return (
    <pre className="
      bg-white/5 border border-white/10 rounded-lg p-4 
      text-white text-sm whitespace-pre-wrap overflow-x-auto
    ">
      {children}
    </pre>
  );
}
