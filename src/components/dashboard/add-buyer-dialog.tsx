"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type AddBuyerDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (buyer: {
    name: string;
    type: "Individual" | "Business";
    location: string;
    contact: string;
    orders: number;
    status: "Active" | "Inactive";
  }) => void;
};

export default function AddBuyerDialog({
  open,
  onOpenChange,
  onAdd,
}: AddBuyerDialogProps) {
  const [name, setName] = useState("");
  const [type, setType] =
    useState<"Individual" | "Business">("Individual");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] =
    useState<"Active" | "Inactive">("Active");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd({
      name,
      type,
      location,
      contact,
      orders: 0,
      status,
    });

    setName("");
    setType("Individual");
    setLocation("");
    setContact("");
    setStatus("Active");

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Buyer</DialogTitle>
          <DialogDescription>
            Register a new buyer on the marketplace.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="buyer-name">
              Buyer Name
            </Label>

            <Input
              id="buyer-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter buyer name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="buyer-type">
              Buyer Type
            </Label>

            <select
              id="buyer-type"
              value={type}
              onChange={(event) =>
                setType(
                  event.target.value as "Individual" | "Business"
                )
              }
              className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm"
              required
            >
              <option value="Individual">Individual</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="buyer-location">
              Location
            </Label>

            <Input
              id="buyer-location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Enter location"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="buyer-contact">
              Contact Number
            </Label>

            <Input
              id="buyer-contact"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              placeholder="Enter contact number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="buyer-status">
              Status
            </Label>

            <select
              id="buyer-status"
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target.value as "Active" | "Inactive"
                )
              }
              className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm"
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit">
              Add Buyer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}