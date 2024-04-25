import { create } from "zustand";
import { ticketDetail, userType } from "./types";

interface storeState {
  tickets: ticketDetail[];
  addTicket: (ticket: ticketDetail) => void;
  removeTicket: (ticket: ticketDetail) => void;
  user: userType | null;
  setUserSession: (user: userType) => void;
  logoutUser: () => void;
}

export const store = create<storeState>((set) => ({
  tickets: [],
  addTicket: (ticket) =>
    set((state) => ({ tickets: [...state.tickets, ticket] })),
  removeTicket: (ticket) =>
    set((state) => ({
      tickets: state.tickets.filter(({ seatId }) => ticket.seatId !== seatId),
    })),
  user: null,
  setUserSession: (user) => set(() => ({ user: user })),
  logoutUser: () => set(() => ({ user: null })),
}));
