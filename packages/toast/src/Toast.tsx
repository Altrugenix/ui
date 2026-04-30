/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@altrugenix/core";

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastContextType {
  toast: (options: Omit<Toast, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ type, title, description, duration = 5000 }: Omit<Toast, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast = { id, type, title, description, duration };

      setToasts((prev) => [...prev, newToast]);

      if (duration !== Infinity) {
        setTimeout(() => dismiss(id), duration);
      }
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  );
};

const ToastContainer: React.FC<{
  toasts: Toast[];
  dismiss: (id: string) => void;
}> = ({ toasts, dismiss }) => {
  return (
    <div className="fixed right-4 bottom-4 z-[9999] flex w-full max-w-sm flex-col gap-2">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            layout
            className={cn(
              "glass flex items-start gap-4 rounded-xl border-l-[6px] p-4 shadow-2xl transition-all duration-300",
              t.type === "success" && "border-l-emerald-500",
              t.type === "error" && "border-l-rose-500",
              t.type === "warning" && "border-l-amber-500",
              t.type === "info" && "border-l-sky-500"
            )}
          >
            <div className="mt-0.5">
              {t.type === "success" && (
                <CheckCircle className="h-5 w-5 text-emerald-500" />
              )}
              {t.type === "error" && (
                <AlertCircle className="h-5 w-5 text-rose-500" />
              )}
              {t.type === "warning" && (
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              )}
              {t.type === "info" && <Info className="h-5 w-5 text-sky-500" />}
            </div>
            <div className="min-w-0 flex-1 pr-6">
              <h4 className="text-foreground text-sm leading-tight font-semibold">
                {t.title}
              </h4>
              {t.description && (
                <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                  {t.description}
                </p>
              )}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="absolute top-4 right-4 opacity-50 transition-opacity hover:opacity-100"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
