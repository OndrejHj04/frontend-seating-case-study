import { getUserSession } from "@/lib/actions";
import CartDisplay from "./components/CartDisplay";
import Checkout from "./components/Checkout";
import CheckoutModal from "./components/CheckoutModal";

export default async function Cart({
  searchParams: { modal },
}: {
  searchParams: { modal: string };
}) {
  const displayModal = modal === "checkout";
  const user = await getUserSession();

  return (
    <>
      <CartDisplay />
      <Checkout />
      <CheckoutModal displayModal={displayModal} user={user} />
    </>
  );
}
