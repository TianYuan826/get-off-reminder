import LocationCard from "../location-card";

const data = [
  {
    id: 1,
    locationName: "浅草駅",
    latitude: 35.677,
    longitude: 139.737,
    distance: 500,
    isActive: true,
  },
  {
    id: 2,
    locationName: "蔵前駅",
    latitude: 35.677,
    longitude: 139.737,
    distance: 500,
    isActive: true,
  },
];

export default function HomePageContent() {
  return (
    <div>
      <LocationCard />
    </div>
  );
}
