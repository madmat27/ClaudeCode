export type Category =
  | "security"
  | "formatting"
  | "notification"
  | "automation"
  | "logging"
  | "context"
  | "utility";

export type HookEvent =
  | "PreToolUse"
  | "PostToolUse"
  | "PostToolUseFailure"
  | "UserPromptSubmit"
  | "SessionStart"
  | "SessionEnd"
  | "Notification"
  | "Stop"
  | "SubagentStop"
  | "ConfigChange"
  | "PermissionRequest";

export interface Hook {
  id: string;
  name: string;
  description: string;
  category: Category;
  author: string;
  repoUrl: string;
  event: HookEvent;
}

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: "security", label: "Security" },
  { value: "formatting", label: "Formatting" },
  { value: "notification", label: "Notification" },
  { value: "automation", label: "Automation" },
  { value: "logging", label: "Logging" },
  { value: "context", label: "Context" },
  { value: "utility", label: "Utility" },
];

export const CATEGORY_COLORS: Record<Category, string> = {
  security: "bg-red-100 text-red-700",
  formatting: "bg-blue-100 text-blue-700",
  notification: "bg-purple-100 text-purple-700",
  automation: "bg-green-100 text-green-700",
  logging: "bg-yellow-100 text-yellow-700",
  context: "bg-orange-100 text-orange-700",
  utility: "bg-zinc-100 text-zinc-700",
};

export const HOOKS: Hook[] = [
  {
    id: "britfix",
    name: "Britfix",
    description:
      "Automatically converts code comments and strings to British English spelling after each edit.",
    category: "formatting",
    author: "Talieisin",
    repoUrl: "https://github.com/Talieisin/britfix",
    event: "PostToolUse",
  },
  {
    id: "cc-notify",
    name: "CC Notify",
    description:
      "Sends desktop notifications when Claude Code needs your attention, with one-click navigation back to the session.",
    category: "notification",
    author: "dazuiba",
    repoUrl: "https://github.com/nicobailon/cc-notify",
    event: "Notification",
  },
  {
    id: "parry",
    name: "Parry",
    description:
      "Scans incoming user prompts for prompt injection attempts before Claude processes them.",
    category: "security",
    author: "nicobailon",
    repoUrl: "https://github.com/nicobailon/parry",
    event: "UserPromptSubmit",
  },
  {
    id: "dippy",
    name: "Dippy",
    description:
      "Auto-approves safe bash commands using AST parsing, reducing interruptions without sacrificing safety.",
    category: "automation",
    author: "lilydalton",
    repoUrl: "https://github.com/lilydalton/dippy",
    event: "PreToolUse",
  },
  {
    id: "bundler-standard",
    name: "Bundler Standard",
    description:
      "Intercepts npm commands and replaces them with Bun equivalents, enforcing consistent package management.",
    category: "automation",
    author: "boxabirds",
    repoUrl: "https://github.com/boxabirds/awesome-hooks",
    event: "PreToolUse",
  },
  {
    id: "file-name-consistency",
    name: "File Name Consistency",
    description:
      "Validates newly created file names against your project's naming convention (snake_case, camelCase, or kebab-case) and flags violations.",
    category: "formatting",
    author: "boxabirds",
    repoUrl: "https://github.com/boxabirds/awesome-hooks",
    event: "PostToolUse",
  },
  {
    id: "claude-hook-comms",
    name: "Claude Hook Comms",
    description:
      "A communication framework (HCOM) enabling structured message passing between hooks and Claude Code sessions.",
    category: "utility",
    author: "nicobailon",
    repoUrl: "https://github.com/nicobailon/hcom",
    event: "PreToolUse",
  },
  {
    id: "cchooks-sdk",
    name: "cchooks SDK",
    description:
      "A Python SDK that simplifies hook development with typed event models, helpers, and a testing harness.",
    category: "utility",
    author: "GowayLee",
    repoUrl: "https://github.com/GowayLee/cchooks",
    event: "PreToolUse",
  },
  {
    id: "protected-files-guard",
    name: "Protected Files Guard",
    description:
      "Blocks Claude from editing or deleting files that match a configurable protect-list, preventing accidental overwrites.",
    category: "security",
    author: "disler",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    event: "PreToolUse",
  },
  {
    id: "session-context-inject",
    name: "Session Context Inject",
    description:
      "Injects project-specific context (conventions, tech stack, rules) into every new or resumed session automatically.",
    category: "context",
    author: "disler",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    event: "SessionStart",
  },
  {
    id: "config-change-audit",
    name: "Config Change Audit",
    description:
      "Logs every change to Claude Code settings files with a timestamp and source, building an immutable audit trail.",
    category: "logging",
    author: "disler",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    event: "ConfigChange",
  },
  {
    id: "permission-auditor",
    name: "Permission Auditor",
    description:
      "Records every permission request Claude makes, including which tool triggered it and what was approved or denied.",
    category: "logging",
    author: "disler",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    event: "PermissionRequest",
  },
  {
    id: "stop-auto-commit",
    name: "Stop Auto-Commit",
    description:
      "Automatically runs git add and git commit when Claude finishes a session, capturing all changes made during the conversation.",
    category: "automation",
    author: "disler",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    event: "Stop",
  },
  {
    id: "subagent-tracker",
    name: "Subagent Tracker",
    description:
      "Tracks subagent lifecycles and logs completion times, token usage, and outcomes to a structured JSON log file.",
    category: "logging",
    author: "disler",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    event: "SubagentStop",
  },
  {
    id: "auto-format-on-save",
    name: "Auto-Format on Save",
    description:
      "Runs Prettier on any file Claude edits or creates, ensuring consistent code formatting without manual intervention.",
    category: "formatting",
    author: "rohitg00",
    repoUrl: "https://github.com/rohitg00/awesome-claude-code-toolkit",
    event: "PostToolUse",
  },
];
