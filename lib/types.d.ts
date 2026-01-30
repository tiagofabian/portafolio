import { StaticImageData } from "next/image";

type Contact = {
  title: string;
  icon: StaticImageData;
  alt: string;
  url: string;
  sizes: string;
}

type Cert = {
  id: string
  name: string
  urlIMG: StaticImageData
  alt: string
  modalState: boolean
}

type NavbarTab = {
  title: string
  href: string
}

type Skill = {
  name: string;
  progressBar: number;
  max: number;
  card: StaticImageData;
  accDegree: number;
};

type Skills = {
  langs: Skill[];
  techs: Skill[];
};

type Background = {
  name: string;
  title: string;
  selected: boolean;
  content: {
    subtitle: string;
    yearRange: string;
    subjects: string[];
  };
}

type Backgrounds = {
  academics: Background[];
  professionals: Background[];
}

type Badge = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

type Project = {
  id: string
  title: string
  preview: StaticImageData
  url: string
  description: string
  badges: Badge[]
}