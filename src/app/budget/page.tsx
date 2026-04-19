"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CategoryEntryForm from "@/components/forms/categoryEntryForm";

const budgets = [
  { id: 1, category: "Food", limit: 300, used: 210 },
  { id: 2, category: "Transport", limit: 150, used: 500 },
  { id: 3, category: "Shopping", limit: 250, used: 170 },
  { id: 4, category: "Entertainment", limit: 120, used: 88 },
];
function MonthlyBudgetContent() {
  const searchParams = useSearchParams();
  const isAddMode = searchParams.get("mode") === "category";
  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Monthly Budget</h1>
          <p className="mt-2 text-gray-500">
            Set limits, track usage, and manage custom categories.
          </p>
        </div>
        <Link
          href={isAddMode ? "/budget" : "/budget?mode=category"}
          className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          {isAddMode ? "← Back to Budget" : "+ Manage Categories"}
        </Link>
      </div>
      {isAddMode ? (
        <CategoryEntryForm />
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm text-gray-500">Monthly Limit</p>
              <h3 className="mt-2 text-2xl font-bold text-blue-500">$820</h3>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm text-gray-500">Used</p>
              <h3 className="mt-2 text-2xl font-bold text-blue-500">$563</h3>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm text-gray-500">Remaining</p>
              <h3 className="mt-2 text-2xl font-bold text-green-600">$257</h3>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm text-gray-500">Categories</p>
              <h3 className="mt-2 text-2xl font-bold text-blue-500">4</h3>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Budget by Category
            </h2>
            <div className="space-y-4">
              {budgets.map((item) => {
                const percent = Math.round((item.used / item.limit) * 100);
                const progressWidth = Math.min(percent, 100);
                const isOverBudget = percent > 100;
                return (
                  <div key={item.id}>
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-semibold text-gray-900">
                        {item.category}
                      </p>
                      <p
                        className={`text-sm ${isOverBudget ? "text-red-500 font-semibold" : "text-gray-500"}`}
                      >
                        ${item.used} / ${item.limit}{" "}
                        {isOverBudget ? `( ${percent}% )` : ""}
                      </p>
                    </div>
                    <div className="h-3 rounded-full bg-gray-100">
                      <div
                        className={`h-3 rounded-full ${isOverBudget ? "bg-red-500" : "bg-blue-500"}`}
                        style={{ width: `${progressWidth}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
const MonthlyBudgetPage = () => {
  return (
    <Suspense
      fallback={
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          Loading Budget....
        </div>
      }
    >
      <MonthlyBudgetContent />
    </Suspense>
  );
};

export default MonthlyBudgetPage;
