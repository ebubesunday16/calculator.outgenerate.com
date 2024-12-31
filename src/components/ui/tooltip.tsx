"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

// Enhanced Tooltip component that handles both hover and click
const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> & {
    delayDuration?: number;
    skipDelayDuration?: number;
    disableHoverableContent?: boolean;
  }
>(({ children, delayDuration = 200, skipDelayDuration = 300, disableHoverableContent = false, ...props }, ref) => (
  <TooltipPrimitive.Root
    {...props}
    delayDuration={delayDuration}
    skipDelayDuration={skipDelayDuration}
    disableHoverableContent={disableHoverableContent}
  >
    {children}
  </TooltipPrimitive.Root>
))
Tooltip.displayName = "Tooltip"

// Enhanced trigger that handles both hover and click events
const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => (
  <TooltipPrimitive.Trigger
    ref={ref}
    className={cn("cursor-pointer focus:outline-none", className)}
    {...props}
  />
))
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-950 shadow-md",
      // Enhanced animations for both hover and click interactions
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      // Mobile-friendly touch target
      "touch-none",
      // Dark mode support
      "dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }