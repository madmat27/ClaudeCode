"use client";

import { useState } from "react";
import { HOOKS, Category } from "../data/hooks";
import HookCard from "./HookCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

export default function HookGrid() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [search, setSearch] = useState("");

  const filtered = HOOKS.filter((hook) => {
    const matchesCategory =
      activeCategory === null || hook.category === activeCategory;
    const query = search.toLowerCase();
    const matchesSearch =
      query === "" ||
      hook.name.toLowerCase().includes(query) ||
      hook.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 py-20 text-center">
          <p className="text-zinc-500 dark:text-zinc-400">
            No hooks match your search.
          </p>
          <button
            onClick={() => {
              setActiveCategory(null);
              setSearch("");
            }}
            className="text-sm text-zinc-400 underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((hook) => (
            <HookCard key={hook.id} hook={hook} />
          ))}
        </div>
      )}
    </div>
  );
}
