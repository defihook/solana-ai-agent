import { Connection, PublicKey } from "@solana/web3.js"
import { notify } from "@/shared/ui/notification"

export interface ChainConfig {
  endpoint: string
  commitment: "processed" | "confirmed" | "finalized"
}

export class LedgerClient {
  private connection: Connection
  
  constructor(config: ChainConfig) {
    this.connection = new Connection(config.endpoint, {
      commitment: config.commitment
    })
  }

  async fetchBalance(address: string): Promise<number> {
    try {
      const pubkey = new PublicKey(address)
      const balance = await this.connection.getBalance(pubkey)
      return balance / 1e9
    } catch (error) {
      notify({ title: "Error", description: "Failed to fetch balance" })
      return 0
    }
  }

  async fetchTokens(owner: string) {
    try {
      const pubkey = new PublicKey(owner)
      const tokens = await this.connection.getParsedTokenAccountsByOwner(pubkey, {
        programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
      })
      return tokens.value
    } catch (error) {
      notify({ title: "Error", description: "Failed to fetch tokens" })
      return []
    }
  }
} 