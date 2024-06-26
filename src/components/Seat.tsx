"use client";
import { Button } from "@/components/ui/button.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { cancelTicket, saveTicket } from "@/lib/actions";
import { store } from "@/lib/store";
import { ticketDetail } from "@/lib/types";
import { cn, formatPrice } from "@/lib/utils.ts";
import { TicketCheck } from "lucide-react";
import React from "react";

interface SeatProps extends React.HTMLAttributes<HTMLElement> {
  data: ticketDetail;
}

export const Seat = React.forwardRef<HTMLDivElement, SeatProps>(
  (props, ref) => {
    const { tickets, addTicket, removeTicket, currency } = store();

    const isInCart = tickets.find(
      (ticket) => ticket.seatId === props.data.seatId
    );

    const handleAddTicket = () => {
      addTicket(props.data);
      saveTicket(props.data);
    };

    const handleRemoveTicket = () => {
      removeTicket(props.data);
      cancelTicket(props.data);
    };

    return (
      <Popover>
        <PopoverTrigger>
          <div
            className={cn(
              `md:size-8 size-6 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-color flex flex-1`,
              props.className
            )}
            data-testid="single-seat"
            ref={ref}
          >
            <span className="text-xs text-zinc-400 font-medium m-auto">
              {isInCart ? <TicketCheck color="#1e7f00" /> : `[n]`}
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <p>
            Type:{" "}
            <span className="text-zinc-900 font-semibold">
              {props.data.name}
            </span>
          </p>
          <p>
            Price:{" "}
            <span className="text-zinc-900 font-semibold">
              {formatPrice(props.data.price, currency)}
            </span>
          </p>
          <p>
            Row:{" "}
            <span className="text-zinc-900 font-semibold">
              {props.data.row}
            </span>{" "}
            Place:{" "}
            <span className="text-zinc-900 font-semibold">
              {props.data.place}
            </span>
          </p>
          <footer className="flex flex-col">
            {isInCart ? (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleRemoveTicket}
              >
                Remove from cart
              </Button>
            ) : (
              <Button variant="default" size="sm" onClick={handleAddTicket} data-testid="cart-button">
                Add to cart
              </Button>
            )}
          </footer>
        </PopoverContent>
      </Popover>
    );
  }
);
