import { Configuration } from "openai"
import { ChatCompletionMessage } from "ai"

export interface AIConfig {
  provider: "openai" | "anthropic" | "openrouter"
  apiKey: string
  model: string
}

export class AIClient {
  private config: Configuration
  private model: string

  constructor(config: AIConfig) {
    this.config = new Configuration({
      apiKey: config.apiKey,
      basePath: this.getBasePath(config.provider)
    })
    this.model = config.model
  }

  private getBasePath(provider: string): string {
    switch (provider) {
      case "openrouter":
        return "https://openrouter.ai/api/v1"
      case "anthropic":
        return "https://api.anthropic.com/v1"
      default:
        return "https://api.openai.com/v1"
    }
  }

  async chat(messages: ChatCompletionMessage[]) {
    try {
      const response = await fetch(`${this.getBasePath(this.config.provider)}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.config.apiKey}`
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          stream: true
        })
      })
      return response
    } catch (error) {
      throw new Error("Failed to communicate with AI service")
    }
  }
} 