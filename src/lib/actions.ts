"use server";
import { cookies } from "next/headers";
import { userType } from "./types";
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
