import CartDisplay from "./components/CartDisplay";
import Checkout from "./components/Checkout";

export default function Cart({
  searchParams: { modal },
}: {
  searchParams: { modal: string };
}) {
  const displayModal = modal === "checkout";

  return (
    <>
      <CartDisplay />
      <Checkout />
      
    </>
  );
}
