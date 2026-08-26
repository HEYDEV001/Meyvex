"use client";

import * as React from "react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import { cn } from "@/lib/utils";

const Dialog = BaseDialog.Root;

const DialogPortal = BaseDialog.Portal;

const DialogBackdrop = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
  <BaseDialog.Backdrop
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 transition-opacity data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      className
    )}
    {...props}
  />
));
DialogBackdrop.displayName = "DialogBackdrop";

const DialogViewport = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Viewport>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Viewport>
>(({ className, ...props }, ref) => (
  <BaseDialog.Viewport
    ref={ref}
    className={cn("fixed inset-0 z-50 overflow-y-auto", className)}
    {...props}
  />
));
DialogViewport.displayName = "DialogViewport";

const DialogPopup = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>
>(({ className, ...props }, ref) => (
  <BaseDialog.Popup
    ref={ref}
    className={cn("bg-background border shadow-lg", className)}
    {...props}
  />
));
DialogPopup.displayName = "DialogPopup";

const DialogClose = BaseDialog.Close;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Title>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => (
  <BaseDialog.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

export {
  Dialog,
  DialogPortal,
  DialogBackdrop,
  DialogViewport,
  DialogPopup,
  DialogClose,
  DialogTitle,
};
