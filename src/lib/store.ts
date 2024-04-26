import { create } from "zustand";
import { ticketDetail, userType } from "./types";

interface storeState {
  tickets: ticketDetail[];
  addTicket: (ticket: ticketDetail) => void;
  removeTicket: (ticket: ticketDetail) => void;
  fillTickets: (tickets: ticketDetail[]) => void;
  user: userType | null;
  setUserSession: (user: userType | null) => void;
  logoutUser: () => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

export const store = create<storeState>((set) => ({
  tickets: [],
  addTicket: (ticket) =>
    set((state) => ({ tickets: [...state.tickets, ticket] })),
  removeTicket: (ticket) =>
    set((state) => ({
      tickets: state.tickets.filter(({ seatId }) => ticket.seatId !== seatId),
    })),
  fillTickets: (tickets) => set(() => ({ tickets })),
  user: null,
  setUserSession: (user) => set(() => ({ user: user })),
  logoutUser: () => set(() => ({ user: null })),
  currency: "",
  setCurrency: (currency) => set(() => ({ currency })),
}));
