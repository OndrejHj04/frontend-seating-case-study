"use client";
import LoginForm from "@/components/LoginForm";
import UserMenu from "@/components/UserMenu";
import { decodeToken } from "@/lib/actions";
import { store } from "@/lib/store";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Header() {
  const { user, setUserSession } = store();
  const [cookie, , removeCookie] = useCookies();

  useEffect(() => {
    if (cookie.user_token) {
      decodeToken(cookie.user_token).then((res) => {
        if (res.exp && dayjs.unix(res.exp).isBefore()) {
          removeCookie("user_token");
          setUserSession(null);
        } else {
          setUserSession({
            email: res.email,
            firstName: res.firstName,
            lastName: res.lastName,
          });
        }
      });
    }
  }, [cookie]);

  if (user) {
    return <UserMenu user={user} />;
  }

  return <LoginForm />;
}
