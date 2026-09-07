"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type BuyerType = "Individual" | "Business";
type BuyerStatus = "Active" | "Inactive";

interface Buyer {
  id: string;
  name: string;
  type: BuyerType;
  location: string;
  contact: string;
  orders: number;
  status: BuyerStatus;
}

interface EditBuyerDialogProps {
  buyer: Buyer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (buyerData: {
    name: string;
    type: BuyerType;
    location: string;
    contact: string;
    status: BuyerStatus;
  }) => void;
}

export default function EditBuyerDialog({
  buyer,
  open,
  onOpenChange,
  onSave,
}: EditBuyerDialogProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState<BuyerType>("Individual");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<BuyerStatus>("Active");

  useEffect(() => {
    if (buyer) {
      setName(buyer.name);
      setType(buyer.type);
      setLocation(buyer.location);
      setContact(buyer.contact);
      setStatus(buyer.status);
    }
  }, [buyer]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSave({
      name,
      type,
      location,
      contact,
      status,
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Buyer</DialogTitle>
          <DialogDescription>
            Update the buyer&apos;s marketplace information.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="edit-buyer-name">Buyer Name</Label>
            <Input
              id="edit-buyer-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-buyer-type">Buyer Type</Label>
            <select
              id="edit-buyer-type"
              value={type}
              onChange={(event) =>
                setType(event.target.value as BuyerType)
              }
              className="h-10 w-full rounded-md border bg-background px-3 text-sm"
            >
              <option value="Individual">Individual</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-buyer-location">Location</Label>
            <Input
              id="edit-buyer-location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-buyer-contact">Contact Number</Label>
            <Input
              id="edit-buyer-contact"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-buyer-status">Status</Label>
            <select
              id="edit-buyer-status"
              value={status}
              onChange={(event) =>
                setStatus(event.target.value as BuyerStatus)
              }
              className="h-10 w-full rounded-md border bg-background px-3 text-sm"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-md px-3 py-2 text-sm font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}