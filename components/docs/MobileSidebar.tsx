"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Book, Download, Key, Terminal, Settings, HelpCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
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
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between w-full px-5 py-4 border-b border-white/10 bg-black/30 backdrop-blur-xl sticky top-0 z-40">
        <h2 className="text-lg font-semibold text-white">Docs</h2>

        <button
          onClick={() => setOpen(true)}
          className="text-white hover:text-cyan-300 transition"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Slide-in panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          docs-sidebar-bg border-r border-white/10
          px-5 py-8 overflow-y-auto
          transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="text-white mb-8 hover:text-red-300 transition flex items-center gap-2"
        >
          <X className="w-5 h-5" /> Close
        </button>

        <nav className="space-y-2">
          {links.map(({ name, href, icon: Icon }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                  ${active
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"}
                `}
              >
                <Icon className="w-4 h-4" />
                {name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
