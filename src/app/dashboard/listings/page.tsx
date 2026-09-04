import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ListingsTable from "@/components/dashboard/listings-table";

export default function ListingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Listings</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage produce listings.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Listing
        </Button>
      </div>

      {/* Search and Filters */}
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

      {/* Listings Table */}
      <ListingsTable/>
    </div>
  );
}