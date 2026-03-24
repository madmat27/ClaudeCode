"use client";

import { Category, CATEGORIES } from "../data/hooks";

interface CategoryFilterProps {
  active: Category | null;
  onChange: (category: Category | null) => void;
}

export default function CategoryFilter({
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      <button
        onClick={() => onChange(null)}
        className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          active === null
            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            : "border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
        }`}
      >
        All
      </button>
      {CATEGORIES.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
            active === value
              ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
              : "border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
