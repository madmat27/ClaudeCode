import HookGrid from "./components/HookGrid";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            HookHub
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Discover Claude Code Hooks
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <HookGrid />
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-zinc-400 dark:text-zinc-600">
            Built for the Claude Code community
          </p>
        </div>
      </footer>
    </div>
  );
}
