export interface AIConfig {
  provider: "openrouter" | "anthropic" | "openai"
  apiKey: string
  modelId: string
  baseUrl?: string
}

export interface Message {
  role: "user" | "assistant" | "system"
  content: string
}

export interface CompletionResponse {
  id: string
  choices: Array<{
    message: Message
    finish_reason: string
  }>
} 