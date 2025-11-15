"use client";

import { Terminal, Sparkles, Info, CheckCircle } from "lucide-react";

export default function CommitUsagePage() {
  return (
    <div className="docs-bg min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="
          text-4xl sm:text-5xl font-semibold 
          bg-gradient-to-b from-white to-gray-300 
          text-transparent bg-clip-text
        ">
          Using CommitAI
        </h1>

        <p className="text-white/60 text-lg mt-4 max-w-2xl">
          Generate clean commit messages powered by AI—based on your actual git diff.
        </p>


        {/* Step 1: Stage changes */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white">1. Stage Your Changes</h2>

          <p className="text-white/60 mt-3">
            CommitAI analyzes your staged changes.  
            You must stage files before running the command:
          </p>

          <CodeBlock>git add .</CodeBlock>
        </div>


        {/* Step 2: Run commitai commit */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white flex items-center gap-2">
            2. Generate Commit Messages
          </h2>

          <p className="text-white/60 mt-3">
            Run the following command in your project:
          </p>

          <CodeBlock>commitai commit</CodeBlock>

          <p className="text-white/60 mt-4">
            CommitAI reads your <span className="text-white">git diff</span>, sends it to the API,  
            and presents you with 3 clean commit suggestions.
          </p>
        </div>


        {/* Example Output */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-xl font-medium text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-300" /> Example Output
          </h2>

          <pre className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg text-white text-sm leading-relaxed whitespace-pre-wrap">
{`🚀 Generating AI-powered commit message...

💡 Commit Suggestions:

1. fix(api): improve error msg when token is missing
2. fix(api): improve error message when token is missing. Helps with debugging.
3. fix(api): improve error messaging for missing authentication token to aid debugging.

✔ Select your commit message: fix(api): improve error msg when token is missing

[main 3765f23] fix(api): improve error msg when token is missing
 1 file changed, 2 insertions(+), 2 deletions(-)
`}
          </pre>

          <p className="text-white/60 text-sm mt-4">
            The CLI automatically commits the selected message.
          </p>
        </div>


        {/* Behind the scenes */}
        <div className="mt-12 p-6 rounded-xl bg-black border border-white/10 shadow-xl">
          <h2 className="text-2xl font-medium text-white">How It Works Behind the Scenes</h2>

          <ul className="space-y-4 text-white/70 leading-relaxed mt-4">
            <li>• CLI reads your staged git diff.</li>
            <li>• Sends diff + file list to CommitAI backend.</li>
            <li>• Backend generates structured JSON commit messages.</li>
            <li>• You choose one message in the terminal.</li>
            <li>• CLI runs: <span className="text-white">git commit -m "..."</span></li>
          </ul>
        </div>


        {/* Tips */}
        <div className="mt-12 flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
          <Info className="w-5 h-5 text-blue-300 mt-1" />
          <p className="text-white/70 text-sm">
            Tip: Use <span className="text-white">git add -p</span> for partial staging to get cleaner, more focused commit messages.
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
