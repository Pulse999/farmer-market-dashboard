"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import type { Farmer } from "./farmers-table";

type ViewFarmerDialogProps = {
  farmer: Farmer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ViewFarmerDialog({
  farmer,
  open,
  onOpenChange,
}: ViewFarmerDialogProps) {
  if (!farmer) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Farmer Details</DialogTitle>

          <DialogDescription>
            View information about this registered farmer.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div>
            <p className="text-xs font-medium text-muted-foreground">
              Farmer ID
            </p>

            <p className="mt-1 text-sm font-medium">
              {farmer.id}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground">
              Farmer Name
            </p>

            <p className="mt-1 text-sm font-medium">
              {farmer.name}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground">
              Farm
            </p>

            <p className="mt-1 text-sm font-medium">
              {farmer.farm}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground">
              Location
            </p>

            <p className="mt-1 text-sm font-medium">
              {farmer.location}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground">
              Contact
            </p>

            <p className="mt-1 text-sm font-medium">
              {farmer.contact}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground">
              Listings
            </p>

            <p className="mt-1 text-sm font-medium">
              {farmer.listings}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground">
              Status
            </p>

            <p
              className={`mt-1 text-sm font-medium ${
                farmer.status === "Active"
                  ? "text-green-600"
                  : "text-muted-foreground"
              }`}
            >
              {farmer.status}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}