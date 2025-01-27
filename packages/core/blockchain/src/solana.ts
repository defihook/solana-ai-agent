import { Connection, PublicKey, Transaction } from "@solana/web3.js"
import { toast } from "@/shared/ui/toaster"

export interface BlockchainConfig {
  endpoint: string
  commitment: "processed" | "confirmed" | "finalized"
}

export class SolanaClient {
  private connection: Connection
  
  constructor(config: BlockchainConfig) {
    this.connection = new Connection(config.endpoint, {
      commitment: config.commitment
    })
  }

  async getBalance(address: string): Promise<number> {
    try {
      const pubkey = new PublicKey(address)
      const balance = await this.connection.getBalance(pubkey)
      return balance / 1e9
    } catch (error) {
      toast.error("Failed to fetch balance")
      return 0
    }
  }

  async getTokenAccounts(owner: string) {
    try {
      const pubkey = new PublicKey(owner)
      const accounts = await this.connection.getParsedTokenAccountsByOwner(pubkey, {
        programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
      })
      return accounts.value
    } catch (error) {
      toast.error("Failed to fetch token accounts")
      return []
    }
  }
} 