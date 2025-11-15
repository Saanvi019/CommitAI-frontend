"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Book, Download, Key, Terminal, Settings, HelpCircle } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/docs", icon: Book },
    { name: "Install", href: "/docs/install", icon: Download },
    { name: "Login", href: "/docs/login", icon: Key },
    { name: "Commit Usage", href: "/docs/commit", icon: Terminal },
    { name: "Usage & Billing", href: "/docs/config", icon: Settings },
    { name: "Troubleshooting", href: "/docs/troubleshooting", icon: HelpCircle },
  ];

  return (
    <aside
      className="
        hidden md:flex flex-col w-64 
        h-screen sticky top-0 
        docs-sidebar-bg
        border-r border-white/10
        px-5 py-8
        overflow-y-auto
        backdrop-blur-xl
      "
    >
      <h2 className="text-xl font-semibold text-white mb-8 px-2">
        CommitAI Docs
      </h2>

      <nav className="space-y-2">
        {links.map(({ name, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                ${active 
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
