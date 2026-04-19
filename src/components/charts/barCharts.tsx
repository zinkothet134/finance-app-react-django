"use client";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

const data = [
  { category: "Food", amount: 48 },
  { category: "Shopping", amount: 35 },
  { category: "Entertainment", amount: 27 },
  { category: "Transport", amount: 22 },
  { category: "Bills", amount: 18 },
];

export default function BarCharts() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          Today Category Ranking
        </h2>
        <p className="text-sm text-gray-500">
          Highest to lowest daily spending
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" tickLine={false} axisLine={false} />
            <YAxis
              type="category"
              dataKey="category"
              tickLine={false}
              axisLine={false}
              width={110}
            />
            <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
            <Bar dataKey="amount" radius={[0, 8, 8, 0]} fill="#2563eb">
              <LabelList
                dataKey="amount"
                position="right"
                formatter={(value) => `$${value}`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
