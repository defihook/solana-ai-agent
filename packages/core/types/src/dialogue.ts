export interface DialogueMessage {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp: number
}

export interface DialogueState {
  messages: DialogueMessage[]
  isLoading: boolean
  error: Error | null
} 