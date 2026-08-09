import { Landing } from "@/types/landing.types";

interface LandingCardProps {
  item: Landing;
}

export default function LandingCard({ item }: LandingCardProps) {
  const Icon = item.icon;

  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 text-white transition group-hover:scale-110">  
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
    </div>
  );
}