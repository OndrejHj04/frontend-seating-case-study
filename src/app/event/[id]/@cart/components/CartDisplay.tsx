"use client";
import { store } from "@/lib/store";
import { calculateTickets, formatPrice } from "@/lib/utils";

export default function CartDisplay() {
  const { tickets, currency } = store();
  const { count, price } = calculateTickets(tickets);

  if (!currency) {
    return <div className="bg-zinc-100 rounded-md h-14 w-20" />;
  }

  return (
    <div className="flex flex-col">
      <span data-testid="cart-state">Total for {count} tickets</span>
      <span className="text-2xl font-semibold">
        {formatPrice(price, currency)}
      </span>
    </div>
  );
}
