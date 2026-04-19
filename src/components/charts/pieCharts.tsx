"use client";
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Food", value: 48 },
  { name: "Transport", value: 22 },
  { name: "Shopping", value: 35 },
  { name: "Bills", value: 18 },
  { name: "Entertainment", value: 27 },
];

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function PieCharts() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">Today by Category</h2>
        <p className="text-sm text-gray-500">Daily expenses distribution</p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={95}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
