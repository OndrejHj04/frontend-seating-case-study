import { createUserSession } from "@/lib/actions";
import { userLoginResponse } from "@/lib/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface formValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<formValues>();

  const onSubmit = (data: formValues) => {
    fetch(`https://nfctron-frontend-seating-case-study-2024.vercel.app/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res: userLoginResponse) => {
        if (res.user) {
          createUserSession(res.user);
        } else {
          setError(true);
        }
      });
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="email"
        {...register("email", { required: true })}
        type="email"
      />
      <Input
        placeholder="password"
        {...register("password", { required: true })}
        type="password"
      />
      {error && (
        <p className="text-sm text-center text-red-500">
          Nepodařilo se přihlásit
        </p>
      )}
      <Button type="submit" disabled={!isValid}>
        Log in
      </Button>
    </form>
  );
}
