"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Buyer = {
  id: string;
  name: string;
  type: "Individual" | "Business";
  location: string;
  contact: string;
  orders: number;
  status: "Active" | "Inactive";
};

type ViewBuyerDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  buyer: Buyer | null;
};

export default function ViewBuyerDialog({
  open,
  onOpenChange,
  buyer,
}: ViewBuyerDialogProps) {
  if (!buyer) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Buyer Details</DialogTitle>

          <DialogDescription>
            View information about this registered buyer.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Buyer ID</p>
            <p className="text-sm text-muted-foreground">
              {buyer.id}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Buyer Name</p>
            <p className="text-sm text-muted-foreground">
              {buyer.name}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Buyer Type</p>
            <p className="text-sm text-muted-foreground">
              {buyer.type}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Location</p>
            <p className="text-sm text-muted-foreground">
              {buyer.location}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Contact</p>
            <p className="text-sm text-muted-foreground">
              {buyer.contact}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Orders</p>
            <p className="text-sm text-muted-foreground">
              {buyer.orders}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Status</p>

            <p
              className={`text-sm ${
                buyer.status === "Active"
                  ? "text-green-600"
                  : "text-muted-foreground"
              }`}
            >
              {buyer.status}
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}