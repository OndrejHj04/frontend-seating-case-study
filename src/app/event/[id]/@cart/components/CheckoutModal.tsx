"use client";

import LoginForm from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import UserDisplay from "@/components/UserDisplay";
import { store } from "@/lib/store";
import { orderType, userType } from "@/lib/types";
import { calculateTickets, formatPrice } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Modal from "react-modal";
import swal from "sweetalert";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function CheckoutModal({
  user,
  eventId,
}: {
  user: userType | null;
  eventId: string;
}) {
  const { replace } = useRouter();
  const { tickets, currency } = store();
  const { count, price } = calculateTickets(tickets);
  const searchParams = useSearchParams();
  const displayModal = searchParams.get("modal") === "checkout";
  const pathname = usePathname();

  const handleSubmit = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId,
        tickets: tickets.map(({ id, seatId }) => ({
          ticketTypeId: id,
          seatId,
        })),
        user,
      }),
    })
      .then((res) => res.json())
      .then((res: orderType) => {
        if (res.orderId) {
          swal("Successful!", "Order has been submited!", "success");
          // reset cart to default
        } else {
          swal("Oops!", "Something went wrong!", "error");
        }
      })
      .finally(() => {
        replace(pathname);
      });
  };

  return (
    <Modal
      isOpen={displayModal}
      style={customStyles}
      onRequestClose={() => replace("/")}
      contentLabel="Example Modal"
    >
      <h2 className="text-xl text-zinc-900 font-semibold text-center">
        Your order
      </h2>
      {user ? (
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-sm text-zinc-500">User account:</p>
            <UserDisplay user={user} />
          </div>
          <div>
            <p className="text-sm text-zinc-500">Order summary:</p>
            <p>
              {count} tickets, total price: {formatPrice(price, currency)}
            </p>
          </div>
          <Button onClick={handleSubmit} className="w-full" data-testid="purchase">
            Purchase
          </Button>
        </div>
      ) : (
        <div>
          <p className="text-sm text-zinc-500">
            Log in to continue the payment
          </p>
          <LoginForm />
        </div>
      )}
    </Modal>
  );
}
