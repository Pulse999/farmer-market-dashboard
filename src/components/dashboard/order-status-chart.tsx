"use client";

import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    status: "Completed",
    orders: 540,
    fill: "#16a34a",
  },
  {
    status: "Processing",
    orders: 320,
    fill: "#2563eb",
  },
  {
    status: "Pending",
    orders: 180,
    fill: "#f59e0b",
  },
  {
    status: "Cancelled",
    orders: 80,
    fill: "#dc2626",
  },
];

export default function OrderStatusChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="orders"
            nameKey="status"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={3}
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}