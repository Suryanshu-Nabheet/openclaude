# OpenClaude

### AI Coding Agent for the Terminal
**Developed by Suryanshu Nabheet**

---

OpenClaude is a professional-grade, CLI agent designed for software engineering tasks. It provides a unified interface to leverage Large Language Models (LLMs) for complex debugging, feature implementation, and architectural refactoring directly within the terminal environment.

## Key Capabilities

- **Autonomous Engineering**: Executes multi-turn engineering workflows to resolve issues with high precision.
- **Extensive Model Support**: Integrated support for Anthropic Claude, OpenAI GPT, Google Gemini, DeepSeek, and local providers via Ollama.
- **Professional Toolset**: Includes 45+ built-in tools for file manipulation, shell execution, and system diagnostics.
- **MCP Compatibility**: Full implementation of the Model Context Protocol (MCP) for extensible tool and resource integration.
- **Privacy and Security**: Default zero-telemetry architecture ensuring all data remains within the local environment.
- **High Performance**: Compiled with Bun for minimal execution latency and optimal resource utilization.

---

## Installation

### Prerequisites
- Bun runtime environment
- Node.js version 22 or later

### Setup Process

```bash
# Clone the repository
git clone https://github.com/SuryanshuNabheet/openclaude.git
cd openclaude

# Initialize the environment
bun run init
```

## Execution

Configure the preferred API provider and launch the agent:

```bash
# Using Anthropic Claude
export ANTHROPIC_API_KEY="your_key_here"
./bin/openclaude

# Using OpenAI
export OPENAI_API_KEY="your_key_here"
./bin/openclaude --provider openai

# Using Local Ollama Models
./bin/openclaude --provider ollama --model llama3.2
```

---

## Documentation and Governance

Detailed information regarding architecture, contribution standards, and security policies is available in the `docs` directory:

- [Architecture Overview](docs/ARCHITECTURE.md)
- [Project Guidelines](docs/OPENCLAUDE.md)
- [Contribution Guide](docs/CONTRIBUTING.md)
- [Code of Conduct](docs/CODE_OF_CONDUCT.md)
- [Security Policy](docs/SECURITY.md)

---

## License

This project is licensed under the MIT License. Refer to the [LICENSE](LICENSE) file for the complete legal text.

Copyright (c) 2026 Suryanshu Nabheet.
