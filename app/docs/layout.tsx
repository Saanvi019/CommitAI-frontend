import Sidebar from "@/components/docs/Sidebar";
import MobileSidebar from "@/components/docs/MobileSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <MobileSidebar />

      <div className="flex-1 min-h-screen border-l border-white/10">
        {children}
      </div>
    </div>
  );
}

