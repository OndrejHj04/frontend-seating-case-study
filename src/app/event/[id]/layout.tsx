import type { Metadata } from "next";
import "@/index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
          <GoogleOAuthProvider clientId="897935807622-d7goinftip5f3sjnen6ogsom5q7m5jff.apps.googleusercontent.com">
            {header}
            {children}
            {cart}
          </GoogleOAuthProvider>
        </div>
      </body>
    </html>
  );
}
