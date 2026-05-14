# OpenClaude

**A powerful CLI agent for building software with any LLM.**

OpenClaude is a terminal-first coding agent that works with OpenAI, Gemini, DeepSeek, Ollama, and 200+ models. Build software interactively with AI-powered tools for file editing, code search, bash execution, web search, and multi-agent workflows — all from your terminal.

## Quick Start

### Install

```bash
npm install -g openclaude
```

### Run

```bash
openclaude
```

### OpenAI Setup

```bash
export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_API_KEY=sk-your-key-here
export OPENAI_MODEL=gpt-4o
openclaude
```

### Local Ollama Setup

```bash
export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_BASE_URL=http://localhost:11434/v1
export OPENAI_MODEL=qwen2.5-coder:7b
openclaude
```

## Features

- **Multi-Provider Support** — OpenAI, Gemini, DeepSeek, Ollama, Bedrock, Vertex, and any OpenAI-compatible API
- **Tool-Driven Workflows** — Bash, file read/write/edit, grep, glob, web search/fetch
- **Multi-Agent System** — Spawn sub-agents for parallel task execution
- **MCP Support** — Model Context Protocol for extensible tool integrations
- **Streaming Output** — Real-time token streaming with tool progress
- **Provider Profiles** — Save and switch between provider configurations with `/provider`
- **Skills & Plugins** — Extensible skill and plugin system
- **Task Management** — Create, track, and manage coding tasks
- **gRPC Server** — Run as a headless service for CI/CD and custom integrations

## Supported Providers

| Provider | Setup |
|----------|-------|
| OpenAI-compatible | `/provider` or env vars |
| Gemini | `/provider` or env vars |
| Ollama | `/provider` or env vars |
| DeepSeek | OpenAI-compatible route |
| GitHub Models | `/onboard-github` |
| AWS Bedrock | env vars |
| Google Vertex AI | env vars |
| LM Studio | OpenAI-compatible route |

## Development

### Source Build

```bash
bun install
bun run build
node dist/cli.mjs
```

### Development Commands

```bash
bun run dev          # Build and run
bun test             # Run tests
bun run smoke        # Smoke test
bun run typecheck    # Type checking
```

## Project Structure

```
src/           Core CLI agent runtime
├── commands/  Slash commands
├── tools/     AI tool implementations
├── services/  Background services
├── components/  UI components (Ink/React)
├── integrations/  Provider integrations
├── utils/     Utilities
scripts/       Build and maintenance scripts
bin/           CLI launcher entrypoint
tests/         Test suite
```

## Configuration

Copy `.env.example` to `.env` and configure your provider. See the example file for all supported providers and options.

## License

[MIT](LICENSE) — Suryanshu Nabheet

## Author

**Suryanshu Nabheet**
