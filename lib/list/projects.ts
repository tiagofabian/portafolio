import ecommerceAdminPreview from "@/assets/imgs/dashboard/projects/ecommerce-admin.png"
import ecommerceStorePreview from "@/assets/imgs/dashboard/projects/ecommerce-store.png"
import teachingPlannerPreview from "@/assets/imgs/dashboard/projects/teaching-planner_preview.png"
import restCountryPreview from "@/assets/imgs/dashboard/projects/restcountry-preview.png"
import rickAndMortyPreview from "@/assets/imgs/dashboard/projects/rickandmorty-preview.png"
import superHeroPreview from "@/assets/imgs/dashboard/projects/superhero-preview.png"
import nutricionalAppPreview from "@/assets/imgs/dashboard/projects/nutricionalapp-preview.png"
import hosekiPreview from "@/assets/imgs/dashboard/projects/hoseki-preview.png"

// icons 
// import HTMLIcon from '@/assets/icons/svg/html.svg';
import CSSIcon from '@/assets/icons/svg/css.svg';
import JavascriptIcon from '@/assets/icons/svg/javascript.svg';
import TypescriptIcon from '@/assets/icons/svg/typescript.svg';
// import PHPIcon from '@/assets/icons/svg/php.svg';
import SASSIcon from '@/assets/icons/svg/sass.svg';
import TailwindIcon from '@/assets/icons/svg/tailwind.svg';
import ReactIcon from '@/assets/icons/svg/react.svg';
// import ReduxIcon from '@/assets/icons/svg/redux.svg';
import NextIcon from '@/assets/icons/svg/next.svg';
import NestIcon from '@/assets/icons/svg/nest.svg';
import ViteIcon from '@/assets/icons/svg/vite.svg';

import { Project } from "../types";

const projects: Project[] = [
  {
    id: "hoseki",
    title: "Joyeria Hoseki",
    preview: hosekiPreview,
    url: "https://github.com/Elsilla/SA-HA1",
    description: "Joyeria Hoseki, una tienda de joyería fina que ofrece materiales de alta calidad con diseños personalizados",
    badges: [
      {
        name: "Javascript",
        icon: JavascriptIcon
      },
      {
        name: "Tailwind",
        icon: TailwindIcon
      },
      {
        name: "React",
        icon: ReactIcon
      },
      {
        name: "Vite",
        icon: ViteIcon
      },
    ],
  },
  {
    id: "techcomstore",
    title: "Techcom Store",
    preview: ecommerceStorePreview,
    url: "https://github.com/tiagofabian/next-main-ecommerce-store",
    description: "Tienda de ropa e-commerce. Posee login, catálogo, carrito de compras y pasarela de pago.",
    badges: [
      {
        name: "Typescript",
        icon: TypescriptIcon
      },
      {
        name: "Tailwind",
        icon: TailwindIcon
      },
      {
        name: "Next",
        icon: NextIcon
      },
    ],
  },
  {
    id: "techcomadmin",
    title: "Techcom Admin",
    preview: ecommerceAdminPreview,
    url: "https://github.com/tiagofabian/next-main-ecommerce-admin",
    description: "Administrador de tienda para toda la gestion de colecciones, productos y ordenes finalizadas.",
    badges: [
      {
        name: "Typescript",
        icon: TypescriptIcon
      },
      {
        name: "Tailwind",
        icon: TailwindIcon
      },
      {
        name: "Next",
        icon: NextIcon
      },
    ],
  },
  {
    id: "teachingplanner",
    title: "Teaching Planner",
    preview: teachingPlannerPreview,
    url: "https://github.com/tiagofabian/nest-teaching-planner",
    description: "Plataforma de planificación docente que optimiza la utilización de espacios académicos",
    badges: [
      {
        name: "Typescript",
        icon: TypescriptIcon
      },
      {
        name: "Javascript",
        icon: JavascriptIcon
      },
      {
        name: "Nest",
        icon: NestIcon
      },
    ],
  },
  {
    id: "restcountry",
    title: "Rest Countries",
    preview: restCountryPreview,
    url: "https://github.com/tiagofabian/restcountries",
    description: "Esta APP entrega información detallada sobre cada uno de los paises del mundo",
    badges: [
      {
        name: "Javascript",
        icon: JavascriptIcon
      },
      {
        name: "CSS",
        icon: CSSIcon
      },
      {
        name: "React",
        icon: ReactIcon
      },
    ],
  },
  {
    id: "rickandmorty",
    title: "Rick and Morty",
    preview: rickAndMortyPreview,
    url: "https://github.com/tiagofabian/rick-and-morty",
    description: "Tarjetas coleccionables de los personajes de la serie animada Rick and Morty que puedes añadir a tu lista de favoritos.",
    badges: [
      {
        name: "Javascript",
        icon: JavascriptIcon
      },
      {
        name: "SASS",
        icon: SASSIcon
      },
      {
        name: "React",
        icon: ReactIcon
      },
    ],
  },
  {
    id: "superhero",
    title: "Marvel",
    preview: superHeroPreview,
    url: "https://github.com/tiagofabian/super-hero",
    description: "API de superheroes donde encontraras información acerca de los personajes de Marvel y su participacion en la historia.",
    badges: [
      {
        name: "Javascript",
        icon: JavascriptIcon
      },
      {
        name: "CSS",
        icon: CSSIcon
      },
      {
        name: "React",
        icon: ReactIcon
      },
    ],
  },
  {
    id: "nutricionalapp",
    title: "Nutricional App",
    preview: nutricionalAppPreview,
    url: "https://github.com/tiagofabian/nutricional-app",
    description: "Ofrece amplia información sobre alimentos saludables que puedes incorporar fácilmente a tu dieta.",
    badges: [
      {
        name: "Javascript",
        icon: JavascriptIcon
      },
      {
        name: "CSS",
        icon: CSSIcon
      },
      {
        name: "React",
        icon: ReactIcon
      },
    ],
  },
]

export { projects }