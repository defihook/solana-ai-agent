export * from './dialogue'
export * from './asset'

export interface Asset {
  address: string
  mint: string
  amount: number
  decimals: number
  symbol?: string
  name?: string
  icon?: string
}

export interface AppConfig {
  endpoint: string
  commitment: "processed" | "confirmed" | "finalized"
}

export interface TokenAccount {
  address: string
  mint: string
  amount: number
  decimals: number
  symbol?: string
  name?: string
  logo?: string
}

export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: number
}

export interface ChatState {
  messages: Message[]
  isLoading: boolean
  error: Error | null
} 