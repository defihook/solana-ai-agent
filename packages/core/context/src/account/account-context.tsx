"use client"

import { createContext, useContext, useState } from "react"
import { PublicKey } from "@solana/web3.js"
import { LedgerClient } from "@/core/chain"

interface AccountState {
  connected: boolean
  publicKey: PublicKey | null
  connect: () => Promise<void>
  disconnect: () => Promise<void>
}

const AccountContext = createContext<AccountState>({
  connected: false,
  publicKey: null,
  connect: async () => {},
  disconnect: async () => {},
})

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null)

  const connect = async () => {
    try {
      // Implement connection logic
    } catch (error) {
      console.error("Failed to connect:", error)
    }
  }

  const disconnect = async () => {
    try {
      // Implement disconnection logic
    } catch (error) {
      console.error("Failed to disconnect:", error)
    }
  }

  return (
    <AccountContext.Provider
      value={{
        connected: !!publicKey,
        publicKey,
        connect,
        disconnect,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export const useAccount = () => {
  const context = useContext(AccountContext)
  if (!context) throw new Error("useAccount must be used within AccountProvider")
  return context
} 