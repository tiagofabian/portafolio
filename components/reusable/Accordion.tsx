import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import "@/assets/styles/reusable/accordion.css"

interface AccordionProps {
  title: string;
  name: string;
  selected: boolean;
  onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const Accordion = ({
  title,
  name,
  selected,
  onToggle,
  children,
}: AccordionProps) => {
  return (
    <div className="accordion-container gap-xs mb:flex-col mb:gap-xl">
      <div className="accordion-label-container">
        <label className="text-2xs py-6xs px-5xs mb:text-11xl mb:px-[1.5vw] mb:py-2xs">{title}</label>
        <button className="accordion-btn" data-name={name} onClick={onToggle}>
          <ChevronDown
            strokeWidth={2.5}
            className={`${selected ? "scale-y-100" : "scale-y-[-1]"} transition-transform duration-500 
              text-[#334574] w-[2vw] mb:w-[4vw]
            `}
          />
        </button>
      </div>
      <div className="accordion-content px-xl py-6xs mb:px-10xl mb:py-6xs" data-name={name}>
        {children}
      </div>
    </div>
  );
};

export { Accordion }