"use client";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/types";
import dayjs from "dayjs";
import { useGoogleLogin } from "@react-oauth/google";
import swal from "sweetalert";

export default function EventWidget({ event }: { event: event }) {
  const handleError = () => swal("Oops!", "Something went wrong!", "error");
  const handleSuccess = () =>
    swal("Successful!", "An event has been added to your calendar!", "success");

  const login = useGoogleLogin({
    onSuccess: (token) => {
      const payload = {
        summary: event.namePub,
        start: {
          dateTime: dayjs(event.dateFrom).format("YYYY-MM-DDTHH:mm:ssZ"),
        },
        end: {
          dateTime: dayjs(event.dateTo).format("YYYY-MM-DDTHH:mm:ssZ"),
        },
        location: event.place,
      };
      fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token.access_token,
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            handleError();
          } else {
            handleSuccess();
          }
        })
        .catch(() => handleError());
    },
    onError: () => handleError(),
    scope: "https://www.googleapis.com/auth/calendar",
  });

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

      <Button variant="secondary" onClick={() => login()}>
        Add to calendar
      </Button>
    </aside>
  );
}
