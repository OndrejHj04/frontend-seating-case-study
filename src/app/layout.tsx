import type { Metadata } from "next";
import "@/index.css";

export const metadata: Metadata = {
  title: "My App",
  description: "My App is a...",
};

export default function RootLayout({
  children,
  cart,
  header,
}: {
  children: React.ReactNode;
  cart: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          {header}
          {children}
          {cart}
        </div>
      </body>
    </html>
  );
}
