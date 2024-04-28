import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function CopyTextButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textToCopy);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <Button
      variant="secondary"
      onClick={handleCopy}
      className={cn(copied && "bg-green-400 hover:bg-green-500")}
    >
      {copied ? "Copied to clipboard" : "Copy event adress"}
    </Button>
  );
}
