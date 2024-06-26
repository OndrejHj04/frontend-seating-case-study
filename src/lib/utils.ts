import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ticketDetail } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTickets(tickets: ticketDetail[]) {
  //calculate tickets price from shopping cart
  return {
    price: tickets.reduce((a, b) => a + b.price, 0),
    count: tickets.length,
  };
}

export function concatName(firstName: string, lastName: string) {
  //concatinate name with first uppercase character
  return `
    ${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName
    .charAt(0)
    .toUpperCase()}${lastName.slice(1)}
    `;
}

export function formatPrice(price: number, currency: string) {
  //format price from incoming currency
  return `${price} ${currency}`;
}
