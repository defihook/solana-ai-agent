import { useState, useCallback } from 'react'
import { toast } from 'sonner'

interface MutationOptions<TData, TError> {
  onSuccess?: (data: TData) => void
  onError?: (error: TError) => void
  onSettled?: () => void
}

interface MutationState<TData, TError> {
  data: TData | null
  error: TError | null
  isLoading: boolean
}

export function useMutation<TData = unknown, TError = Error, TVariables = void>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options: MutationOptions<TData, TError> = {}
) {
  const [state, setState] = useState<MutationState<TData, TError>>({
    data: null,
    error: null,
    isLoading: false,
  })

  const mutate = useCallback(
    async (variables: TVariables) => {
      setState(prev => ({ ...prev, isLoading: true }))
      try {
        const data = await mutationFn(variables)
        setState({ data, error: null, isLoading: false })
        options.onSuccess?.(data)
        return data
      } catch (error) {
        const typedError = error as TError
        setState({ data: null, error: typedError, isLoading: false })
        options.onError?.(typedError)
        toast.error('Operation failed')
        throw error
      } finally {
        options.onSettled?.()
      }
    },
    [mutationFn, options]
  )

  return {
    ...state,
    mutate,
    reset: () => setState({ data: null, error: null, isLoading: false }),
  }
} 