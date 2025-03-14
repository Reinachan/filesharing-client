import { folders, key, rubbish, unlocked } from "./assets";

type IconName = keyof typeof iconName;

const iconName = {
  folders,
  key,
  unlocked,
  rubbish,
};

export default function Icon({ icon, size }: { icon: IconName; size: number }) {
  return <img src={iconName[icon]} width={size} alt={icon} />;
}
