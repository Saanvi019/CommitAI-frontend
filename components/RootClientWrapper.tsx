"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

export default function RootClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");

  return (
    <>
      {!isDocs && <Header />}
      {children}
    </>
  );
}
