import { Button } from "@/components/ui/button.tsx";
import "./App.css";
import UserMenu from "@/components/UserMenu";
import EventWidget from "@/components/EventWidget";
import SeatingMap from "@/components/SeatingMap";

function App() {
  const isLoggedIn = false;

  return (
    <div className="flex flex-col grow">
      {/* header (wrapper) */}
      <nav className="sticky top-0 left-0 right-0 bg-white border-b border-zinc-200 flex justify-center">
        {/* inner content */}
        <div className="max-w-screen-lg p-4 grow flex items-center justify-between gap-3">
          {/* application/author image/logo placeholder */}
          <div className="max-w-[250px] w-full flex">
            <div className="bg-zinc-100 rounded-md size-12" />
          </div>
          {/* app/author title/name placeholder */}
          <div className="bg-zinc-100 rounded-md h-8 w-[200px]" />
          {/* user menu */}
          <div className="max-w-[250px] w-full flex justify-end">
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <Button disabled variant="secondary">
                Login or register
              </Button>
            )}
          </div>
        </div>
      </nav>

      <main className="grow flex flex-col justify-center">
        {/* inner content */}
        <div className="max-w-screen-lg m-auto p-4 flex items-start grow gap-3 w-full">
          {/* seating card */}
          <div
            className="bg-white rounded-md grow grid p-3 self-stretch shadow-sm"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
              gridAutoRows: "40px",
            }}
          >
            {/*	seating map */}
			<SeatingMap />
          </div>

          {/* event info */}
          <EventWidget />
        </div>
      </main>

      {/* bottom cart affix (wrapper) */}
      <nav className="sticky bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-center">
        {/* inner content */}
        <div className="max-w-screen-lg p-6 flex justify-between items-center gap-4 grow">
          {/* total in cart state */}
          <div className="flex flex-col">
            <span>Total for [?] tickets</span>
            <span className="text-2xl font-semibold">[?] CZK</span>
          </div>

          {/* checkout button */}
          <Button disabled variant="default">
            Checkout now
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default App;
