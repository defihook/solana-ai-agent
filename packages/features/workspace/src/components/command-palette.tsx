"use client"

import * as React from "react"
import { Command } from "@/foundation/ui/command"
import { Dialog } from "@/foundation/ui/dialog"
import { useHotkeys } from "@/foundation/hooks/use-hotkeys"
import { cn } from "@/foundation/utils"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)

  useHotkeys("meta+k", () => setOpen(true))
  useHotkeys("esc", () => setOpen(false))

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Command className="rounded-lg border shadow-md">
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Actions">
            <Command.Item onSelect={() => {}}>
              View Portfolio
            </Command.Item>
            <Command.Item onSelect={() => {}}>
              New Transaction
            </Command.Item>
            <Command.Item onSelect={() => {}}>
              Market Analysis
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </Dialog>
  )
} 