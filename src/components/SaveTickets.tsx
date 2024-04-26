"use client";
import { store } from "@/lib/store";
import { ticketDetail } from "@/lib/types";
import { useEffect } from "react";

export function SaveTickets({
  savedTickets,
}: {
  savedTickets: ticketDetail[];
}) {
  const { fillTickets } = store();

  useEffect(() => {
    fillTickets(savedTickets);
  }, []);

  return null;
}
