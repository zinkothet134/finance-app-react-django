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
import { ChartWrapper } from "./ChartWrapper";

const data = [
  { category: "Food", amount: 48 },
  { category: "Shopping", amount: 35 },
  { category: "Entertainment", amount: 27 },
  { category: "Transport", amount: 22 },
  { category: "Bills", amount: 18 },
];

export default function BarCharts() {
  return (
    <ChartWrapper
      title="Today Category Ranking"
      subtitle="Highest to lowest daily spending"
    >
      <ResponsiveContainer width="99%" height="100%" minWidth={0}>
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
    </ChartWrapper>
  );
}
