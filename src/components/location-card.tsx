import { Switch } from "@/components/ui/switch";

interface LocationCardProps {
  locationName: string;
  distance: number;
  isActive: boolean;
  onToggle: (newState: boolean) => void;
}

export default function LocationCard({
  locationName,
  distance,
  isActive = false,
  onToggle,
}: LocationCardProps) {
  return (
    <div className="w-full h-12 flex items-center justify-between border-b border-gray-200 px-4">
      <div className="text-gray-700 font-medium">
        {locationName} - {distance}m
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id={`switch-${locationName}`}
          checked={isActive}
          onCheckedChange={onToggle}
        />
      </div>
    </div>
  );
}
