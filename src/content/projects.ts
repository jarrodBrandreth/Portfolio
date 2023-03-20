import qrPlantShop from '../assets/qrcode_plantshop.png';
import qrPokemonFun from '../assets/qrcode_pokefun.png';
import qrSkatemaps from '../assets/qrcode_skatemaps.png';
import plantshopImage from '../assets/plantshop_screenshot.jpg';
import pokemonImage from '../assets/pokefun_screenshot.png';
import skatemapsImage from '../assets/skatemaps_screenshot.jpg';
import { ProjectObj } from '../types/types';

const plantShop: ProjectObj = {
  name: 'The Plant Shop',
  image: plantshopImage,
  qrCode: qrPlantShop,
  description:
    'Foo Coding final project tasked with grasping the fundamentals of React. I built a e-commerce front end using React with TypeScript and JSON placeholder REST API to fetch data. Shopping cart, product views, sort by features and search filtering.',
  stack: 'React, TypeScript',
  hosted: 'https://plant-shop.onrender.com/',
  source: 'https://github.com/jarrodBrandreth/plant-shop-react',
};

const pokemonFun: ProjectObj = {
  name: 'PokéFun',
  image: pokemonImage,
  qrCode: qrPokemonFun,
  description:
    'Using the PokeApi RESTful api to fetch data, I built a word and image guessing game with React and TypeScript. Contains the ability to play games seperately or play tournament mode and collect points. Has keyboard functionality as well as a graphical keyboard. Have fun!',
  stack: 'React, TypeScript',
  hosted: 'https://pokemon-game-test.onrender.com/',
  source: 'https://github.com/jarrodBrandreth/react-pokemon-game',
};

const skatemaps: ProjectObj = {
  name: 'NYC Skatemaps',
  image: skatemapsImage,
  qrCode: qrSkatemaps,
  description:
    'A MERN full-stack app of popular destinations for skateboarders in New York City. Contains admin panel and a personalized map for users to bookmark, create, edit or delete your own locations. *server is currently hosted for free so initial load may take some time.',
  stack: 'React, TypeScript, NodeJS, Express, MongoDB',
  hosted: 'https://skatemaps.onrender.com/',
  source: 'https://github.com/jarrodBrandreth/SkateMapsClient',
};

export const projects: ProjectObj[] = [skatemaps, plantShop, pokemonFun];
