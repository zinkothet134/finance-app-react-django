import React, { useState } from "react";
const initialCategories = [
  { id: 1, name: "Food", type: "Essential", color: "bg-blue-500" },
  { id: 2, name: "Transport", type: "Essential", color: "bg-green-500" },
  { id: 3, name: "Shopping", type: "Lifestyle", color: "bg-purple-500" },
  { id: 4, name: "Entertainment", type: "Lifestyle", color: "bg-pink-500" },
];
const CategoryEntryForm = () => {
  const [categories, setCategories] = useState(initialCategories);
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">
          Create / Manage Categories
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Add custom categories and adjust labels for your budget system.
        </p>
      </div>

      <form className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:grid-cols-2">
        <input
          type="text"
          placeholder="Category name"
          className="rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />
        <select className="rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black">
          <option>Essential</option>
          <option>Lifestyle</option>
          <option>Saving</option>
          <option>Other</option>
        </select>
        <input
          type="text"
          placeholder="Color class (optional)"
          className="md:col-span-2 rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />
        <button
          type="submit"
          className="md:col-span-2 rounded-2xl bg-black py-3 font-semibold text-white hover:opacity-90"
        >
          Save Category
        </button>
      </form>

      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <h3 className="mb-4 text-xl font-bold text-gray-900">
          Existing Categories
        </h3>
        <div className="space-y-3">
          {categories.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-gray-100 p-4"
            >
              <div className="flex items-center gap-3">
                <span className={`h-4 w-4 rounded-full ${item.color}`}></span>
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.type}</p>
                </div>
              </div>
              <button className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryEntryForm;
