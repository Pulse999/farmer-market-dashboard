import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    id: "#ORD-1001",
    buyer: "Thabo Mokoena",
    farmer: "Green Valley Farm",
    amount: "R2,450",
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    buyer: "Sarah Williams",
    farmer: "Sunrise Produce",
    amount: "R1,850",
    status: "Processing",
  },
  {
    id: "#ORD-1003",
    buyer: "James Smith",
    farmer: "Free State Organics",
    amount: "R3,200",
    status: "Pending",
  },
  {
    id: "#ORD-1004",
    buyer: "Lerato Dlamini",
    farmer: "Harvest Fields",
    amount: "R4,100",
    status: "Completed",
  },
  {
    id: "#ORD-1005",
    buyer: "Michael Brown",
    farmer: "Golden Grain Farm",
    amount: "R980",
    status: "Cancelled",
  },
];

export default function RecentOrders() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Buyer</TableHead>
            <TableHead>Farmer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">
                {order.id}
              </TableCell>

              <TableCell>
                {order.buyer}
              </TableCell>

              <TableCell>
                {order.farmer}
              </TableCell>

              <TableCell>
                {order.amount}
              </TableCell>

              <TableCell>
                {order.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}