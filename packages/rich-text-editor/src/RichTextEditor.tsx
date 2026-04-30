import { useState, useRef, useEffect } from "react";
import { cn } from "@altrugenix/core";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { Button } from "@altrugenix/button";

export interface RichTextEditorProps {
  initialValue?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  className?: string;
}

export const RichTextEditor = ({
  initialValue = "",
  onChange,
  placeholder = "Start writing...",
  className,
}: RichTextEditorProps) => {
  const [html, setHtml] = useState(initialValue);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== initialValue) {
      editorRef.current.innerHTML = initialValue;
    }
  }, [initialValue]);

  const execCommand = (
    command: string,
    value: string | undefined = undefined
  ) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      setHtml(content);
      onChange?.(content);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      setHtml(content);
      onChange?.(content);
    }
  };

  return (
    <div className={cn("bg-card overflow-hidden rounded-xl border", className)}>
      <div className="bg-muted/30 flex flex-wrap gap-1 border-b p-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => execCommand("bold")}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => execCommand("italic")}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => execCommand("underline")}
        >
          <Underline className="h-4 w-4" />
        </Button>

        <div className="bg-border mx-1 h-4 w-[1px] self-center" />

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => execCommand("insertUnorderedList")}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => execCommand("insertOrderedList")}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>

        <div className="bg-border mx-1 h-4 w-[1px] self-center" />

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => execCommand("justifyLeft")}
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => execCommand("justifyCenter")}
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => execCommand("justifyRight")}
        >
          <AlignRight className="h-4 w-4" />
        </Button>
      </div>

      <div
        ref={editorRef}
        role="textbox"
        contentEditable
        onInput={handleInput}
        data-placeholder={placeholder}
        className={cn(
          "prose prose-sm dark:prose-invert min-h-[150px] max-w-none p-4 text-sm leading-relaxed outline-none",
          (html === "" || html === "<br>") &&
            "before:text-muted-foreground before:pointer-events-none before:content-[attr(data-placeholder)]"
        )}
      />
    </div>
  );
};
