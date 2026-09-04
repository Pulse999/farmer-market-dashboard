"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

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

export default function AddListingDialog() {
  const [open, setOpen] = useState(false);

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
              <Label htmlFor="product">
                Product
              </Label>

              <Input
                id="product"
                placeholder="e.g. Fresh Tomatoes"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="farmer">
                Farmer
              </Label>

              <Input
                id="farmer"
                placeholder="e.g. Green Valley Farm"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="category">
                Category
              </Label>

              <select
                id="category"
                className="h-10 rounded-md border bg-background px-3 text-sm"
                defaultValue=""
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
                <Label htmlFor="price">
                  Price
                </Label>

                <Input
                  id="price"
                  type="number"
                  placeholder="25"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="unit">
                  Unit
                </Label>

                <Input
                  id="unit"
                  placeholder="kg"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="quantity">
                Quantity
              </Label>

              <Input
                id="quantity"
                type="number"
                placeholder="500"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type="button"
              onClick={() => setOpen(false)}
            >
              Add Listing
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}