import React, { useState, useCallback, useRef } from "react";
import { cn } from "@altrugenix/core";
import { Upload, X, File, Image as ImageIcon } from "lucide-react";
import { Button } from "@altrugenix/button";
import { ProgressBar } from "@altrugenix/progress-bar";

export interface FileUploadProps {
  onFilesSelected?: (files: File[]) => void;
  multiple?: boolean;
  maxSize?: number; // in MB
  accept?: string;
  className?: string;
}

interface FileWithStatus {
  file: File;
  status: "pending" | "uploading" | "completed" | "error";
  progress: number;
}

export const FileUpload = ({
  onFilesSelected,
  multiple = false,
  maxSize = 10,
  accept,
  className,
}: FileUploadProps) => {
  const [files, setFiles] = useState<FileWithStatus[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (newFiles: FileList | null) => {
      if (!newFiles) return;

      const fileList = Array.from(newFiles);
      const validFiles = fileList.filter((file) => {
        const isTooBig = file.size > maxSize * 1024 * 1024;
        return !isTooBig;
      });

      const newFilesWithStatus: FileWithStatus[] = validFiles.map((file) => ({
        file,
        status: "completed", // Simulation: mark as completed immediately for demo
        progress: 100,
      }));

      setFiles((prev) =>
        multiple ? [...prev, ...newFilesWithStatus] : newFilesWithStatus
      );
      onFilesSelected?.(validFiles);
    },
    [multiple, maxSize, onFilesSelected]
  );

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const isImage = (file: File) => file.type.startsWith("image/");

  return (
    <div className={cn("space-y-4", className)}>
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 transition-all",
          isDragging
            ? "scale-[0.99] border-primary bg-primary/5"
            : "border-muted-foreground/20 hover:border-primary/50 hover:bg-muted/50"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={(e) => handleFiles(e.target.files)}
        />

        <div className="rounded-full bg-primary/10 p-4">
          <Upload className="h-6 w-6 text-primary" />
        </div>

        <div className="text-center">
          <p className="font-semibold">Click or drag to upload</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Maximum file size {maxSize}MB
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="grid gap-4">
          {files.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border bg-card p-3"
            >
              <div className="shrink-0 rounded-md bg-muted p-2">
                {isImage(item.file) ? (
                  <ImageIcon className="h-5 w-5 text-sky-500" />
                ) : (
                  <File className="h-5 w-5 text-primary" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{item.file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(item.file.size / 1024 / 1024).toFixed(2)} MB
                </p>
                {item.status === "uploading" && (
                  <ProgressBar
                    value={item.progress}
                    size="sm"
                    className="mt-2"
                  />
                )}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:text-destructive"
                onClick={() => removeFile(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
