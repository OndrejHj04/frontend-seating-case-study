import EventWidget from "@/components/EventWidget";
import SeatingMap from "@/components/SeatingMap";
import { event } from "@/lib/types";

const getEvent = async () => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
  const data: event = await req.json();
  return data;
};

export default async function Page() {
  const event = await getEvent();
  return (
    <div className="flex flex-col grow">
      {/* header (wrapper) */}

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
          <EventWidget event={event} />
        </div>
      </main>

      {/* bottom cart affix (wrapper) */}
    </div>
  );
}
