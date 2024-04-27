import { ReactNode } from "react";
import { Ticket } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white border-b border-zinc-200 flex justify-center">
      <div className="max-w-screen-lg p-4 grow flex items-center justify-between gap-3">
        <div data-testid="icon" className="max-w-[250px] w-full flex">
          <Ticket size={36} />
        </div>
        <h2
          data-testid="name-title"
          className="font-semibold text-xl text-zinc-900"
        >
          Ondřej Hájek
        </h2>
        <div className="max-w-[250px] w-full flex justify-end">{children}</div>
      </div>
    </nav>
  );
}
