import { Seat } from "@/components/Seat";

export default function SeatingMap() {
  return (
    <>
      {Array.from({ length: 100 }, (_, i) => (
        <Seat key={i} />
      ))}
    </>
  );
}
