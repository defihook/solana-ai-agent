# Elyx Development Guide

## Overview

Elyx is a next-generation AI platform for blockchain interaction. This guide covers local development setup.

## Prerequisites

- Node.js 18+
- pnpm 8+
- Docker & Docker Compose
- OpenSSL

## Quick Start

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Set up environment:
```bash
./scripts/setup-env.sh
```

4. Start development servers:
```bash
pnpm dev
```

## Architecture

The project uses a modular monorepo structure:

- `/apps/web` - Main web application
- `/apps/admin` - Admin interface
- `/packages/ui` - Shared UI components
- `/tools` - Development utilities

## Development Workflow

1. Create feature branch
2. Make changes
3. Run tests: `pnpm test`
4. Submit PR

## Environment Configuration

Required services:
- Authentication: Privy
- AI: OpenRouter/Anthropic/OpenAI
- Storage: ImgBB
- Data: Jina AI

Create `.env.development`:

```env
# Core
NODE_ENV=development
PORT=3001

# AI Provider (choose one)
AI_PROVIDER=openrouter
AI_API_KEY=your_key
AI_MODEL=claude-3-sonnet

# Auth & Security
AUTH_SECRET=your_secret
WALLET_KEY=your_key

# Services
STORAGE_KEY=imgbb_key
DATA_KEY=jina_key

# Database
DB_USER=admin
DB_PASS=local_dev
```

## Container Management

Start development environment:
```bash
pnpm dev:start
```

Reset environment:
```bash
pnpm dev:reset
```

## Initial Setup

1. Start services
2. Create admin account
3. Enable development mode
4. Configure wallet

## Additional Resources

- [Architecture Overview](./architecture.md)
- [API Documentation](./api.md)
- [Testing Guide](./testing.md) 