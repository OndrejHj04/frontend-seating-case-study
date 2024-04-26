"use server";
import { cookies } from "next/headers";
import { eventTickets, ticketDetail, userType } from "./types";
import jwt from "jsonwebtoken";
import dayjs from "dayjs";

export async function createUserSession(user: userType) {
  cookies().set(
    "user_token",
    jwt.sign({ ...user }, process.env.NEXT_PUBLIC_SECRET as string, {
      expiresIn: "1h",
    })
  );
}

export async function getUserSession() {
  const token = cookies().get("user_token")?.value;
  if (token) {
    const { email, firstName, lastName, exp } = jwt.decode(
      token
    ) as userType & { exp: number };
    if (dayjs.unix(exp).isBefore()) {
      logoutUser();
    }
    return { email, firstName, lastName };
  }
  return null;
}

export async function logoutUser() {
  cookies().delete("user_token");
}

export async function saveTicket(ticket: ticketDetail) {
  const currentSeats = cookies().get("seats");

  if (currentSeats) {
    cookies().set("seats", [currentSeats.value, ticket.seatId].toString());
  } else {
    cookies().set("seats", [ticket.seatId].toString());
  }
}

export async function cancelTicket(ticket: ticketDetail) {
  const currentSeats = cookies().get("seats");

  if (currentSeats) {
    cookies().set(
      "seats",
      currentSeats.value
        .split(",")
        .filter((t) => t !== ticket.seatId)
        .toString()
    );
  }
}

export const getSeatingData = async (id: string) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/event-tickets?eventId=${id}`,
    { cache: "force-cache" }
  );
  const data: eventTickets = await req.json();
  const ticketSession = cookies().get("seats");
  const savedTickets: ticketDetail[] = [];

  if (ticketSession) {
    const ticketList = ticketSession.value.split(",");
    for (let i = 0; i < ticketList.length; i++) {
      const foundTicket = data.seatRows
        .map(({ seats }) => seats)
        .flat()
        .find((ticket) => ticket.seatId === ticketList[i])!;
      const { id, name, price } = data.ticketTypes.find(
        (t) => t.id === foundTicket.ticketTypeId
      )!;
      savedTickets.push({ id, name, price, seatId: foundTicket.seatId });
    }
  }
  return { seatingData: data, savedTickets };
};
