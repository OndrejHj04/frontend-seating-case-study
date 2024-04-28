"use client";
import React, { useState } from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

interface InputProps {
  placeholder: string;
  type: "password" | "email";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const [show, setShow] = useState(false);
    if (props.type === "password") {
      return (
        <div className="relative">
          <input
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...props}
            type={show ? "text" : "password"}
            ref={ref}
          />
          <div
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
            onClick={() => setShow((s) => !s)}
          >
            {show ? <Eye /> : <EyeOff />}
          </div>
        </div>
      );
    }
    return (
      <input
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
        type={"text"}
        ref={ref}
      />
    );
  }
);
