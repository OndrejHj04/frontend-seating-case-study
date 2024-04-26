import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-center">
      {/* inner content */}
      <div className="max-w-screen-lg p-6 flex justify-between items-center gap-4 grow">
        {/* total in cart state */}
        {children}
      </div>
    </nav>
  );
}
