import { icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
  className?: string;
  fallback?: keyof typeof icons;
}

const Icon = ({ name, size = 24, color, className, fallback }: IconProps) => {
  const LucideIcon =
    icons[name] || (fallback ? icons[fallback] : icons.AlertCircle);

  return <LucideIcon size={size} color={color} className={className} />;
};

export default Icon;
