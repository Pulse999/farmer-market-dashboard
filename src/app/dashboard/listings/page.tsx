/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddListingDialog from "@/components/dashboard/add-listing-dialog";
import ListingsTable from "@/components/dashboard/listings-table";
import { listings as initialListings, type Listing } from "@/lib/listings";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>(initialListings);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const handleAddListing = (newListing: Listing) => {
    setListings((currentListings) => [...currentListings, newListing]);
  };

  const filteredListings = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return listings.filter((listing) => {
      const matchesSearch =
        !query ||
        listing.product.toLowerCase().includes(query) ||
        listing.farmer.toLowerCase().includes(query) ||
        listing.category.toLowerCase().includes(query);

      const matchesCategory =
        categoryFilter === "All Categories" ||
        listing.category === categoryFilter;

      const matchesStatus =
        statusFilter === "All Statuses" || listing.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [listings, searchQuery, categoryFilter, statusFilter]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Listings</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage produce listings.
          </p>
        </div>

        <AddListingDialog onAddListing={handleAddListing} />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search listings..."
            className="pl-9"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium hover:bg-muted"
              >
                {categoryFilter}
              </button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => setCategoryFilter("All Categories")}
            >
              All Categories
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setCategoryFilter("Vegetables")}>
              Vegetables
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setCategoryFilter("Fruits")}>
              Fruits
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setCategoryFilter("Grains")}>
              Grains
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setCategoryFilter("Dairy")}>
              Dairy
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setCategoryFilter("Livestock")}>
              Livestock
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium hover:bg-muted"
              >
                {statusFilter}
              </button>
            }
          />

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setStatusFilter("All Statuses")}>
              All Statuses
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setStatusFilter("Active")}>
              Active
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setStatusFilter("Inactive")}>
              Inactive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ListingsTable listings={filteredListings} />
    </div>
  );
}
