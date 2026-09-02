import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Star,
  BarChart3,
  UserRound,
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Listings",
    href: "/dashboard/listings",
    icon: Package,
  },
  {
    name: "Farmers",
    href: "/dashboard/farmers",
    icon: UserRound,
  },
  {
    name: "Buyers",
    href: "/dashboard/buyers",
    icon: Users,
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    name: "Reviews",
    href: "/dashboard/reviews",
    icon: Star,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-xl font-bold">
          Farmer Marketplace
        </h1>

        <p className="mt-1 text-xs text-muted-foreground">
          Marketplace Dashboard
        </p>
      </div>

      <nav className="p-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Dashboard
        </p>

        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <Icon className="h-4 w-4" />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}