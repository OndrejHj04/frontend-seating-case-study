"use client";
import { Button } from "@/components/ui/button";
import { store } from "@/lib/store";
import { calculateTickets } from "@/lib/utils";

export default function Cart() {
  const { tickets } = store();
  const { count, price } = calculateTickets(tickets);

  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-center">
      {/* inner content */}
      <div className="max-w-screen-lg p-6 flex justify-between items-center gap-4 grow">
        {/* total in cart state */}
        <div className="flex flex-col">
          <span>Total for {count} tickets</span>
          <span className="text-2xl font-semibold">{price} CZK</span>
        </div>

        {/* checkout button */}
        <Button disabled variant="default">
          Checkout now
        </Button>
      </div>
    </nav>
  );
}
