export type Buyer = {
  id: string;
  name: string;
  type: "Individual" | "Business";
  location: string;
  contact: string;
  orders: number;
  status: "Active" | "Inactive";
};

export const initialBuyers: Buyer[] = [
  {
    id: "BUY-001",
    name: "John Doe",
    type: "Individual",
    location: "Bloemfontein",
    contact: "082 123 4567",
    orders: 14,
    status: "Active",
  },
  {
    id: "BUY-002",
    name: "ABC Foods",
    type: "Business",
    location: "Welkom",
    contact: "073 456 7890",
    orders: 28,
    status: "Active",
  },
  {
    id: "BUY-003",
    name: "Sarah Williams",
    type: "Individual",
    location: "Maseru",
    contact: "078 555 1234",
    orders: 9,
    status: "Active",
  },
  {
    id: "BUY-004",
    name: "FreshMart",
    type: "Business",
    location: "Botshabelo",
    contact: "071 987 6543",
    orders: 21,
    status: "Inactive",
  },
  {
    id: "BUY-005",
    name: "James Smith",
    type: "Individual",
    location: "Ladybrand",
    contact: "076 345 6789",
    orders: 6,
    status: "Active",
  },
];