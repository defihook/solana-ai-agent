import { useState, useCallback } from "react"
import { IntelligenceAgent } from "@/core/intelligence"
import type { DialogueMessage, DialogueState } from "@/core/types"

export function useDialogue() {
  const [state, setState] = useState<DialogueState>({
    messages: [],
    isLoading: false,
    error: null,
  })

  const sendMessage = useCallback(async (content: string) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
    }))

    try {
      const userMessage: DialogueMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content,
        timestamp: Date.now(),
      }

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
      }))

      // Implement AI dialogue logic here

    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error as Error,
      }))
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }))
    }
  }, [])

  return {
    ...state,
    sendMessage,
  }
} 