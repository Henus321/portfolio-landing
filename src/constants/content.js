import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { ReactComponent as Javascript } from "../assets/icons/javascript.svg";
import { ReactComponent as Typescript } from "../assets/icons/typescript.svg";
import { ReactComponent as Redux } from "../assets/icons/redux.svg";
import { ReactComponent as Sass } from "../assets/icons/sass.svg";
import { ReactComponent as Webpack } from "../assets/icons/webpack.svg";
import { ReactComponent as Tailwind } from "../assets/icons/tailwindcss.svg";
import { ReactComponent as Jest } from "../assets/icons/jest.svg";
import { ReactComponent as Antd } from "../assets/icons/antd.svg";
import { ReactComponent as StyledComponents } from "../assets/icons/styled-components.svg";
import { ReactComponent as MobX } from "../assets/icons/mobx.svg";
import { ReactComponent as NextJs } from "../assets/icons/next-js.svg";
import boneyJames from "../assets/img/boney-james.jpg";
import mernDashboard from "../assets/img/mern-dashboard.jpg";
import russoTrip from "../assets/img/russo-trip.jpg";
import avatar from "../assets/img/avatar.jpg";

export const ABOUT = {
  basic: {
    name: "Александр Ерхов",
    position: "Frontend-разработчик",
    github: "https://github.com/Henus321",
    avatar,
  },
  personal: {
    title: "Личная информация",
    description:
      "Cпециализируюсь на библиотеке React, но также всегда готов изучать любые другие технологии. Рационально отношусь к непредвиденным ситуациям, легко нахожу общий язык с людьми. Есть огромное желание применять свои технические навыки в команде и создавать качественный продукт. От работы ожидаю интересных задач, хочу развиться в профессиональном плане.",
  },
  experience: {
    title: "Опыт",
    description:
      "Программирую 1 год, коммерческого опыта в сфере разработки нет.",
  },
  education: {
    title: "Образование",
    description:
      "Высшее техническое - Московский государственный строительный университет, Промышленное и гражданское строительство, степень специалиста.",
  },
};

export const SKILLS = {
  primary: {
    title: "Основные",
    list: ["JavaScript(ES6+)", "TypeScript", "React(Hooks)", "Next.js"],
    icons: [Javascript, Typescript, FaReact, NextJs],
  },
  secondary: {
    title: "Дополнительные",
    list: [
      "Redux(Thunk)/Redux Toolkit",
      "MobX",
      "Webpack",
      "Jest/React Testing Library",
      "Git",
    ],
    icons: [Redux, MobX, Webpack, Jest, FaGithub],
  },
  layout: {
    title: "Верстка",
    list: [
      "HTML",
      "CSS",
      "SCSS",
      "Styled Components",
      "TailwindCSS",
      "Ant Design",
    ],
    icons: [FaHtml5, FaCss3Alt, Sass, StyledComponents, Tailwind, Antd],
  },
  additional: {
    title: "Смежные навыки",
    list: [
      "- Опыт работы с серверной частью на Node + Express",
      "- Управление NoSQL базами данных(MongoDB и Firebase)",
      "- Работа с Headless CMS(Strapi)",
      "- Практика проектирования REST API",
      "- Навык использования Postman для HTTP запросов",
      "- Есть опыт верстки с макетов Figma, Photoshop и Pixel Perfect",
      "- Английский язык на уровне чтения документации и просмотра образовательных роликов",
    ],
  },
};

export const PROJECTS = [
  {
    name: "Boney James",
    description:
      "Веб-сайт электронной коммерции. Вы можете просматривать коллекцию пальто, добавлять товары в корзину, делать закладки и заказывать товары. Аутентификация осуществляется с помощью Firebase.",
    stack:
      "TypeScript, React, Redux with RTK, Firebase, SCSS, Webpack, React Testing Library",
    image: boneyJames,
    link: "https://boney-james.netlify.app/",
    github: "https://github.com/Henus321/boney-james",
  },
  {
    name: "Mern Dashboard",
    description:
      "Полнофункциональное веб-приложение. Вы можете создавать или редактировать заказы на основе клиентов и продуктов из базы данных. Аутентификация осуществляется с помощью JWT и хранится в файлах cookie. Пользовательские данные доступны для редактирования в настройках профиля.",
    stack:
      "TypeScript, React, Redux with RTK, Ant Design, Webpack, React Testing Library, JavaScript, Node, Express, Mongo DB",
    image: mernDashboard,
    link: "https://mern-dashboard.onrender.com/",
    github: "https://github.com/Henus321/mern-dashboard",
  },
  {
    name: "Russo Trip",
    description:
      "Блог о путешествиях. Вы можете просматривать посты, оставлять комментарии и делать закладки. Аутентификация осуществляется с помощью Strapi.",
    stack: "TypeScript, Next.js, MobX, TailwindCSS, Strapi",
    image: russoTrip,
    link: "https://russo-trip.vercel.app/",
    github: "https://github.com/Henus321/russo-trip-frontend",
  },
];

export const CONTACTS = {
  github: "henus321",
  email: "tyrantbud@yandex.ru",
  telegram: "+7 (963) 962-40-50",
};
