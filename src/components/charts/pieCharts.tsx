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
import { ChartWrapper } from "./ChartWrapper";

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
    <ChartWrapper
      title="Today by Category"
      subtitle="Daily expenses distribution"
    >
      <ResponsiveContainer width="99%" height="100%" minWidth={0}>
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
    </ChartWrapper>
  );
}
