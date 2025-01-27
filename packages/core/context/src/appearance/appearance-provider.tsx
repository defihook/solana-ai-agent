"use client"

import { AppearanceProvider as Provider } from "./appearance-context"

export function AppearanceProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>
} 