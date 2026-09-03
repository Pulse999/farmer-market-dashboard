"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    category: "Vegetables",
    listings: 85,
  },
  {
    category: "Fruits",
    listings: 62,
  },
  {
    category: "Grains",
    listings: 41,
  },
  {
    category: "Dairy",
    listings: 28,
  },
  {
    category: "Livestock",
    listings: 32,
  },
];

export default function ListingsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="category"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
          />

          <Tooltip />

          <Bar
            dataKey="listings"
            name="Listings"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}