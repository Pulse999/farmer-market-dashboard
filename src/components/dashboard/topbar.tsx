import { Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b px-6 flex items-center justify-between bg-white">
      {/* Page title */}
      <h2 className="text-lg font-semibold">
        Dashboard
      </h2>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-56 rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* User */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <UserCircle className="h-5 w-5" />

          <span>User / Profile</span>
        </div>
      </div>
    </header>
  );
}