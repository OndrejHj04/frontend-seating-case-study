import EventWidget from "@/components/EventWidget";
import SeatingMap from "@/components/SeatingMap";
import { event } from "@/lib/types";
import { redirect } from "next/navigation";

const getEvent = async () => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
  const data: event = await req.json();
  return data;
};

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getEvent();

  if (event.eventId !== id) {
    redirect(`/event/${event.eventId}`);
  }

  return (
    <div className="flex flex-col grow">
      {/* header (wrapper) */}

      <main className="grow flex flex-col justify-center">
        {/* inner content */}
        <div className="max-w-screen-lg m-auto p-4 flex items-start grow gap-3 w-full">
          {/* seating card */}

          <SeatingMap event={event} />

          {/* event info */}
          <EventWidget event={event} />
        </div>
      </main>

      {/* bottom cart affix (wrapper) */}
    </div>
  );
}
