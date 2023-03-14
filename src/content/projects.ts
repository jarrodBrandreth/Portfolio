import qrPlantShop from '../assets/qrcode_plantshop.png';
import qrPokemonFun from '../assets/qrcode_pokefun.png';
import qrSkatemaps from '../assets/qrcode_skatemaps.png';
import plantshopImage from '../assets/plantshop_screenshot.jpg';
import pokemonImage from '../assets/pokefun_screenshot.png';
import skatemapsImage from '../assets/skatemaps_screenshot.jpg';
import { ProjectObj } from '../types/types';


const plantShop:ProjectObj = {
  name:'The Plant Shop',
  image:plantshopImage,
  qrCode:qrPlantShop,
  description:'Foo Coding project tasked with grasping the fundamentals of React. I built a mock plant e-commerce front end using React with TypeScript and JSON placeholder REST API to fetch data. Shopping cart, product views, sort by features and search filtering.',
  stack: 'React, TypeScript',
  hosted:'https://plant-shop.onrender.com/',
  source:'https://github.com/jarrodBrandreth/plant-shop-react',
}

const pokemonFun:ProjectObj = {
 name:'PokéFun',
  image:pokemonImage,
  qrCode:qrPokemonFun,
  description:'A word and image guessing game built with React, TypeScript and using PokeApi REST API to fetch data. Ability to play games seperately or play tournament mode and collect points. Keyboard functionality as well as a graphical keyboard. Have fun!',
  stack: 'React, TypeScript',
  hosted:'https://pokemon-game-test.onrender.com/',
  source:'https://github.com/jarrodBrandreth/react-pokemon-game',
}

const skatemaps:ProjectObj = {
 name:'NYC Skatemaps',
  image:skatemapsImage,
  qrCode:qrSkatemaps,
  description:'A map of popular destinations for skateboarders in New York City. Contains a personalized map where you can bookmark, create, edit or delete your own locations as well as admin panel to perform CRUD operations app wide. Built using the MERN stack. *server is currently hosted for free so initial load may take some time.',
  stack: 'React, TypeScript, NodeJS, Express, MongoDB',
  hosted:'https://skatemaps.onrender.com/',
  source:'https://github.com/jarrodBrandreth/SkateMapsClient',
}

export const projects:ProjectObj[] = [plantShop, pokemonFun, skatemaps];