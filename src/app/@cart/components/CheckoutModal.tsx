"use client";

import LoginForm from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import UserDisplay from "@/components/UserDisplay";
import { store } from "@/lib/store";
import { userType } from "@/lib/types";
import { calculateTickets } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Modal from "react-modal";

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
  displayModal,
  user,
}: {
  displayModal: boolean;
  user: userType | null;
}) {
  const { replace } = useRouter();
  const { tickets } = store();
  const { count, price } = calculateTickets(tickets);

  return (
    <Modal
      isOpen={displayModal}
      style={customStyles}
      onRequestClose={() => replace("/")}
      contentLabel="Example Modal"
    >
      <h2 className="text-xl text-zinc-900 font-semibold text-center">
        Checkout
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
              {count} tickets, total price: {price} Kč
            </p>
          </div>
          <Button className="w-full">Buy</Button>
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
