"use client"

import { AccountProvider as Provider } from "./account-context"
import { LedgerClient } from "@/core/chain"

export function AccountProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      {children}
    </Provider>
  )
} 