import type { ReactNode } from "react";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1">
        <header className="h-16 border-b px-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-md border px-3 py-2 text-sm"
            />

            <span className="text-sm text-muted-foreground">
              User / Profile
            </span>
          </div>
        </header>

        <section className="p-6">
          {children}
        </section>
      </main>
    </div>
  );
}