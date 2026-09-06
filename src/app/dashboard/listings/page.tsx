"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddListingDialog from "@/components/dashboard/add-listing-dialog";
import ListingsTable from "@/components/dashboard/listings-table";
import { listings as initialListings, type Listing } from "@/lib/listings";

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>(initialListings);

  const handleAddListing = (newListing: Listing) => {
    setListings((currentListings) => [
      ...currentListings,
      newListing,
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Listings
          </h1>

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
          />
        </div>

        <Button variant="outline">
          All Categories
        </Button>

        <Button variant="outline">
          All Statuses
        </Button>
      </div>

      <ListingsTable listings={listings} />
    </div>
  );
}