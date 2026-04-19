"use client";
import React, { useState } from "react";

const draftedItems = [
  { name: "Milk", category: "Food", amount: 2.5 },
  { name: "Bread", category: "Food", amount: 1.8 },
  { name: "Soap", category: "Household", amount: 3.2 },
];

const ExpensesEntryForm = () => {
  const [scanReady, setScanReady] = useState(false);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Add New Expense
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Manual entry or scan your receipt for drafted AI categorization.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setScanReady(true)}
            className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Scan Receipt / QR
          </button>
        </div>
      </div>

      {scanReady && (
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <h3 className="text-lg font-bold text-gray-900">
            Receipt Scanner (Draft)
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Use camera integration later. OCR + AI will detect items and suggest
            categories.
          </p>
          <div className="mt-4 rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
            Camera preview / Upload receipt image area
          </div>

          <div className="mt-5 space-y-3">
            {draftedItems.map((item) => (
              <div
                key={item.name}
                className="grid gap-3 rounded-2xl border border-gray-100 p-4 md:grid-cols-3"
              >
                <input
                  defaultValue={item.name}
                  className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-black"
                />
                <select
                  defaultValue={item.category}
                  className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-black"
                >
                  <option>Food</option>
                  <option>Transport</option>
                  <option>Shopping</option>
                  <option>Household</option>
                  <option>Bills</option>
                </select>
                <input
                  defaultValue={item.amount}
                  className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-black"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <form className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:grid-cols-2">
        <input
          type="text"
          placeholder="Expense title"
          className="rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />
        <input
          type="number"
          placeholder="Total amount"
          className="rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />
        <select className="rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black">
          <option>Select category</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Entertainment</option>
        </select>
        <input
          type="date"
          className="rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />
        <select className="rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black">
          <option>Cash</option>
          <option>Card</option>
          <option>Wallet</option>
          <option>Bank Transfer</option>
        </select>
        <input
          type="text"
          placeholder="Merchant / Shop name"
          className="rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />
        <textarea
          rows={4}
          placeholder="Notes"
          className="md:col-span-2 rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        ></textarea>
        <button
          type="submit"
          className="md:col-span-2 rounded-2xl bg-black py-3 font-semibold text-white hover:opacity-90"
        >
          Save Expense
        </button>
      </form>
    </div>
  );
};

export default ExpensesEntryForm;
