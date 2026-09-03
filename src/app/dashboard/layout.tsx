// src/app/dashboard/layout.tsx
import type { ReactNode } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <section className="p-6">
          {children}
        </section>
      </main>
    </div>
  );
}