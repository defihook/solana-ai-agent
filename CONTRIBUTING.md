# Contributing

We love your input! We want to make contributing to Elyx as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Development Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Build for production:
   ```bash
   pnpm build
   ```

## Code Style Guidelines

- Use TypeScript for all code files
- Follow the existing code style
- Use functional components with TypeScript interfaces
- Implement responsive design with Tailwind CSS
- Optimize for performance using React Server Components where possible
- Keep components small and focused
- Use meaningful variable and function names

### TypeScript Guidelines

- Use interfaces over types when possible
- Avoid using `any`
- Use proper type annotations
- Leverage TypeScript's type inference when appropriate

### Component Structure

```typescript
// Example component structure
import { type FC } from 'react'

interface Props {
  // Props definition
}

export const ComponentName: FC<Props> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  )
}
```

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:

```
feat: add user authentication component
```

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation with details of any changes to the interface
3. The PR may be merged once you have the sign-off of at least one maintainer

## Any contributions you make will be under the MIT Software License

When you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issue tracker](https://github.com/Elyx/Elyx-webapp/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/Elyx/Elyx-webapp/issues/new).

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
