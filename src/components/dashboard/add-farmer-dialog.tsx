"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import type { Farmer } from "./farmers-table";

type AddFarmerDialogProps = {
  onAddFarmer: (farmer: Farmer) => void;
};

export default function AddFarmerDialog({
  onAddFarmer,
}: AddFarmerDialogProps) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [farm, setFarm] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");

  const resetForm = () => {
    setName("");
    setFarm("");
    setLocation("");
    setContact("");
    setStatus("Active");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !name.trim() ||
      !farm.trim() ||
      !location.trim() ||
      !contact.trim()
    ) {
      return;
    }

    const newFarmer: Farmer = {
      id: `FAR-${String(Date.now()).slice(-3)}`,
      name: name.trim(),
      farm: farm.trim(),
      location: location.trim(),
      contact: contact.trim(),
      listings: 0,
      status,
    };

    onAddFarmer(newFarmer);

    resetForm();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);

        if (!value) {
          resetForm();
        }
      }}
    >
      <DialogTrigger
        render={
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Farmer
          </Button>
        }
      />

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Farmer</DialogTitle>

          <DialogDescription>
            Register a new farmer on the marketplace.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="farmer-name"
              className="text-sm font-medium"
            >
              Farmer Name
            </label>

            <Input
              id="farmer-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. John Mokoena"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="farm-name"
              className="text-sm font-medium"
            >
              Farm Name
            </label>

            <Input
              id="farm-name"
              value={farm}
              onChange={(event) => setFarm(event.target.value)}
              placeholder="e.g. Green Valley Farm"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="farmer-location"
              className="text-sm font-medium"
            >
              Location
            </label>

            <Input
              id="farmer-location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="e.g. Bloemfontein"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="farmer-contact"
              className="text-sm font-medium"
            >
              Contact Number
            </label>

            <Input
              id="farmer-contact"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              placeholder="e.g. 072 123 4567"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="farmer-status"
              className="text-sm font-medium"
            >
              Status
            </label>

            <select
              id="farmer-status"
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target.value as "Active" | "Inactive"
                )
              }
              className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit">
              Add Farmer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}