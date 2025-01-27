export interface Asset {
  address: string
  mint: string
  amount: number
  decimals: number
  symbol?: string
  name?: string
  icon?: string
}

export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: number
}

export interface ConversationState {
  messages: Message[]
  isLoading: boolean
  error: Error | null
}

export interface ChainConfig {
  endpoint: string
  commitment: "processed" | "confirmed" | "finalized"
}

export interface AgentConfig {
  provider: "openrouter" | "anthropic" | "openai"
  apiKey: string
  modelId: string
} 