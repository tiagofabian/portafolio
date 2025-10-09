import { Backgrounds } from "../types";

export const backgrounds: Backgrounds = {
  academics: [
    {
      name: "aiep",
      selected: false,
      title: "Instituto Profesional Aiep",
      content: {
        subtitle: "analista y programador de sistemas",
        yearRange: "2018-2021",
        subjects: [
          "Programación Orientada a Objetos.",
          "Base de Datos Relacionales",
          "Arquitectura MVC",
          "Lenguajes de Modelado (Bizagi, Uml).",
          "Calidad de Software.",
          "Documentación y Toma de Requerimientos(ERS).",
          "Manejo de Redes Básico.",
          "Armado y Desarmado de Computadoras."
        ]
      }
    },
    {
      name: "escalab",
      selected: false,
      title: "Escalab Academy",
      content: {
        subtitle: "cursos de tecnología moderna",
        yearRange: "2022-2025",
        subjects: [
          "Curso de Javascript.",
          "Curso de React JS.",
          "Curso de Node JS.",
          "Curso de Graphql.",
          "Curso de Nest JS.",
          "Curso de Next JS.",
        ]
      }
    }
  ],
  professionals: [
    {
      name: "ecomsur",
      selected: false,
      title: "Ecomsur",
      content: {
        subtitle: "frontend",
        yearRange: "2023-2024",
        subjects: [
          "Vtex.",
          "React",
          "Typescript",
          "Graphql",
          "Node",
          "GCP",
          "GitLab",
          "Azure",
          "Mysql",
        ]
      }
    },
  ]
}