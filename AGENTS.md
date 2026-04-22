# AGENTS.md

## Project Overview
Vanilla JavaScript / AJAX demo project. Uses the browser `fetch` API with `async/await` to call remote weather APIs.

## Agents

### planner
- File: `agents/planner.md`
- Use in **Plan mode** (TAB) before any new feature or refactor
- Always run planner first, review the plan, then switch to Build mode

### typescript-reviewer (code reviewer)
- File: `agents/typescript-reviewer.md`
- Run via `/code-review` before committing or pushing
- Checks for async errors, CORS issues, and exposed secrets

## MCP Servers
| Server | Purpose |
|--------|---------|
| `context7` | Live docs for fetch API, browser APIs, JS libraries |
| `playwright` | End-to-end browser testing |

## Quick Reference
```
TAB          toggle Plan / Build mode
/code-review run the reviewer agent
/undo        revert last change
/share       share session with team
/model       switch model (e.g. /model qwen3.5-plus)
```

## Model Guide
| Task | Model |
|------|-------|
| Feature generation | `kimi-k2-6` (promo ends Apr 27) |
| Quick edits | `qwen3.5-plus` |
| Complex iteration | `qwen3.6-plus` |
