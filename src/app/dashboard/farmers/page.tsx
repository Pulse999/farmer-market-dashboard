"use client";

import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import FarmersTable, {
  type Farmer,
} from "@/components/dashboard/farmers-table";

const farmers: Farmer[] = [
  {
    id: "FAR-001",
    name: "Thabo Mokoena",
    farm: "Green Valley Farm",
    location: "Bloemfontein",
    contact: "072 456 7890",
    listings: 12,
    status: "Active",
  },
  {
    id: "FAR-002",
    name: "Sarah Williams",
    farm: "Sunrise Produce",
    location: "Welkom",
    contact: "073 234 5678",
    listings: 8,
    status: "Active",
  },
  {
    id: "FAR-003",
    name: "James Smith",
    farm: "Free State Organics",
    location: "Botshabelo",
    contact: "071 987 6543",
    listings: 15,
    status: "Active",
  },
  {
    id: "FAR-004",
    name: "Lerato Dlamini",
    farm: "Harvest Fields",
    location: "Ladybrand",
    contact: "076 345 6789",
    listings: 6,
    status: "Inactive",
  },
  {
    id: "FAR-005",
    name: "Michael Brown",
    farm: "Golden Grain Farm",
    location: "Thaba Nchu",
    contact: "079 123 4567",
    listings: 10,
    status: "Active",
  },
];

export default function FarmersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<
    "All" | "Active" | "Inactive"
  >("All");

  const filteredFarmers = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return farmers.filter((farmer) => {
      const matchesSearch =
        farmer.name.toLowerCase().includes(searchValue) ||
        farmer.id.toLowerCase().includes(searchValue) ||
        farmer.farm.toLowerCase().includes(searchValue) ||
        farmer.location.toLowerCase().includes(searchValue);

      const matchesStatus =
        status === "All" || farmer.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Farmers</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage farmers registered on the marketplace.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Farmer
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search farmers..."
            className="pl-9"
          />
        </div>

        <select
          value={status}
          onChange={(event) =>
            setStatus(
              event.target.value as "All" | "Active" | "Inactive"
            )
          }
          className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Farmers Table */}
      <FarmersTable farmers={filteredFarmers} />
    </div>
  );
}