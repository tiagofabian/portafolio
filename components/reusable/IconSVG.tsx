import { cn } from "@/lib/utils";

interface IconSVGProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  size?: string;
}

const IconSVG = ({
  icon: Icon,
  className,
  size = "0.7vw",
  ...props
}: IconSVGProps) => {
  return (
    <Icon 
      className={cn(
        "w-full",
        className
      )}
      width={size}
      height={size}
      {...props}
    />
  );
};

export { IconSVG };