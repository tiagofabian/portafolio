import { cn } from "@/lib/utils";

interface IconSVGProps extends React.SVGProps<SVGSVGElement> {
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
        "w-auto",
        className
      )}
      width={size}
      height={size}
      {...props}
    />
  );
};

export { IconSVG };