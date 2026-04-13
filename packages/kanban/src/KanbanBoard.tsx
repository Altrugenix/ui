import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@altrugenix/core";
import { Plus, MoreHorizontal, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@altrugenix/button";
import { Badge } from "@altrugenix/badge";
import { Avatar } from "@altrugenix/avatar";

export interface KanbanTask {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  assignee?: { name: string; avatar?: string };
}

export interface KanbanBoardProps {
  tasks: KanbanTask[];
  onTaskMove?: (taskId: string, newStatus: KanbanTask["status"]) => void;
  className?: string;
}

const COLUMNS: { id: KanbanTask["status"]; label: string; color: string }[] = [
  { id: "todo", label: "Backlog", color: "bg-muted" },
  { id: "in-progress", label: "In Progress", color: "bg-sky-500" },
  { id: "done", label: "Completed", color: "bg-emerald-500" },
];

export const KanbanBoard = ({
  tasks: initialTasks,
  onTaskMove,
  className,
}: KanbanBoardProps) => {
  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (taskId: string, newStatus: KanbanTask["status"]) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
    onTaskMove?.(taskId, newStatus);
  };

  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {COLUMNS.map((column) => (
        <div key={column.id} className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className={cn("h-2 w-2 rounded-full", column.color)} />
              <h3 className="text-sm font-bold uppercase tracking-wider">
                {column.label}
              </h3>
              <Badge
                variant="secondary"
                className="ml-2 flex h-5 min-w-5 items-center justify-center p-0"
              >
                {tasks.filter((t) => t.status === column.id).length}
              </Badge>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="bg-muted/30 flex min-h-[500px] flex-col gap-3 rounded-xl p-3">
            <AnimatePresence mode="popLayout">
              {tasks
                .filter((t) => t.status === column.id)
                .map((task) => (
                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-card group relative rounded-xl border p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <Badge
                        variant={
                          task.priority === "high"
                            ? "destructive"
                            : task.priority === "medium"
                              ? "warning"
                              : "secondary"
                        }
                        className="h-4 px-1.5 text-[10px]"
                      >
                        {task.priority}
                      </Badge>
                      <button className="hover:bg-muted rounded p-1 opacity-0 transition-opacity group-hover:opacity-100">
                        <MoreHorizontal className="h-3 w-3" />
                      </button>
                    </div>

                    <h4 className="mb-4 text-sm font-semibold leading-snug">
                      {task.title}
                    </h4>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar
                          src={task.assignee?.avatar}
                          fallback={task.assignee?.name.charAt(0)}
                          className="h-6 w-6 text-[10px]"
                        />
                      </div>

                      <div className="flex gap-1">
                        {column.id !== "todo" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            aria-label="Move left"
                            onClick={() =>
                              moveTask(
                                task.id,
                                COLUMNS[
                                  COLUMNS.findIndex((c) => c.id === column.id) -
                                    1
                                ].id
                              )
                            }
                          >
                            <ArrowLeft className="h-3 w-3" />
                          </Button>
                        )}
                        {column.id !== "done" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            aria-label="Move right"
                            onClick={() =>
                              moveTask(
                                task.id,
                                COLUMNS[
                                  COLUMNS.findIndex((c) => c.id === column.id) +
                                    1
                                ].id
                              )
                            }
                          >
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};
