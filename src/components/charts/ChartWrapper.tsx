"use client";
import React, { useState, useEffect } from "react";

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const ChartWrapper = ({ title, subtitle, children }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-w-0 overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="h-[320px] w-full min-w-0">
        {!isClient ? (
          <div className="h-full w-full animate-pulse rounded-2xl bg-gray-50" />
        ) : (
          children
        )}
      </div>
    </div>
  );
};
