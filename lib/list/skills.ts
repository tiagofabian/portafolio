import htmlCard from "@/assets/imgs/dashboard/card/html5-card.jpg";
import cssCard from "@/assets/imgs/dashboard/card/css3-card.png";
import jsCard from "@/assets/imgs/dashboard/card/js-card.png";
import tsCard from "@/assets/imgs/dashboard/card/ts.png";
import csharpCard from "@/assets/imgs/dashboard/card/csharp-card.png";
import javaCard from "@/assets/imgs/dashboard/card/java-card.png";
import phpCard from "@/assets/imgs/dashboard/card/php-card.webp";

import reactCard from "@/assets/imgs/dashboard/card/react-card.jpg";
import expressCard from "@/assets/imgs/dashboard/card/express-card.png";
import graphqlCard from "@/assets/imgs/dashboard/card/graphql-card.png";
import firebaseCard from "@/assets/imgs/dashboard/card/firebase-card.png";
import mongoCard from "@/assets/imgs/dashboard/card/mongo-card.png";
import nestCard from "@/assets/imgs/dashboard/card/nest-card.png";
import nextCard from "@/assets/imgs/dashboard/card/next-card.jpg";
import sqlCard from "@/assets/imgs/dashboard/card/sql-card.png";
import mysqlCard from "@/assets/imgs/dashboard/card/mysql-card.jpeg";
import { Skills } from "../types";

export const skills: Skills = {
  langs: [
    {
      name: "HTML",
      progressBar: 0,
      max: 90,
      card: htmlCard,
      accDegree: 0
    },
    {
      name: "CSS",
      progressBar: 0,
      max: 90,
      card: cssCard,
      accDegree: 0
    },
    {
      name: "Javascript",
      progressBar: 0,
      max: 84,
      card: jsCard,
      accDegree: 0
    },
    {
      name: "Typescript",
      progressBar: 0,
      max: 82,
      card: tsCard,
      accDegree: 0
    },
    {
      name: "C#",
      progressBar: 0,
      max: 83,
      card: csharpCard,
      accDegree: 0
    },
    {
      name: "Java",
      progressBar: 0,
      max: 54,
      card: javaCard,
      accDegree: 0
    },
    {
      name: "PHP",
      progressBar: 0,
      max: 60,
      card: phpCard,
      accDegree: 0
    },
  ],
  techs: [
    {
      name: "React",
      progressBar: 0,
      max: 86,
      card: reactCard,
      accDegree: 0
    },
    {
      name: "Express",
      progressBar: 0,
      max: 60,
      card: expressCard,
      accDegree: 0
    },
    {
      name: "Graphql",
      progressBar: 0,
      max: 45,
      card: graphqlCard,
      accDegree: 0
    },
    {
      name: "Firebase",
      progressBar: 0,
      max: 30,
      card: firebaseCard,
      accDegree: 0
    },
    {
      name: "Mongo",
      progressBar: 0,
      max: 71,
      card: mongoCard,
      accDegree: 0
    },
    {
      name: "Nest",
      progressBar: 0,
      max: 73,
      card: nestCard,
      accDegree: 0
    },
    {
      name: "Next",
      progressBar: 0,
      max: 82,
      card: nextCard,
      accDegree: 0
    },
    {
      name: "SQL",
      progressBar: 0,
      max: 60,
      card: sqlCard,
      accDegree: 0
    },
    {
      name: "MySql",
      progressBar: 0,
      max: 60,
      card: mysqlCard,
      accDegree: 0
    },
  ]
}