import { Button } from "@/components/ui/button";

export default function EventWidget() {
  return (
    <aside className="w-full max-w-sm bg-white rounded-md shadow-sm p-3 flex flex-col gap-2">
      {/* event header image placeholder */}
      <div className="bg-zinc-100 rounded-md h-32" />
      {/* event name */}
      <h1 className="text-xl text-zinc-900 font-semibold">[event-name]</h1>
      {/* event description */}
      <p className="text-sm text-zinc-500">
        [event-description]: Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam aliquid asperiores beatae deserunt dicta dolorem eius eos
        fuga laborum nisi officia pariatur quidem repellendus, reprehenderit
        sapiente, sed tenetur vel voluptatibus?
      </p>
      {/* add to calendar button */}
      <Button variant="secondary" disabled>
        Add to calendar
      </Button>
    </aside>
  );
}
