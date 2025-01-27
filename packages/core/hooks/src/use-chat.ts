import { useState, useCallback } from "react"
import { AIClient } from "@/core/ai"
import type { Message, ChatState } from "@/core/types"

export function useChat() {
  const [state, setState] = useState<ChatState>({
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
      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content,
        timestamp: Date.now(),
      }

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
      }))

      // Implement AI chat logic here

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