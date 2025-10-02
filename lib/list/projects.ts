import ecommerceAdminPreview from "@/assets/imgs/dashboard/projects/ecommerce-admin.png"
import ecommerceStorePreview from "@/assets/imgs/dashboard/projects/ecommerce-store.png"
import restCountryPreview from "@/assets/imgs/dashboard/projects/restcountry-preview.png"
import rickAndMortyPreview from "@/assets/imgs/dashboard/projects/rickandmorty-preview.png"
import superHeroPreview from "@/assets/imgs/dashboard/projects/superhero-preview.png"
import nutricionalAppPreview from "@/assets/imgs/dashboard/projects/nutricionalapp-preview.png"
import { Project } from "../types";

const projects: Project[] = [
  {
    id: "techcomstore",
    title: "Techcom Store",
    preview: ecommerceStorePreview,
    url: "https://github.com/tiagofabian/next-main-ecommerce-store",
    description: "Tienda de ropa e-commerce. Posee login, catálogo, carrito de compras y pasarela de pago."
  },
  {
    id: "techcomadmin",
    title: "Techcom Admin",
    preview: ecommerceAdminPreview,
    url: "https://github.com/tiagofabian/next-main-ecommerce-admin",
    description: "Administrador de tienda para toda la gestion de colecciones, productos y ordenes finalizadas."
  },
  {
    id: "restcountry",
    title: "Rest Countries",
    preview: restCountryPreview,
    url: "https://github.com/tiagofabian/restcountries",
    description: "Esta APP entrega información detallada sobre cada uno de los paises del mundo"
  },
  {
    id: "rickandmorty",
    title: "Rick and Morty",
    preview: rickAndMortyPreview,
    url: "https://github.com/tiagofabian/rick-and-morty",
    description: "Tarjetas coleccionables de los personajes de la serie animada Rick and Morty que puedes añadir a tu lista de favoritos."
  },
  {
    id: "superhero",
    title: "Marvel",
    preview: superHeroPreview,
    url: "https://github.com/tiagofabian/super-hero",
    description: "API de superheroes donde encontraras información acerca de los personajes de Marvel y su participacion en la historia."
  },
  {
    id: "nutricionalapp",
    title: "Nutricional App",
    preview: nutricionalAppPreview,
    url: "https://github.com/tiagofabian/nutricional-app",
    description: "Ofrece amplia información sobre alimentos saludables que puedes incorporar fácilmente a tu dieta."
  },
]

export { projects }