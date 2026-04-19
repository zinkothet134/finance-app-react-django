"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import ExpensesEntryForm from "@/components/forms/expensesEntryForm";
import { useSearchParams } from "next/navigation";
import LineCharts from "@/components/charts/lineCharts";

import PieCharts from "@/components/charts/pieCharts";
import BarCharts from "@/components/charts/barCharts";

const transactions = [
  {
    id: 1,
    title: "Grocery Store",
    category: "Food",
    date: "2026-04-19",
    amount: 24.5,
  },
  {
    id: 2,
    title: "Grab Transport",
    category: "Transport",
    date: "2026-04-18",
    amount: 8.75,
  },
  {
    id: 3,
    title: "Netflix Subscription",
    category: "Entertainment",
    date: "2026-04-17",
    amount: 12.99,
  },
  {
    id: 4,
    title: "Coffee Shop",
    category: "Food",
    date: "2026-04-16",
    amount: 4.25,
  },
];

const ExpensesPageContent = () => {
  const searchParams = useSearchParams();
  const isAddMode = searchParams.get("mode") === "add";
  return (
    <main className="space-y-6">
      {/* header section */}
      <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Daily Expenses</h1>
          <p className="mt-2 text-gray-500">
            Track spending, manage categories, and review transactions.
          </p>
        </div>
        {/* toggle button: show 'Back' if form is open, else 'Add' */}
        <Link
          href={isAddMode ? "/expenses" : "/expenses?mode=add"}
          className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          {isAddMode ? "← Back to List" : "+ Add Expense"}
        </Link>
      </div>
      {/* conditional rendering  */}
      {isAddMode ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <ExpensesEntryForm />
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm text-gray-500">Today</p>
              <h3 className="mt-2 text-2xl font-bold text-blue-500">$36.20</h3>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm text-gray-500">This Week</p>
              <h3 className="mt-2 text-2xl font-bold text-blue-500">$142.10</h3>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm text-gray-500">This Month</p>
              <h3 className="mt-2 text-2xl font-bold text-blue-500">$524.80</h3>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm text-gray-500">Transactions</p>
              <h3 className="mt-2 text-2xl font-bold text-blue-500">28</h3>
            </div>
          </div>
          {/* Space for the Charts */}
          <LineCharts />
          <div className="grid gap-6 lg:grid-cols-2">
            <BarCharts />
            <PieCharts />
          </div>

          {/* Space for Charts */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Recent Expenses
              </h2>
              <button className="text-sm font-medium text-gray-500 hover:text-black">
                View All
              </button>
            </div>

            <div className="space-y-3">
              {transactions.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.category} • {item.date}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-red-700">
                    -${item.amount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default function ExpensesPage() {
  return (
    <Suspense
      fallback={
        <main className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <p className="text-sm text-gray-500">Loading expenses...</p>
          </div>
        </main>
      }
    >
      <ExpensesPageContent />
    </Suspense>
  );
}
