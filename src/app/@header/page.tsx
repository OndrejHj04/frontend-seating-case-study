"use client";
import LoginForm from "@/components/LoginForm";
import UserMenu from "@/components/UserMenu";
import { store } from "@/lib/store";

export default function Header() {
  const { user } = store();

  if (user) {
    return <UserMenu user={user} />;
  }

  return <LoginForm />;
}
