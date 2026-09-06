import { MoreHorizontal } from "lucide-react";
import type { Listing } from "@/lib/listings";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ListingsTableProps = {
  listings: Listing[];
};

export default function ListingsTable({ listings }: ListingsTableProps) {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Listing</TableHead>
            <TableHead>Farmer</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {listings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell>
                <div>
                  <p className="font-medium">{listing.product}</p>

                  <p className="text-xs text-muted-foreground">{listing.id}</p>
                </div>
              </TableCell>

              <TableCell>{listing.farmer}</TableCell>

              <TableCell>{listing.category}</TableCell>

              <TableCell>{listing.price}</TableCell>

              <TableCell>{listing.quantity}</TableCell>

              <TableCell>
                <span
                  className={
                    listing.status === "Active"
                      ? "font-medium text-green-600"
                      : "font-medium text-gray-500"
                  }
                >
                  {listing.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
                    aria-label={`Actions for ${listing.product}`}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="center"
                    side="bottom"
                    sideOffset={4}
                  >
                    <DropdownMenuItem>View</DropdownMenuItem>

                    <DropdownMenuItem>Edit</DropdownMenuItem>

                    <DropdownMenuItem className="text-red-600">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
