import Burger from "../imgs/3d-icons/Burger_perspective_matte.png";
import Hub from "../imgs/3d-icons/Hub_perspective_matte.png";
// import LolaShop from "../imgs/3d-icons/LolaShop_cart_perspective_matte.png";
// import OnTrip from "../imgs/3d-icons/OnTrip_perspective_matte.png";
import APIOnTrip from "../imgs/3d-icons/APIOnTrip.png";
import MetalSul from "../imgs/3d-icons/MetalSul.png";
import RealEstate from "../imgs/3d-icons/RealEstate.png";

export const projects = [
  {
    name: "MetalSul",
    stack: "Front End",
    id: "MetalSul",
    bgColor: "linear-gradient(to bottom, #2c3e50, #3498db)",
    icon: MetalSul,
    info: [
      "This project is the website I developed for the MetalSul company.",
      "The main goal of this website is to present the company, its history, its previous works, and the services offered by MetalSul.",
      "Features: Navigation menu; 5 different pages: Home, Company, Services, Previous Works and Contact; Redirect to the company's Whats App.",
    ],
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "React Router Dom",
      "Styled-components",
      "Material UI",
      "Mobile-first",
    ],
    liveDemo: "https://metal-sul.vercel.app/",
    gitHub: "https://github.com/leticia-de-araujo/metal-sul",
  },
  {
    name: "Burguer Shop",
    stack: "Front End",
    id: "Burger",
    bgColor: "linear-gradient(to top, rgb(0 255 108), rgb(0 67 41))",
    icon: Burger,
    info: [
      "This project is a web page for a hamburger restaurant.",
      "Features: Add products to the shopping cart; Change the amount of a product in the shopping cart; Remove a product from the shopping cart; Remove all products from the shopping cart; Search by product name or category;",
      "This application was developed in React.js, and the products presented are the result of a RESTful API consumption, through a GET request.",
    ],
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "RESTful API consumption",
      "Mobile-first",
    ],
    liveDemo: "https://burguer-shop-pearl.vercel.app/",
    gitHub:
      "https://github.com/leticia-de-araujo/react-hamburgueria-da-kenzie-leticia-de-araujo",
  },
  {
    name: "DevHub",
    stack: "Front End",
    id: "Hub",
    bgColor: "linear-gradient(to bottom, #000046, #1cb5e0)",
    icon: Hub,
    info: [
      "This project is a developer portfolio hub.",
      "Features: User Registration and Login; Add technologies; Edit and Delete registered technologies; Error Page.",
      "This application was developed in React.js. The features were implemented by making requests (GET, PUT, POST, DELETE) in a RESTful API, using Axios.",
    ],
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "RESTful API consumption",
      "React Hook Form",
      "React Router Dom",
      "Yup",
      "Axios",
      "Styled-components",
      "Material UI",
      "Mobile-first",
    ],
    liveDemo: "https://kenzie-hub-rosy-ten.vercel.app/",
    gitHub:
      "https://github.com/leticia-de-araujo/react-kenzie-hub-leticia-de-araujo",
  },
  // {
  //   name: "OnTrip",
  //   stack: "Front-End",
  //   id: "OnTrip",
  //   bgColor: "linear-gradient(to top, #c193ff,  #5614b0)",
  //   icon: OnTrip,
  //   info: [
  //     "O OnTrip tem como proposta ser uma plataforma para reserva de acomodações focada em nômades digitais.",
  //     "Esse foi o projeto final do curso de Front-End da Kenzie Academy, e foi feito em equipe por 6 desenvolvedores.",
  //     "Funcionalidades: Cadastro e Login de usuários; Adição e edição de review da plataforma e de cada acomodação; Filtro de busca de acomodações; Reserva de acomodação; Edição e deleção de reserva; Filtrar as viagens futuras, canceladas e realizadas; Adicionar, remover e editar acomodação.",
  //   ],
  //   techs: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React.js",
  //     "Redux",
  //     "Redux-thunk",
  //     "React Router Dom",
  //     "React Hook Form",
  //     "Yup",
  //     "Axios",
  //     "Styled-components",
  //     "Material UI",
  //     "Mobile-first",
  //   ],
  //   liveDemo: "https://on-trip.vercel.app/",
  //   gitHub: "https://github.com/brunopassos/Capstone-m3",
  // },
  // {
  //   name: "Lola Shop",
  //   stack: "Front-End",
  //   id: "LolaShop",
  //   bgColor: "linear-gradient(to top, #ffc0cb, #800080)",
  //   icon: LolaShop,
  //   info: [
  //     "O objetivo principal deste projeto foi praticar o uso do Redux com um e-commerce simples.",
  //     "Esta aplicação foi desenvolvida em React.js, com o auxílio de bibliotecas desta tecnologia.",
  //   ],
  //   techs: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React.js",
  //     "Redux",
  //     "Redux-thunk",
  //     "React Router Dom",
  //     "Styled-components",
  //     "Material UI",
  //     "Mobile-first",
  //   ],
  //   liveDemo: "https://kenzie-shop-dun-eight.vercel.app/",
  //   gitHub:
  //     "https://github.com/Kenzie-Academy-Brasil-Developers/react-redux-lolashop-leticia-de-araujo",
  // },
  {
    name: "API OnTrip",
    stack: "Back End",
    id: "APIOnTrip",
    bgColor: "linear-gradient(to top, rgb(185 147 255), rgb(42, 8, 69)",
    icon: APIOnTrip,
    info: [
      "This project is an API for an accommodation booking platform.",
      "This was the final project of the Kenzie Academy Brasil Back-End JavaScript course, and it was developed in a team by six developers, on which I acted as Tech Lead.",
      "The API was developed based on 8 tables (Entities), contains several CRUDs (Create, Read, Update and Delete), with authentications and verifications, as well as 164 integration tests.",
    ],
    techs: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostegreSQL",
      "TypeORM",
      "Yup",
      "Docker",
      "Jest",
      "Heroku",
    ],
    BaseUrl: "https://ontrip.herokuapp.com/",
    gitHub: "https://github.com/leticia-de-araujo/API-ontrip",
  },
  {
    name: "API Real Estate",
    stack: "Back End",
    id: "RealEstate",
    bgColor: "linear-gradient(to top, #ff9b9b, darkred)",
    icon: RealEstate,
    info: [
      "This project is a real estate API, which relates users with properties and with visits to those properties.",
      "The API was developed based on 5 tables (Entities): Users, Address, Properties, Categories and Schedules.",
      "Several CRUD (Create, Read, Update and Delete) were developed, with authentications and verifications.",
    ],
    techs: ["Node.js", "Express", "TypeScript", "PostegreSQL", "TypeORM"],
    gitHub: "https://github.com/leticia-de-araujo/API-real-estate",
  },
];
