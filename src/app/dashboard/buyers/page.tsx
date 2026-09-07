"use client";

import { useMemo, useState } from "react";
import { MoreHorizontal, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { initialBuyers, Buyer } from "@/lib/buyers";

import AddBuyerDialog from "@/components/dashboard/add-buyer-dialog";
import ViewBuyerDialog from "@/components/dashboard/view-buyer-dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function BuyersPage() {
  const [buyers, setBuyers] = useState<Buyer[]>(initialBuyers);

  const [addBuyerOpen, setAddBuyerOpen] = useState(false);

  const [selectedBuyer, setSelectedBuyer] =
    useState<Buyer | null>(null);

  const [viewBuyerOpen, setViewBuyerOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<
    "All" | "Active" | "Inactive"
  >("All");

  const handleAddBuyer = (buyerData: {
    name: string;
    type: "Individual" | "Business";
    location: string;
    contact: string;
    orders: number;
    status: "Active" | "Inactive";
  }) => {
    const newBuyer: Buyer = {
      id: `BUY-${String(buyers.length + 1).padStart(3, "0")}`,
      ...buyerData,
    };

    setBuyers((currentBuyers) => [
      ...currentBuyers,
      newBuyer,
    ]);
  };

  const handleViewBuyer = (buyer: Buyer) => {
    setSelectedBuyer(buyer);
    setViewBuyerOpen(true);
  };

  const filteredBuyers = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return buyers.filter((buyer) => {
      const matchesSearch =
        buyer.name.toLowerCase().includes(searchValue) ||
        buyer.type.toLowerCase().includes(searchValue) ||
        buyer.location.toLowerCase().includes(searchValue) ||
        buyer.contact.toLowerCase().includes(searchValue);

      const matchesStatus =
        status === "All" || buyer.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [buyers, search, status]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Buyers</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage buyers registered on the marketplace.
          </p>
        </div>

        <Button onClick={() => setAddBuyerOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Buyer
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search buyers..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            className="pl-9"
          />
        </div>

        <select
          value={status}
          onChange={(event) =>
            setStatus(
              event.target.value as
                | "All"
                | "Active"
                | "Inactive"
            )
          }
          className="h-10 rounded-md border bg-background px-3 text-sm"
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Buyers Table */}
      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/30">
              <th className="px-3 py-3 text-left font-medium">
                Buyer
              </th>

              <th className="px-3 py-3 text-left font-medium">
                Type
              </th>

              <th className="px-3 py-3 text-left font-medium">
                Location
              </th>

              <th className="px-3 py-3 text-left font-medium">
                Contact
              </th>

              <th className="px-3 py-3 text-left font-medium">
                Orders
              </th>

              <th className="px-3 py-3 text-left font-medium">
                Status
              </th>

              <th className="px-3 py-3 text-right font-medium">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredBuyers.map((buyer) => (
              <tr
                key={buyer.id}
                className="border-b last:border-0"
              >
                <td className="px-3 py-3">
                  <div className="font-medium">
                    {buyer.name}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {buyer.id}
                  </div>
                </td>

                <td className="px-3 py-3">
                  {buyer.type}
                </td>

                <td className="px-3 py-3">
                  {buyer.location}
                </td>

                <td className="px-3 py-3">
                  {buyer.contact}
                </td>

                <td className="px-3 py-3">
                  {buyer.orders}
                </td>

                <td className="px-3 py-3">
                  <span
                    className={
                      buyer.status === "Active"
                        ? "text-green-600"
                        : "text-muted-foreground"
                    }
                  >
                    {buyer.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-3 py-3 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
                          aria-label={`Actions for ${buyer.name}`}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      }
                    />

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() =>
                          handleViewBuyer(buyer)
                        }
                      >
                        View
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredBuyers.length === 0 && (
          <div className="py-10 text-center text-sm text-muted-foreground">
            No buyers found.
          </div>
        )}
      </div>

      {/* Add Buyer Dialog */}
      <AddBuyerDialog
        open={addBuyerOpen}
        onOpenChange={setAddBuyerOpen}
        onAdd={handleAddBuyer}
      />

      {/* View Buyer Dialog */}
      <ViewBuyerDialog
        open={viewBuyerOpen}
        onOpenChange={setViewBuyerOpen}
        buyer={selectedBuyer}
      />
    </div>
  );
}