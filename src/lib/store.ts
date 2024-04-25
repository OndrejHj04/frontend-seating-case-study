import { create } from "zustand";
import { ticketDetail } from "./types";

interface storeState {
  tickets: ticketDetail[];
  addTicket: (ticket: ticketDetail) => void;
  removeTicket: (ticket: ticketDetail) => void;
}

export const store = create<storeState>((set) => ({
  tickets: [],
  addTicket: (ticket) =>
    set((state) => ({ tickets: [...state.tickets, ticket] })),
  removeTicket: (ticket) =>
    set((state) => ({
      tickets: state.tickets.filter(({ seatId }) => ticket.seatId !== seatId),
    })),
}));
