# Coding Guidelines

## Purpose
These guidelines establish coding standards and best practices to ensure our codebase is maintainable, scalable, and consistent across frontend and backend.

## General Principles

### DRY (Don't Repeat Yourself)
- Extract common logic into reusable functions, modules, or components.
- Avoid duplicating code across files or layers.
- When you find yourself writing similar code patterns, refactor into a utility or helper function.
- Use mixins, composition, or inheritance appropriately to share behavior.

### SOLID Principles
- **S**ingle Responsibility: Each function, component, or module should have one reason to change.
- **O**pen/Closed: Code should be open for extension but closed for modification.
- **L**iskov Substitution: Subtypes should be substitutable for their base types.
- **I**nterface Segregation: Clients should not depend on interfaces they don't use.
- **D**ependency Inversion: Depend on abstractions, not concrete implementations.

### Keep It Simple (KISS)
- Write clear, straightforward code that solves the problem directly.
- Avoid over-engineering; complexity should be justified by business requirements.
- Use established patterns rather than inventing custom solutions.

## Code Style and Formatting

### JavaScript/Node.js
- Use consistent indentation (2 spaces).
- Use meaningful variable and function names; avoid single-letter variables except for loop counters.
- Use `const` by default, `let` for reassignable variables, and avoid `var`.
- Use arrow functions for callbacks and simple operations; use `function` for named declarations.
- Use template literals for string interpolation instead of concatenation.

### React Components
- Use functional components and hooks (not class components).
- Name components with PascalCase.
- Keep components focused on a single concern.
- Extract complex logic into custom hooks.
- Use prop destructuring to make dependencies clear.
- Place prop validation or TypeScript types at the component file top.

### CSS/Styling
- Use descriptive class names that reflect purpose, not appearance (e.g., `.primary-button`, not `.blue-button`).
- Keep selectors as simple as possible; avoid deep nesting.
- Group related styles and use comments to organize sections.
- Use CSS variables for colors, spacing, and other design tokens.

## Naming Conventions

- **Functions/Methods**: camelCase, action-based names (e.g., `fetchItems`, `handleSubmit`, `validateEmail`).
- **Constants**: UPPER_SNAKE_CASE for module-level constants.
- **Classes/Components**: PascalCase.
- **Files**: Use kebab-case for file names (e.g., `todo-item.js`, `api-client.js`), except for components which may use PascalCase.
- **Boolean variables**: Prefix with `is`, `has`, `can`, or `should` (e.g., `isLoading`, `hasError`).

## Error Handling

- Always handle errors explicitly; avoid silent failures.
- Provide meaningful error messages for debugging and user feedback.
- Use try-catch blocks for async operations and error-prone code.
- Log errors with context (not just the message, but relevant state/data).
- Return consistent error shapes (e.g., `{ error: string, code?: string }`).

## Comments and Documentation

- Write self-documenting code; let code structure and naming convey intent.
- Add comments for "why" decisions, not "what" the code does.
- Document public functions and complex algorithms with JSDoc-style comments.
- Keep comments up-to-date; outdated comments are worse than none.
- Use TODO comments sparingly and link them to issues/tickets when possible.

## Performance Considerations

- Avoid unnecessary re-renders in React (use memoization, proper dependency arrays).
- Optimize database queries; avoid N+1 problems.
- Use pagination/virtualization for large lists.
- Minimize bundle size by lazy-loading components when appropriate.
- Profile performance before optimizing; measure impact of changes.

## API and Data

- Use consistent HTTP status codes (200 for success, 400 for client error, 500 for server error, etc.).
- Return consistent JSON response shapes across endpoints.
- Validate and sanitize all inputs at API boundaries.
- Use meaningful query parameter names and document their expected formats.
- Version APIs if breaking changes are needed; deprecate old versions gracefully.

## Git Workflow

- Write clear, descriptive commit messages (imperative mood: "Add feature" not "Added feature").
- Keep commits focused on a single logical change; avoid mixing unrelated changes.
- Use feature branches for new work; never commit directly to main.
- Rebase or squash commits before merging to keep history clean.
- Tag releases with semantic versioning.

## Code Review and Collaboration

- Request reviews for all pull requests; aim for at least one approval before merging.
- Be respectful and constructive in review feedback; ask questions rather than making demands.
- Assume good intent; clarify ambiguous comments in person if needed.
- Address all review comments or explain why they're not applicable.
- Keep pull requests reasonably sized (aim for under 400 lines of meaningful changes).

## Testing and Quality

- Write tests alongside code; aim for high coverage of business logic.
- Follow the AAA pattern: Arrange, Act, Assert.
- Test behavior, not implementation details.
- Use descriptive test names that explain what is being tested.
- Avoid test interdependencies; each test should be runnable independently.
- Use mocks/stubs appropriately to isolate units under test.

## Security Basics

- Never commit sensitive data (API keys, passwords); use environment variables.
- Validate and escape user input to prevent injection attacks.
- Use HTTPS for all external communication.
- Keep dependencies up-to-date; monitor for security vulnerabilities.
- Implement proper authentication and authorization checks.

## Documentation

- Maintain a README at the project root with setup and development instructions.
- Document public APIs, key modules, and non-obvious patterns.
- Update docs when requirements, architecture, or APIs change.
- Use inline comments judiciously for complex algorithms or counterintuitive solutions.
- Keep runbooks for common operations and troubleshooting.
