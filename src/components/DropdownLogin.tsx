"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "./ui/button";
import LoginForm from "./LoginForm";

export default function DropdownLogin() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Login or register</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px]">
        <LoginForm />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
