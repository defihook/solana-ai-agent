import { useState, useCallback } from 'react'
import { LedgerClient } from '@/core/chain'
import type { AppConfig } from '@/core/types'

export function useChain(config: AppConfig) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const client = new LedgerClient(config)

  const connect = useCallback(async () => {
    setIsConnecting(true)
    try {
      // Implement connection logic
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsConnecting(false)
    }
  }, [])

  return {
    client,
    connect,
    isConnecting,
    error
  }
} 