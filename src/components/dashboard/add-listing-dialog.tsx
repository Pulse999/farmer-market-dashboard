"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Listing } from "@/lib/listings";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AddListingDialogProps = {
  onAddListing: (listing: Listing) => void;
};

export default function AddListingDialog({
  onAddListing,
}: AddListingDialogProps) {
  const [open, setOpen] = useState(false);

  const [product, setProduct] = useState("");
  const [farmer, setFarmer] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const missingFields: string[] = [];

    if (!product.trim()) {
      missingFields.push("Product");
    }

    if (!farmer.trim()) {
      missingFields.push("Farmer");
    }

    if (!category) {
      missingFields.push("Category");
    }

    if (!price) {
      missingFields.push("Price");
    }

    if (!unit.trim()) {
      missingFields.push("Unit");
    }

    if (!quantity) {
      missingFields.push("Quantity");
    }

    if (missingFields.length > 0) {
      setError(`Please fill in: ${missingFields.join(", ")}`);

      return;
    }

    const newListing: Listing = {
      id: `LST-${String(Date.now()).slice(-3)}`,
      product,
      farmer,
      category,
      price: Number(price),
      unit,
      quantity: Number(quantity),
      status: "Active",
    };

    onAddListing(newListing);

    setOpen(false);

    setProduct("");
    setFarmer("");
    setCategory("");
    setPrice("");
    setUnit("");
    setQuantity("");
    setError("");
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Add Listing
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Listing</DialogTitle>

            <DialogDescription>
              Add a new produce listing to the marketplace.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="product">Product</Label>

              <Input
                id="product"
                placeholder="e.g. Fresh Tomatoes"
                value={product}
                onChange={(event) => setProduct(event.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="farmer">Farmer</Label>

              <Input
                id="farmer"
                placeholder="e.g. Green Valley Farm"
                value={farmer}
                onChange={(event) => setFarmer(event.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>

              <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-10 rounded-md border bg-background px-3 text-sm"
              >
                <option value="" disabled>
                  Select a category
                </option>

                <option value="Vegetables">Vegetables</option>

                <option value="Fruits">Fruits</option>

                <option value="Grains">Grains</option>

                <option value="Dairy">Dairy</option>

                <option value="Livestock">Livestock</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>

                <Input
                  id="price"
                  type="number"
                  placeholder="25"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="unit">Unit</Label>

                <Input
                  id="unit"
                  placeholder="kg"
                  value={unit}
                  onChange={(event) => setUnit(event.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity</Label>

              <Input
                id="quantity"
                type="number"
                placeholder="500"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </div>
          </div>

          {error && (
            <div
              className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
              role="alert"
            >
              {error}
            </div>
          )}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="button" onClick={handleSubmit}>
              Add Listing
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
