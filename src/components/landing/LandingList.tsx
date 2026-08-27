import { Landing } from "@/types/landing.types";
import LandingCard from "./LandingCard";

interface LandingListProps {
  items: Landing[];
}

export default function LandingList({ items }: LandingListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      {items.map((item) => (
        <LandingCard key={item.id} item={item} />
      ))}
    </div>
  );
}