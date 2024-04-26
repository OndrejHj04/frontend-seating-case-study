"use server";
import { userType } from "./types";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function generateToken(user: userType) {
  console.log(user);
  return jwt.sign({ ...user }, process.env.NEXT_PUBLIC_SECRET as string, {
    expiresIn: "1h",
  });
}

export async function decodeToken(token: string) {
  return jwt.decode(token) as JwtPayload;
}
