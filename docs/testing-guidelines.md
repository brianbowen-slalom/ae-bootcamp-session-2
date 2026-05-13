# Testing Guidelines

## Purpose
These guidelines define the testing approach for the TODO app to maintain code quality, reliability, and confidence in changes.

## General Principles
- All new features must include appropriate tests.
- Tests should be maintainable, readable, and focused on behavior.
- Tests must be isolated and independent from one another.
- Use setup and teardown hooks where needed so tests are repeatable across runs.

## Unit Tests
- Use Jest for unit tests.
- File naming must follow `*.test.js` or `*.test.ts`.
- Backend unit tests belong in `packages/backend/__tests__/`.
- Frontend unit tests belong in `packages/frontend/src/__tests__/`.
- Name files to match what they test (for example, `app.test.js` for `app.js`).

## Integration Tests
- Use Jest + Supertest for backend API endpoint integration tests.
- File naming must follow `*.test.js` or `*.test.ts`.
- Place integration tests in `packages/backend/__tests__/integration/`.
- Name files based on coverage scope (for example, `todos-api.test.js`).

## End-to-End Tests
- Use Playwright as the required E2E framework.
- File naming must follow `*.spec.js` or `*.spec.ts`.
- Place E2E tests in `tests/e2e/`.
- Name files by user journey (for example, `todo-workflow.spec.js`).
- Use one browser only for Playwright tests.
- Use the Page Object Model (POM) pattern.
- Limit E2E coverage to 5-8 critical user journeys focused on core flows and key edge cases.

## Port Configuration
- Always use environment variables with sensible defaults for ports.
- Backend standard: `const PORT = process.env.PORT || 3030;`
- Frontend uses React default port 3000 and can be overridden with `PORT`.
- This supports CI/CD workflows that dynamically assign ports.
