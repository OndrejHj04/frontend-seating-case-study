"use client";
import { store } from "@/lib/store";
import { ticketDetail } from "@/lib/types";
import { useEffect } from "react";

export function SaveTickets({
  savedTickets,
  currency,
}: {
  savedTickets: ticketDetail[];
  currency: string;
}) {
  const { fillTickets, setCurrency } = store();

  useEffect(() => {
    fillTickets(savedTickets);
    setCurrency(currency);
  }, []);

  return null;
}
