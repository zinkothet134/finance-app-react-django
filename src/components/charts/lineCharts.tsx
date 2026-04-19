"use client";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = Array.from({ length: 30 }, (_, index) => ({
  date: `${index + 1}`,
  expense: Math.floor(Math.random() * 90) + 10,
}));
const LineCharts = () => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Daily Expenses Trend
          </h2>
          <p className="text-sm text-gray-500">
            Last 30 days spending overview
          </p>
          <span className="rounded-xl bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            30 Days
          </span>
        </div>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -15, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip></Tooltip>
            <Line
              type="monotone"
              dataKey="expense"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            ></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineCharts;
