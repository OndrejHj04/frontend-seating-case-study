import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
interface event {
  eventId: string;
  namePub: string;
  description: string;
  currencyIso: string;
  dateFrom: string;
  dateTo: string;
  headerImageUrl: string;
  place: string;
}

const getEvent = async () => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
  const data: event = await req.json();
  return data;
};

export default async function EventWidget() {
  const event = await getEvent();
  return (
    <aside className="w-full max-w-sm bg-white rounded-md shadow-sm p-3 flex flex-col gap-2">
      <img src={event.headerImageUrl} alt="NFCtron Keynote banner" />
      <div>
        <h1 className="text-xl text-zinc-900 font-semibold">{event.namePub}</h1>
        <p className="text-xs text-zinc-500">
          Kdy:{" "}
          {`${dayjs(event.dateFrom).format("DD. MM. HH:mm")} - ${dayjs(
            event.dateTo
          ).format("HH:mm")}`}
        </p>
        <p className="text-xs text-zinc-500">Kde: {event.place}</p>
      </div>

      <p className="text-sm text-zinc-500">{event.description}</p>

      <Button variant="secondary" disabled>
        Add to calendar
      </Button>
    </aside>
  );
}
