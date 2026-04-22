# Project Instructions

## Stack
- Vanilla JavaScript (ES2020+) with async/await
- Browser fetch API for HTTP requests
- No build step — plain HTML + JS

## Code Style
- Use `async/await` over `.then()` chains
- Always wrap `await` in `try/catch`
- Prefer `const` / `let`, never `var`
- Keep functions small and single-purpose

## AJAX / Fetch Patterns
- Use the native `fetch` API
- Parse JSON with `response.json()`
- Handle errors with `try/catch` — no silent failures
- Never expose API keys in client-side code

## Testing
- Use Playwright for end-to-end browser tests
- Cover the happy path and at least one error/edge case per fetch call

## Model Reference
| Task | Model |
|------|-------|
| Feature generation, Figma-to-code | `kimi-k2-6` |
| Quick edits, copy changes | `qwen3.5-plus` |
| Docs, complex iteration | `qwen3.6-plus` |
