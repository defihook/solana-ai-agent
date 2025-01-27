import type { AIConfig, Message, CompletionResponse } from "./types"

export class IntelligenceAgent {
  private config: AIConfig

  constructor(config: AIConfig) {
    this.config = {
      ...config,
      baseUrl: this.getEndpoint(config.provider)
    }
  }

  private getEndpoint(provider: string): string {
    const endpoints = {
      openrouter: "https://openrouter.ai/api/v1",
      anthropic: "https://api.anthropic.com/v1",
      openai: "https://api.openai.com/v1"
    }
    return endpoints[provider] || endpoints.openai
  }

  async process(messages: Message[]): Promise<Response> {
    try {
      return await fetch(`${this.config.baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.config.apiKey}`
        },
        body: JSON.stringify({
          model: this.config.modelId,
          messages,
          stream: true
        })
      })
    } catch (error) {
      throw new Error("Intelligence service communication failed")
    }
  }
} 