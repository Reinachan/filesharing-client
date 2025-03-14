import { folders, key, rubbish, unlocked } from "./assets";

type IconName = "folders" | "unlocked" | "key" | "rubbish";

export default function Icon({ icon, size }: { icon: IconName; size: number }) {
  const iconName =
    icon === "folders"
      ? folders
      : icon === "unlocked"
      ? unlocked
      : icon === "key"
      ? key
      : rubbish;

  return <img src={iconName} width={size} />;
}
