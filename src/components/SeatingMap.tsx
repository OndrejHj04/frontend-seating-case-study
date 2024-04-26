import { Seat } from "@/components/Seat";
import { getSeatingData } from "@/lib/actions";
import React from "react";
import { SaveTickets } from "./SaveTickets";

export default async function SeatingMap({ id }: { id: string }) {
  const { seatingData, savedTickets } = await getSeatingData(id);

  return (
    <div className="grow bg-white rounded-md self-stretch shadow-sm p-3">
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(1fr))",
          gridAutoRows: "40px",
        }}
      >
        {seatingData.seatRows.map((row) => (
          <React.Fragment key={row.seatRow}>
            {row.seats.map((seat) => {
              const seatData = {
                ...seatingData.ticketTypes.find(
                  (item) => item.id === seat.ticketTypeId
                )!,
                seatId: seat.seatId,
              };
              return (
                <div
                  key={seat.place}
                  style={{ gridRow: row.seatRow, gridColumn: seat.place }}
                >
                  <Seat data={seatData} />
                </div>
              );
            })}
          </React.Fragment>
        ))}
        <SaveTickets savedTickets={savedTickets} />
      </div>
      <div className="w-full text-center p-3 bg-zinc-100 rounded-full mt-10">
        <span className="text-sm text-zinc-600">stage</span>
      </div>
    </div>
  );
}
