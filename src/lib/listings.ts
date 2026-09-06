export type Listing = {
  id: string;
  product: string;
  farmer: string;
  category: string;
  price: number;
  unit: string;
  quantity: number;
  status: "Active" | "Inactive";
};

export const listings: Listing[] = [
  {
    id: "LST-001",
    product: "Fresh Tomatoes",
    farmer: "Green Valley Farm",
    category: "Vegetables",
    price: 25,
    unit: "kg",
    quantity: 500,
    status: "Active",
  },
  {
    id: "LST-002",
    product: "Golden Apples",
    farmer: "Sunrise Produce",
    category: "Fruits",
    price: 35,
    unit: "kg",
    quantity: 300,
    status: "Active",
  },
  {
    id: "LST-003",
    product: "Yellow Maize",
    farmer: "Free State Organics",
    category: "Grains",
    price: 18,
    unit: "kg",
    quantity: 1200,
    status: "Active",
  },
  {
    id: "LST-004",
    product: "Fresh Milk",
    farmer: "Harvest Fields",
    category: "Dairy",
    price: 22,
    unit: "litre",
    quantity: 800,
    status: "Inactive",
  },
  {
    id: "LST-005",
    product: "Free Range Eggs",
    farmer: "Golden Grain Farm",
    category: "Livestock",
    price: 65,
    unit: "dozen",
    quantity: 150,
    status: "Active",
  },
];