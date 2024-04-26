"use client";
import { store } from "@/lib/store";
import { calculateTickets, formatPrice } from "@/lib/utils";

export default function CartDisplay() {
  const { tickets, currency } = store();
  const { count, price } = calculateTickets(tickets);

  return (
    <div className="flex flex-col">
      <span>Total for {count} tickets</span>
      <span className="text-2xl font-semibold">
        {formatPrice(price, currency)}
      </span>
    </div>
  );
}
