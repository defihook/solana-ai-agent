"use client"

import { createContext, useContext, useEffect, useState } from "react"

type AppearanceMode = "dark" | "light" | "system"

interface AppearanceState {
  mode: AppearanceMode
  setMode: (mode: AppearanceMode) => void
}

const AppearanceContext = createContext<AppearanceState>({
  mode: "system",
  setMode: () => null,
})

export function AppearanceProvider({
  children,
  defaultMode = "system",
}: {
  children: React.ReactNode
  defaultMode?: AppearanceMode
}) {
  const [mode, setMode] = useState<AppearanceMode>(defaultMode)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (mode === "system") {
      const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      root.classList.add(systemMode)
      return
    }

    root.classList.add(mode)
  }, [mode])

  return (
    <AppearanceContext.Provider value={{ mode, setMode }}>
      {children}
    </AppearanceContext.Provider>
  )
}

export const useAppearance = () => {
  const context = useContext(AppearanceContext)
  if (!context) throw new Error("useAppearance must be used within AppearanceProvider")
  return context
} 