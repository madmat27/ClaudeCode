import { Hook, CATEGORY_COLORS } from "../data/hooks";

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {hook.name}
        </h2>
        <div className="flex shrink-0 flex-wrap gap-1.5">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${CATEGORY_COLORS[hook.category]}`}
          >
            {hook.category}
          </span>
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {hook.event}
          </span>
        </div>
      </div>

      <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {hook.description}
      </p>

      <div className="mt-auto flex items-center justify-between pt-1">
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          by {hook.author}
        </span>
        <a
          href={hook.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}
