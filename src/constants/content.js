import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { ReactComponent as Javascript } from "../assets/icons/javascript.svg";
import { ReactComponent as Typescript } from "../assets/icons/typescript.svg";
import { ReactComponent as Redux } from "../assets/icons/redux.svg";
import { ReactComponent as Sass } from "../assets/icons/sass.svg";
import { ReactComponent as Webpack } from "../assets/icons/webpack.svg";
import { ReactComponent as Tailwind } from "../assets/icons/tailwindcss.svg";
import { ReactComponent as Jest } from "../assets/icons/jest.svg";
import { ReactComponent as Antd } from "../assets/icons/antd.svg";

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
    list: ["HTML", "CSS", "SCSS", "Ant Design", "TailwindCSS"],
    icons: [FaHtml5, FaCss3Alt, Sass, Antd, Tailwind],
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

export const PROJECTS = {
  first: {
    name: "Boney James",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus error ex consequatur in mollitia cupiditate, laudantium adipisci provident libero. Nemo sed fugiat ut officia optio eum doloremque quia voluptate!",
    image:
      "https://images.unsplash.com/photo-1514813836041-518668f092b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  second: {
    name: "Mern Dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus error ex consequatur in mollitia cupiditate, laudantium adipisci provident libero. Nemo sed fugiat ut officia optio eum doloremque quia voluptate!",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
};

export const CONTACTS = {
  github: "henus321",
  email: "mail@yandex.ru",
  telegram: "+7 903 1234567",
};
