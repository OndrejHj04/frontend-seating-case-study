import App from "@/App";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <App />;
}
