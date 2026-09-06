"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { Farmer } from "./farmers-table";

type EditFarmerDialogProps = {
  farmer: Farmer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (farmer: Farmer) => void;
};

export default function EditFarmerDialog({
  farmer,
  open,
  onOpenChange,
  onSave,
}: EditFarmerDialogProps) {
  const [name, setName] = useState("");
  const [farm, setFarm] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");

  useEffect(() => {
    if (farmer) {
      setName(farmer.name);
      setFarm(farmer.farm);
      setLocation(farmer.location);
      setContact(farmer.contact);
      setStatus(farmer.status);
    }
  }, [farmer]);

  if (!farmer) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !farm.trim() || !location.trim() || !contact.trim()) {
      return;
    }

    onSave({
      ...farmer,
      name: name.trim(),
      farm: farm.trim(),
      location: location.trim(),
      contact: contact.trim(),
      status,
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Farmer</DialogTitle>

          <DialogDescription>
            Update the farmer&apos;s marketplace information.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="edit-farmer-name" className="text-sm font-medium">
              Farmer Name
            </label>

            <Input
              id="edit-farmer-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="edit-farm-name" className="text-sm font-medium">
              Farm Name
            </label>

            <Input
              id="edit-farm-name"
              value={farm}
              onChange={(event) => setFarm(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="edit-farmer-location"
              className="text-sm font-medium"
            >
              Location
            </label>

            <Input
              id="edit-farmer-location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="edit-farmer-contact"
              className="text-sm font-medium"
            >
              Contact Number
            </label>

            <Input
              id="edit-farmer-contact"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="edit-farmer-status" className="text-sm font-medium">
              Status
            </label>

            <select
              id="edit-farmer-status"
              value={status}
              onChange={(event) =>
                setStatus(event.target.value as "Active" | "Inactive")
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
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
