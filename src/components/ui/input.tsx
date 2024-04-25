import React from "react";

interface InputProps {
  placeholder: string;
  type: "password" | "email";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => (
    <input
      id="first_name"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      {...props}
      ref={ref}
    />
  )
);
