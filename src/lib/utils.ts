import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ticketDetail } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTickets(tickets: ticketDetail[]) {
  return {
    price: tickets.reduce((a, b) => a + b.price, 0),
    count: tickets.length,
  };
}
