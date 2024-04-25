"use client";
import { Button } from "@/components/ui/button.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { cn } from "@/lib/utils.ts";
import React from "react";

interface SeatProps extends React.HTMLAttributes<HTMLElement> {}

export const Seat = React.forwardRef<HTMLDivElement, SeatProps>(
  (props, ref) => {
    const isInCart = false;
    return (
      <Popover>
        <PopoverTrigger>
          <div
            className={cn(
              "size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-color",
              props.className
            )}
            ref={ref}
          >
            <span className="text-xs text-zinc-400 font-medium">[n]</span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <pre>{JSON.stringify({ seatData: null }, null, 2)}</pre>

          <footer className="flex flex-col">
            {isInCart ? (
              <Button disabled variant="destructive" size="sm">
                Remove from cart
              </Button>
            ) : (
              <Button disabled variant="default" size="sm">
                Add to cart
              </Button>
            )}
          </footer>
        </PopoverContent>
      </Popover>
    );
  }
);
