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
      <main className="grow flex flex-col justify-center">
        <div className="max-w-screen-lg m-auto md:p-4 p-2 flex items-start grow gap-3 w-full md:flex-row flex-col">
          <SeatingMap event={event} />
          <EventWidget event={event} />
        </div>
      </main>
    </div>
  );
}
