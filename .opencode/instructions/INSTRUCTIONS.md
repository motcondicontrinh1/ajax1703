# Project Instructions

## Stack
- Vanilla JavaScript (ES2020+) with async/await
- Browser fetch API for HTTP requests
- No build step — plain HTML + JS

## Code Style
- Use `async/await` over `.then()` chains
- Always wrap `await` calls in `try/catch`
- Prefer `const` / `let`, never `var`
- Keep functions small and single-purpose

## AJAX Patterns
- Use the native `fetch` API
- Parse JSON with `response.json()`
- Surface errors via `console.error` in development; user-facing `alert` only as a last resort
- Never expose raw API keys in client-side code

## Testing
- Use Playwright for end-to-end browser tests
- Test the happy path and at least one error/edge case per fetch call

## Model Usage
| Task | Model |
|------|-------|
| Component / feature generation | `kimi-k2-6` |
| Quick edits, copy changes | `qwen3.5-plus` |
| Complex iteration / docs | `qwen3.6-plus` |
