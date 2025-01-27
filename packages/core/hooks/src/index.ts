export * from './use-dialogue'
export * from './use-assets'
export * from './use-chain'

import { useState } from 'react'

export function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(initial)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen(prev => !prev)
  
  return { isOpen, open, close, toggle }
} 