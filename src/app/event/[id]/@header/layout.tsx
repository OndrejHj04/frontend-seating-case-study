import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white border-b border-zinc-200 flex justify-center">
      {/* inner content */}
      <div className="max-w-screen-lg p-4 grow flex items-center justify-between gap-3">
        {/* application/author image/logo placeholder */}
        <div className="max-w-[250px] w-full flex">
          <div className="bg-zinc-100 rounded-md size-12" />
        </div>
        {/* app/author title/name placeholder */}
        <div className="bg-zinc-100 rounded-md h-8 w-[200px]" />
        {/* user menu */}
        <div className="max-w-[250px] w-full flex justify-end">{children}</div>
      </div>
    </nav>
  );
}
