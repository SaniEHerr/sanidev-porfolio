// TechLibrary
import techLibraryImg from "../assets/images/projects/techLibrary/techLibraryImg.png";

// Rascloud
import rasCloudImg from "../assets/images/projects/rasCloud/rasCloudImg.png";

// RombNotes
import rombNotesImg from "../assets/images/projects/rombNotes/rombNotesImg.png";

// Pokemon
import pokemonImg from "../assets/images/projects/pokemon/pokemonImg.png";


export const proyectData = [

  {
    id: "techlibrary",
    sequence: 1,
    title: "TechLibrary",
    text: [
      {
        es: "En Linkedin siempre veo que se comparten recursos utiles que casi siempre se pierden en el scroll de mi feed. Por esta razon cree TechLibrary, una pagina web para programadores y diseñadores, con el objetivo de facilitar la búsqueda y el descubrimiento de herramientas y recursos esenciales para el desarrollo y el diseño. Centraliza todos estos recursos, proporcionando un acceso directo y sencillo a cada uno de ellos.",
        en: "On LinkedIn, I often see useful resources being shared that almost always get lost in my feed's scroll. For this reason, I created TechLibrary, a website for programmers and designers, aimed at making it easier to find and discover essential tools and resources for development and design. It centralizes all these resources, providing direct and easy access to each one of them.",
      },
    ],
    secondary: [ 
      "REACT",
      "TYPESCRIPT",
      "TAILWIND",
      "FRAMERMOTION",
      "ZUSTAND",
      "NODE",
      "EXPRESS",
      "MYSQL",
      "DOCKER",
    ],
    desktopImgSrc: [techLibraryImg],
    mobileFirst: true,
    githubLink: "https://github.com/Nievas2/tech-library",
    liveLink: "https://tech-library-iota.vercel.app/",
    prev: "pokemon",
    next: "rascloud",
  },

  {
    id: "rascloud",
    sequence: 2,
    title: "Rascloud",
    text: [
      {
        es: "Rascloud es un proyecto personal inspirado en Spotify. Un día me pregunté: ¿Por qué no crear algo similar a Spotify? A partir de esa idea, puse manos en el codigo y nacio Rascloud. En esta plataforma, vas a poder subir tus propias canciones, escuchar las de otros usuarios, y crear playlists basadas en tus canciones favoritas o en las canciones que hayas subido vos mismo.",
        en: "Rascloud is a personal project inspired by Spotify. One day, I asked myself: Why not create something similar to Spotify? With that idea in mind, I started working, and that's how Rascloud was born. On this platform, you can upload your own songs, listen to those of other users, and create playlists based on your favorite tracks or the songs you've uploaded yourself.",
      },
    ],
    secondary: [
      "NEXT",
      "TYPESCRIPT",
      "TAILWIND",
      "SHADCN",
      "ZUSTAND",
      "SUPABASE",
    ],
    desktopImgSrc: [rasCloudImg],
    mobileFirst: true,
    githubLink: "https://github.com/SaniEHerr/RasCloudMusic",
    liveLink: "https://ras-cloud-music.vercel.app/",
    prev: "techlibrary",
    next: "rombnotes",
  },

  {
    id: "rombnotes",
    sequence: 3,
    title: "RombNotes",
    text: [
      {
        es: "Cansado de llevar el seguimiento de mis postulaciones en el Bloc de notas o en Word, decidi crear mi propio 'gestor de notas'. RombNotes permite crear documentos anidados y personalizables, donde plasmar tus ideas se torna sencillo. Vas a poder escribir texto, personalizar la fuente y los estilos, crear listas en diferentes formatos, utilizar iconos y subir imagenes.",
        en: "Tired of tracking my applications in Notepad or Word, I decided to create my own 'note manager.' RombNotes allows you to create nested and customizable documents, making it easy to capture your ideas. You'll be able to write text, customize fonts and styles, create lists in different formats, use icons, and upload images.",
      },
    ],
    secondary: [
      "NEXT",
      "TYPESCRIPT",
      "TAILWIND",
      "SHADCN",
      "ZUSTAND",
      "CLERK",
      "CONVEX",
    ],
    desktopImgSrc: [rombNotesImg],
    mobileFirst: true,
    githubLink: "https://github.com/SaniEHerr/FreeNotes",
    liveLink: "https://free-notes-dqbfcysid-sanieherrs-projects.vercel.app/",
    prev: "rascloud",
    next: "pokemon",
  },

  {
    id: "pokemon",
    sequence: 5,
    title: "PokeSani",
    text: [
      {
        es: "Este proyecto tiene un significado especial para mí, ya que fue mi primer desarrollo Fullstack a pesar de no tener experiencia previa en React, Node, y PostgreSQL. A lo largo del proceso, adquirí conocimientos fundamentales de cada tecnología, aprendiendo a consumir APIs, crear mi propia API, y diseñar una base de datos. En PokeSani, podes explorar y conocer en detalle todos los Pokémon de la primera generación, 'capturarlos' como favoritos, e incluso crear nuevos Pokémon.",
        en: "This project holds special meaning for me, as it was my first Fullstack development despite having no prior experience with React, Node, and PostgreSQL. Throughout the process, I gained fundamental knowledge of each technology, learning how to consume APIs, create my own API, and design a database. In PokeSani, you can explore and learn about all the Pokémon from the first generation, 'capture' them as favorites, and even create new Pokémon.",
      },
    ],
    secondary: [
      "REACT",
      "JAVASCRIPT",
      "TAILWIND",
      "NODE",
      "EXPRESS",
      "POSTGRESQL",
    ],
    desktopImgSrc: [pokemonImg],
    mobileFirst: true,
    githubLink: "https://github.com/SaniEHerr/pokemon-frontend",
    githubLinkBackend: "https://github.com/SaniEHerr/pokemon-backend",
    liveLink: "https://pokemon-frontend-rosy.vercel.app/",
    prev: "rombnotes",
    next: "techlibrary",
  },

  // {
  //   id: "random",
  //   sequence: 6,
  //   title: "Random",
  //   text: [
  //     "Unknown",
  //   ],
  //   secondary: ["HTML", "CSS", "WORDPRESS", "JAVASCRIPT", "JQUERY", "PHP"],
  //   // desktopImgSrc: [cd],
  //   mobileFirst: true,
  //   githubLink: "empty",
  //   liveLink: "empty",
  //   next: "techlibrary",
  // },
];