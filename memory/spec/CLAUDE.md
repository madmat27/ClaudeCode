# HookHub MVP Spec

## Overview

HookHub is a browse-only directory for discovering open-source Claude Code hooks. Users visit a single page, browse hooks in a card grid, filter by category, and search by name or description. Clicking a hook links out to its GitHub repo.

**MVP scope**: Display hooks. No auth, no backend API, no user submissions, no database. All data is a static TypeScript array.

## Data Model

```typescript
type Category = "security" | "formatting" | "notification" | "automation" | "logging" | "context" | "utility"

type HookEvent = "PreToolUse" | "PostToolUse" | "PostToolUseFailure" | "UserPromptSubmit" | "SessionStart" | "SessionEnd" | "Notification" | "Stop" | "SubagentStop" | "ConfigChange" | "PermissionRequest"

interface Hook {
  id: string            // unique slug, e.g. "britfix"
  name: string          // display name, e.g. "Britfix"
  description: string   // 1-2 sentence summary
  category: Category
  author: string        // GitHub username or display name
  repoUrl: string       // full URL to GitHub repo
  event: HookEvent      // primary lifecycle event the hook targets
}
```

## Categories

| Category       | Description                                        |
|----------------|----------------------------------------------------|
| security       | Block dangerous operations, scan for injection     |
| formatting     | Auto-format, lint, enforce naming conventions       |
| notification   | Desktop alerts, sounds, Slack/email notifications   |
| automation     | Auto-approve safe commands, auto-commit, CI triggers|
| logging        | Audit trails, session logs, config change tracking  |
| context        | Inject context on session start or after compaction |
| utility        | Misc helpers, SDKs, dev tooling                     |

## Page Layout (single page: `/`)

### Header
- App name: **"HookHub"**
- Tagline: "Discover Claude Code Hooks"

### Category Filter Bar
- Horizontal row of pill buttons, one per category + "All" (default active)
- Clicking a pill filters the grid to that category
- Active pill has distinct styling (filled vs outlined)
- Horizontally scrollable on mobile

### Search Bar
- Text input with placeholder "Search hooks..."
- Live client-side filtering on `name` and `description` fields
- Works in combination with category filter (intersection)

### Hook Grid
- Responsive CSS grid: 1 column on mobile, 2 on tablet (>=768px), 3 on desktop (>=1024px)
- Gap between cards for readability

### Footer
- Minimal: "Built for the Claude Code community"

## Hook Card Design

Each card displays:

1. **Hook name** — bold, prominent, top of card
2. **Category badge** — small colored pill (each category has a distinct color)
3. **Event badge** — secondary pill showing the hook event (e.g. "PreToolUse")
4. **Description** — 2-3 lines max, truncated with ellipsis if longer
5. **Author** — prefixed with "by" in muted text
6. **"View on GitHub" link** — opens `repoUrl` in a new tab (`target="_blank" rel="noopener noreferrer"`)

Cards should have: rounded corners, subtle border or shadow, hover lift effect.

## Interactions

- **Category filter**: click pill to filter; click "All" to reset
- **Search**: live text filtering as user types (no submit button)
- **Combined filtering**: category + search work together (both must match)
- **GitHub link**: opens in new tab
- **Empty state**: show a message when no hooks match the current filter/search

## File Structure

```
app/
  data/
    hooks.ts              # Hook type, Category type, HookEvent type, CATEGORIES array, HOOKS seed data
  components/
    HookCard.tsx          # Single hook card (server component)
    CategoryFilter.tsx    # Category pill bar (client component)
    SearchBar.tsx         # Search input (client component)
    HookGrid.tsx          # Grid wrapper owning filter + search state (client component, "use client")
  page.tsx                # Home page: header + HookGrid + footer
  layout.tsx              # Update metadata title/description
  globals.css             # Tailwind theme adjustments if needed
```

## Seed Data

Populate `hooks.ts` with ~15 real hooks from the community:

| Name                   | Category      | Event              | Author          | Source                                            |
|------------------------|---------------|--------------------|-----------------|---------------------------------------------------|
| Britfix                | formatting    | PostToolUse        | Talieisin       | github.com/Talieisin/britfix                      |
| CC Notify              | notification  | Notification       | dazuiba         | github.com/nicobailon/cc-notify                   |
| Parry                  | security      | UserPromptSubmit   | nicobailon      | github.com/nicobailon/parry                       |
| Dippy                  | automation    | PreToolUse         | lilydalton      | github.com/lilydalton/dippy                       |
| Bundler Standard       | automation    | PreToolUse         | boxabirds       | github.com/boxabirds/awesome-hooks                |
| File Name Consistency  | formatting    | PostToolUse        | boxabirds       | github.com/boxabirds/awesome-hooks                |
| Claude Hook Comms      | utility       | PreToolUse         | nicobailon      | github.com/nicobailon/hcom                        |
| cchooks SDK            | utility       | PreToolUse         | GowayLee        | github.com/GowayLee/cchooks                       |
| Auto-Format on Save    | formatting    | PostToolUse        | community       | github.com/rohitg00/awesome-claude-code-toolkit   |
| Protected Files Guard  | security      | PreToolUse         | community       | github.com/disler/claude-code-hooks-mastery       |
| Session Context Inject | context       | SessionStart       | community       | github.com/disler/claude-code-hooks-mastery       |
| Config Change Audit    | logging       | ConfigChange       | community       | github.com/disler/claude-code-hooks-mastery       |
| Permission Auditor     | logging       | PermissionRequest  | community       | github.com/disler/claude-code-hooks-mastery       |
| Stop Auto-Commit       | automation    | Stop               | community       | github.com/disler/claude-code-hooks-mastery       |
| Subagent Tracker       | logging       | SubagentStop       | community       | github.com/disler/claude-code-hooks-mastery       |

## Verification

1. `npm run dev` — page loads at localhost:3000
2. Grid renders all hook cards with correct data
3. Category filter pills work (click filters grid, "All" resets)
4. Search filters by name and description in real time
5. Combined filter + search narrows results correctly
6. Empty state shows when nothing matches
7. "View on GitHub" links open correct repos in new tabs
8. Responsive: 1 col mobile, 2 col tablet, 3 col desktop
9. `npm run build` — no build errors
10. `npm run lint` — no lint errors
