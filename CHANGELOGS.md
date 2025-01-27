# Changelogs

## v0.1.14

- Removed images from Jina scraping results to reduce context bloat
- Improved check for telegram setup when creating an action
- Ensure the telegram botId is passed back into the context when guiding the user on the initial setup

## v0.1.13

- Telegram notification tool
- Discord Privy config, EAP role linking

## v0.1.12

- Utilize PPQ for AI model endpoint

## v0.1.11

- Initial implementation of price charts
- Initial implementation of automated actions (recurring actions configured and executed by the agent)

## v0.1.10

- Message token tracking (model usage) for backend analysis
- Fixes to solana-agent-kit implementation for decimal handling

## v0.1.9

- Use correct messages when trimming the message context for gpt4o

## v0.1.8

- Improve conversation API route usage
- Limit messages in context for AI model usage
- Add confirmation tool for messages that require additional confirmation before executing

## v0.1.7

- Top 10 token holder analysis
- Enhance token swap functionality and update suggestions
- Update layout and component styles for improved responsiveness

## v0.1.6

- Enhance token filtering with advanced metrics
- Improve floating wallet UI
- Optimize `getTokenPrice` tool
- Optimize routing UX (creating new conversation)

## v0.1.5

- Fixed placeholder image for tokens
- Fixed a routing issue after delete conversation
- Integrated [Magic Eden](https://magiceden.io/) APIs
