import { useEffect, useCallback } from "react"

type KeyHandler = (event: KeyboardEvent) => void
type KeyMap = Record<string, KeyHandler>

export function useHotkeys(key: string, callback: KeyHandler): void
export function useHotkeys(keyMap: KeyMap): void
export function useHotkeys(
  keyOrMap: string | KeyMap,
  callback?: KeyHandler
): void {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const keyString = [
        event.metaKey && "meta",
        event.ctrlKey && "ctrl",
        event.altKey && "alt",
        event.shiftKey && "shift",
        event.key.toLowerCase(),
      ]
        .filter(Boolean)
        .join("+")

      if (typeof keyOrMap === "string" && callback) {
        if (keyOrMap === keyString) {
          event.preventDefault()
          callback(event)
        }
      } else if (typeof keyOrMap === "object") {
        Object.entries(keyOrMap).forEach(([key, handler]) => {
          if (key === keyString) {
            event.preventDefault()
            handler(event)
          }
        })
      }
    },
    [keyOrMap, callback]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [handleKeyPress])
} 