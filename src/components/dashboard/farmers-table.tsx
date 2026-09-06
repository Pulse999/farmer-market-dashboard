"use client";

import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type Farmer = {
  id: string;
  name: string;
  farm: string;
  location: string;
  contact: string;
  listings: number;
  status: "Active" | "Inactive";
};

type FarmersTableProps = {
  farmers: Farmer[];
  onView: (farmer: Farmer) => void;
  onEdit: (farmer: Farmer) => void;
  onDelete: (farmer: Farmer) => void;
};

export default function FarmersTable({
  farmers,
  onView,
  onEdit,
  onDelete,
}: FarmersTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Farmer</TableHead>
            <TableHead>Farm</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Listings</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {farmers.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-24 text-center text-muted-foreground"
              >
                No farmers found.
              </TableCell>
            </TableRow>
          ) : (
            farmers.map((farmer) => (
              <TableRow key={farmer.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">
                      {farmer.name}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {farmer.id}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  {farmer.farm}
                </TableCell>

                <TableCell>
                  {farmer.location}
                </TableCell>

                <TableCell>
                  {farmer.contact}
                </TableCell>

                <TableCell>
                  {farmer.listings}
                </TableCell>

                <TableCell>
                  <span
                    className={
                      farmer.status === "Active"
                        ? "text-green-600"
                        : "text-muted-foreground"
                    }
                  >
                    {farmer.status}
                  </span>
                </TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
                          aria-label={`Actions for ${farmer.name}`}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      }
                    />

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => onView(farmer)}
                      >
                        View
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        onClick={() => onEdit(farmer)}
                      >
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        variant="destructive"
                        onClick={() => onDelete(farmer)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}