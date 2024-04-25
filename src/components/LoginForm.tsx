import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";

interface formValues {
  email: string;
  password: string;
}

export default function LoginForm() {
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
      .then((res) => console.log(res));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Login or register</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px]">
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
          <Button type="submit" disabled={!isValid}>
            Log in
          </Button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
