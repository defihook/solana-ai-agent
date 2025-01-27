export interface Asset {
  address: string
  mint: string
  amount: number
  decimals: number
  symbol?: string
  name?: string
  icon?: string
}

export interface TokenAccount extends Asset {
  logo?: string
}

export interface AssetBalance {
  address: string
  balance: number
}

export interface AssetMetadata {
  symbol: string
  name: string
  decimals: number
  icon?: string
} 