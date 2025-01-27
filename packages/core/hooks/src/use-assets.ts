import { useState, useEffect } from 'react'
import { useAccount } from '@/core/context/account'
import { LedgerClient } from '@/core/chain'
import type { Asset } from '@/core/types'

export function useAssets() {
  const { publicKey } = useAccount()
  const [assets, setAssets] = useState<Asset[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!publicKey) return

    const fetchAssets = async () => {
      setIsLoading(true)
      try {
        const client = new LedgerClient({
          endpoint: process.env.NEXT_PUBLIC_RPC_URL!,
          commitment: 'confirmed'
        })
        const tokens = await client.fetchTokens(publicKey.toString())
        setAssets(tokens)
      } catch (err) {
        setError(err as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAssets()
  }, [publicKey])

  return { assets, isLoading, error }
} 