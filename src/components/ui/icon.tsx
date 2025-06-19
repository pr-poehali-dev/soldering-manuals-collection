import * as LucideIcons from "lucide-react";

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number;
  color?: string;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon = ({ name, size = 24, color, className, fallback }: IconProps) => {
  const LucideIcon =
    LucideIcons[name] ||
    (fallback ? LucideIcons[fallback] : LucideIcons.AlertCircle);

  if (!LucideIcon) {
    return (
      <LucideIcons.AlertCircle
        size={size}
        color={color}
        className={className}
      />
    );
  }

  return <LucideIcon size={size} color={color} className={className} />;
};

export default Icon;
