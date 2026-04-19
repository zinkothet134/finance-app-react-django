"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
  { name: "Dashboard", href: "/" },
  { name: "Daily Expenses", href: "/expenses" },
  { name: "Monthly Budget", href: "/budget" },
  { name: "Saving Plan", href: "/savings" },
  { name: "Report", href: "/report" },
];
const LogoutButton = () => {
  return (
    <button
      type="button"
      className="rounded-xl border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-200 transition hover:bg-gray-100 hover:text-black"
    >
      Logout
    </button>
  );
};

const NavigationPage = () => {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          Menu
        </button>
        <h1 className="text-lg font-bold text-gray-900">Finance App</h1>
        <div className="h-10 w-10 rounded-full bg-gray-100"></div>
      </header>
      {/* Overaly */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform border-r border-gray-200 bg-white shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between border-b border-gray-100 pb-6 md:block">
            <div className="flex w-full items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                Z
              </div>
              <div className="flex-1 pt-1">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Welcome
                </p>
                <div className="mt-2 flex items-start justify-between gap-3">
                  <h2 className="text-sm font-bold text-gray-900">
                    Zin Ko Thet
                  </h2>
                  <div className="hidden md:block ml-auto mr-[-6px] mt-2 shrink-0">
                    <LogoutButton />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:hidden mt-2">
              <LogoutButton />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-gray-500 md:hidden"
              ></button>
            </div>
          </div>
          <nav className="mt-6 flex-1 space-y-2">
            {menuItems.map((item) => {
              const isActive = pathName === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex w-full items-center rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-gray-700 p-4 text-white">
            <p className="text-xs opacity-80">Monthly Goal</p>
            <p className="mt-1 text-xl font-bold">72%</p>
            <div className="mt-3 h-2 rounded-full bg-white/20">
              <div className="h-2 w-[72%] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavigationPage;
