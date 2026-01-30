import { Backgrounds } from "../types";

export const backgrounds: Backgrounds = {
  academics: [
    {
      name: "generation",
      selected: true,
      title: "Generation Chile",
      content: {
        subtitle: "bootcamp Java",
        yearRange: "(oct 2025 - feb 2026)",
        subjects: [
          "Arquitectura RESTful",
          "Maven",
          "Spring Boot",
          "Java",
          "Swagger",
          "Vite",
          "PostgresSQL",
          "Tailwind",
        ]
      }
    },
    {
      name: "escalab",
      selected: true,
      title: "Escalab Academy",
      content: {
        subtitle: "cursos de tecnología moderna",
        yearRange: "(ene 2021 - jul 2024)",
        subjects: [
          "Curso de Next JS",
          "Curso de Nest JS",
          "Bootcamp Fullstack (React, Javascript, Node)",
        ]
      }
    },
    {
      name: "aiep",
      selected: true,
      title: "Instituto Profesional Aiep",
      content: {
        subtitle: "analista y programador de sistemas",
        yearRange: "(mar 2018 - nov 2021)",
        subjects: [
          "Programación Orientada a Objetos",
          "Base de Datos Relacionales",
          "Arquitectura MVC",
          "Lenguajes de Modelado (Bizagi, Uml)",
          "Calidad de Software",
          "Documentación y Toma de Requerimientos(ERS)",
          "Manejo de Redes Básico",
          "Armado y Desarmado de Computadoras"
        ]
      }
    },
  ],
  professionals: [
    {
      name: "ecomsur",
      selected: true,
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