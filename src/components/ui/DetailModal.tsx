"use client";

import type { ReactNode, MouseEvent } from "react";
import { useEffect, useRef } from "react";

interface DetailModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  labelledById?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function DetailModal({
  open,
  onClose,
  title,
  labelledById,
  children,
  footer,
}: DetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      triggerRef.current = document.activeElement;
      dialog.showModal();
    } else if (!open) {
      if (dialog.open) {
        dialog.close();
      }
      const trigger = triggerRef.current;
      if (trigger && trigger instanceof HTMLElement && trigger.isConnected) {
        trigger.focus();
      }
      triggerRef.current = null;
    }
  }, [open]);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      onClose();
    }
  }

  const labelProps = labelledById
    ? { "aria-labelledby": labelledById }
    : { "aria-label": title };

  return (
    <dialog
      ref={dialogRef}
      {...labelProps}
      onClose={onClose}
      onCancel={onClose}
      onClick={handleBackdropClick}
      className={[
        // Tailwind `flex` overrides UA `dialog:not([open]){display:none}` — keep closed dialogs inert
        "fixed inset-0 m-auto hidden open:flex",
        "max-h-[min(85vh,900px)] w-[calc(100%-48px)] max-w-[1120px] flex-col",
        "overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] p-0",
        "shadow-2xl backdrop:bg-[var(--color-modal-backdrop)]",
        "max-md:h-[100dvh] max-md:max-h-none max-md:w-screen max-md:max-w-none max-md:rounded-none max-md:shadow-none",
      ].join(" ")}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-3 right-3 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2"
      >
        <span aria-hidden="true" className="select-none text-2xl leading-none">
          ×
        </span>
      </button>

      {/* Single scroll region so both panels and lower sections stay reachable */}
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {children}
      </div>
      {footer ? <div className="shrink-0">{footer}</div> : null}
    </dialog>
  );
}
