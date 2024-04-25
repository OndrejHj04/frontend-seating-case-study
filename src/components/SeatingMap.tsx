import { Seat } from "@/components/Seat";
import { eventTickets } from "@/lib/types";
import React from "react";

const getSeatingData = async (id: string) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/event-tickets?eventId=${id}`
  );
  const data: eventTickets = await req.json();
  return data;
};

export default async function SeatingMap({ id }: { id: string }) {
  const seatingData = await getSeatingData(id);

  return (
    <div
      className="bg-white grow rounded-md grid p-3 self-stretch shadow-sm"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(1fr))",
        gridAutoRows: "40px",
      }}
    >
      {seatingData.seatRows.map((row) => (
        <React.Fragment key={row.seatRow}>
          {row.seats.map((seat) => (
            <div
              key={seat.place}
              style={{ gridRow: row.seatRow, gridColumn: seat.place }}
            >
              <Seat />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
