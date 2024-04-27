"use client";
import { Button } from "@/components/ui/button";
import { store } from "@/lib/store";
import Link from "next/link";

export default function Checkout() {
  const { tickets } = store();

  return (
    <Link
      href={"?modal=checkout"}
      className={tickets.length ? "pointer-events-auto" : "pointer-events-none"}
    >
      <Button variant="default" disabled={!tickets.length} data-testid="checkout">
        Checkout now
      </Button>
    </Link>
  );
}
