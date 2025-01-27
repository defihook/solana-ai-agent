export interface ChainConfig {
  endpoint: string
  commitment: "processed" | "confirmed" | "finalized"
}

export interface TokenData {
  address: string
  mint: string
  amount: number
  decimals: number
  symbol?: string
  name?: string
  logo?: string
}

export interface TransactionConfig {
  maxRetries?: number
  skipPreflight?: boolean
  preflightCommitment?: "processed" | "confirmed" | "finalized"
} 