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
import boneyJames from "../assets/img/boney-james.jpg";
import mernDashboard from "../assets/img/mern-dashboard.jpg";
import portfolioLanding from "../assets/img/portfolio-landing.jpg";

export const ABOUT = {
  basic: {
    name: "Александр Ерхов",
    position: "Frontend-разработчик",
    github: "https://github.com/Henus321",
    avatar:
      "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  personal: {
    title: "Личная информация",
    description:
      "Cпециализируюсь на библиотеке React. Обладаю аналитическим мышлением. Рационально отношусь к непредвиденным ситуациям, легко нахожу общий язык с людьми. Есть огромное желание применять свои технические навыки в команде и создавать качественный продукт. Готов изучать любые новые технологии, требующиеся на проекте. От работы ожидаю интересных задач, хочу развиться в профессиональном плане.",
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
    list: [
      "JavaScript(ES6+)",
      "TypeScript",
      "React(Hooks)",
      "Redux(Thunk)/Redux Toolkit",
    ],
    icons: [Javascript, Typescript, FaReact, Redux],
  },
  secondary: {
    title: "Вспомогательные",
    list: ["Webpack", "Jest/React Testing Library", "Git"],
    icons: [Webpack, Jest, FaGithub],
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
    title: "Дополнительно",
    list: [
      "- Опыт работы с серверной частью на Node + Express и NoSQL СУБД(MongoDB и Firebase)",
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
    name: "Portfolio Landing",
    description:
      "Многофункциональное, ослепительное и вызывающее легкую зависть портфолио. Вы можете смотреть на него и восторгаться.",
    stack: "JavaScript, React, Styled Components",
    image: portfolioLanding,
    link: "https://hen-portfolio-landing.netlify.app/",
    github: "https://github.com/Henus321/portfolio-landing",
  },
];

export const CONTACTS = {
  github: "henus321",
  email: "tyrantbud@yandex.ru",
  telegram: "+7 (963) 962-40-50",
};
