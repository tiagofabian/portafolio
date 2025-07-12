import restCountryPreview from "@/assets/imgs/dashboard/projects/restcountry-preview.png"
import rickAndMortyPreview from "@/assets/imgs/dashboard/projects/rickandmorty-preview.png"
import superHeroPreview from "@/assets/imgs/dashboard/projects/superhero-preview.png"
import nutricionalAppPreview from "@/assets/imgs/dashboard/projects/nutricionalapp-preview.png"
import { Project } from "../types";

const projects: Project[] = [
  {
    id: "restcountry",
    title: "Rest Countries",
    preview: restCountryPreview,
    url: "https://github.com/tiagofabian/restcountries",
    description: "Una aplicación capaz de consultar información variada sobre diferentes países del mundo, incluyendo su territorio, capital, número de residentes, etc."
  },
  {
    id: "rickandmorty",
    title: "Rick and Morty",
    preview: rickAndMortyPreview,
    url: "https://github.com/tiagofabian/rick-and-morty",
    description: "Esta aplicación reúne a todos los personajes de la serie animada Rick and Morty como tarjetas coleccionables que puedes añadir a tu lista de favoritos."
  },
  {
    id: "superhero",
    title: "Marvel",
    preview: superHeroPreview,
    url: "https://github.com/tiagofabian/super-hero",
    description: "En esta aplicacion encuentras toda la informacion acerca de los personajes de Marvel y su participacion en la historia."
  },
  {
    id: "nutricionalapp",
    title: "Nutricional App",
    preview: nutricionalAppPreview,
    url: "https://github.com/tiagofabian/nutricional-app",
    description: "Una aplicación que ofrece amplia información sobre alimentos saludables que puedes incorporar fácilmente a tu dieta."
  }
]

export { projects }