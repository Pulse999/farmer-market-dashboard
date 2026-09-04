import { MoreHorizontal } from "lucide-react";

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
const listings = [
  {
    id: "LST-001",
    product: "Fresh Tomatoes",
    farmer: "Green Valley Farm",
    category: "Vegetables",
    price: "R25 / kg",
    quantity: "500 kg",
    status: "Active",
  },
  {
    id: "LST-002",
    product: "Golden Apples",
    farmer: "Sunrise Produce",
    category: "Fruits",
    price: "R35 / kg",
    quantity: "300 kg",
    status: "Active",
  },
  {
    id: "LST-003",
    product: "Yellow Maize",
    farmer: "Free State Organics",
    category: "Grains",
    price: "R18 / kg",
    quantity: "1,200 kg",
    status: "Active",
  },
  {
    id: "LST-004",
    product: "Fresh Milk",
    farmer: "Harvest Fields",
    category: "Dairy",
    price: "R22 / litre",
    quantity: "800 litres",
    status: "Inactive",
  },
  {
    id: "LST-005",
    product: "Free Range Eggs",
    farmer: "Golden Grain Farm",
    category: "Livestock",
    price: "R65 / dozen",
    quantity: "150 dozen",
    status: "Active",
  },
];

export default function ListingsTable() {
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
