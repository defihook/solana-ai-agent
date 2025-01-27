# Local Development Guide

This guide outlines the setup process for running Elyx AI locally.

## Required Configuration

### Essential API Keys

Before starting, you'll need to obtain API keys from the following services:

For Authentication:
- [Privy](https://www.privy.io/) - Create a development application

For AI Model Access (choose one):
- [OpenRouter](https://openrouter.ai/) - Supports crypto payments
- [Anthropic](https://www.anthropic.com/)
- [OpenAI](https://platform.openai.com/)

Additional Required Services:
- [ImgBB](https://api.imgbb.com/) - Image hosting service
- [Jina AI](https://jina.ai/) - URL content retrieval

### Environment Setup

Create a `.env` file with the following configuration:

```
# Required Model Secrets (Either OpenAI compatible or Anthropic directly)

OPENAI_API_KEY=<YOUR_OPENAI_API_KEY> # Recommended from https://openrouter.ai/
OPENAI_BASE_URL=<YOUR_OPENAI_BASE_URL> # Recommended: https://openrouter.ai/
OPENAI_MODEL_NAME=<YOUR_OPENAI_MODEL_NAME> # Recommended: anthropic/claude-3.5-sonnet
# OR
ANTHROPIC_API_KEY=<YOUR_ANTHROPIC_API_KEY>


# Required Secrets
PRIVY_APP_SECRET=<YOUR_PRIVY_APP_SECRET>
WALLET_ENCRYPTION_KEY=<YOUR_WALLET_ENCRYPTION_KEY>
HELIUS_API_KEY=<YOUR_HELIUS_API_KEY> # Helius SDK is used on the backend for smart transactions for swaps

# Optional Secrets (tools might not work)
JINA_API_KEY=<YOUR_JINA_API_KEY> # web scraping
CG_API_KEY=<YOUR_COIN_GECKO_API_KEY> # charts
CG_BASE_URL=<BASE_URL_FOR_COIN_GECKO> # there are different urls for demo vs pro
TELEGRAM_BOT_TOKEN=<YOUR_TG_BOT_TOKEN> # sending notifications through telegram
TELEGRAM_BOT_USERNAME=<YOUR_TG_BOT_USERNAME> # optional, but saves an API call
DISCORD_BOT_TOKEN=<YOUR_DISCORD_BOT_TOKEN> # used for discord integrations
DISCORD_GUILD_ID=<YOUR_DISCORD_GUILD_ID> # used for a specific discord server
DISCORD_ROLE_ID=<YOUR_DISCORD_ROLE_ID> # used for a specific discord role


# Public
Elyx_PUBLIC_MAINTENANCE_MODE=false
Elyx_PUBLIC_DEBUG_MODE=false
Elyx_PUBLIC_PRIVY_APP_ID=<YOUR_PRIVY_APP_ID>
Elyx_PUBLIC_IMGBB_API_KEY=<YOUR_IMGBB_API_KEY>
Elyx_PUBLIC_EAP_RECEIVE_WALLET_ADDRESS=<YOUR_EAP_RECEIVE_WALLET_ADDRESS>
Elyx_PUBLIC_HELIUS_RPC_URL=<YOUR_HELIUS_RPC_URL>

# DB
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
```

For enhanced performance, you can optionally include a private RPC URL from [Helius](https://www.helius.dev/).

### Security Configuration

#### Generating Wallet Encryption Key

Generate a secure encryption key using OpenSSL:

```
openssl rand -base64 32
```

#### EAP Wallet Configuration

For local development, any valid wallet address can be used as the EAP receive address.

## Container Management

For initial setup with a new build:

```
pnpm run dev:up-build
```

For subsequent launches:

```
pnpm run dev:up
```

### Troubleshooting Container Issues

If you encounter dependency-related issues after adding new packages, you may need to perform a clean rebuild. Use these commands to reset your Docker environment:

```
docker ps -a --filter "name=Elyx-app-" --format "{{.ID}}" | xargs -r docker rm -f
docker volume rm Elyx-app_node_modules
docker volume rm Elyx-app
docker builder prune --all
```

## Initial Account Setup

1. Create a new user account through Privy authentication
2. Access the [Prisma Studio](https://github.com/prisma/studio) interface at `http://localhost:5555/`
3. Locate your user record and enable `earlyAccess`

This configuration allows unrestricted local development without requiring SOL transactions.

## Environment Variables
Create a `.env.development` file:

```env
# Database
DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@core-db:5432/Elyxdb_v1
DIRECT_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@core-db:5432/Elyxdb_v1
```