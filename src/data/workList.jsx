// TechLibrary
import techLibraryImg from "../assets/images/projects/techLibrary/techLibraryImg.png";

// Rascloud
import rasCloudImg from "../assets/images/projects/rascloud/rasCloudImg.png";

// RombNotes
import rombNotesImg from "../assets/images/projects/rombNotes/rombNotesImg.png";

// Pokemon
import pokemonImg from "../assets/images/projects/pokemon/pokemonImg.png";


export const WorksListItem = {
  id: "string",
  title: "string",
  src: "string",
  leftFlex: [0, 1, 2, 3],
  rightFlex: [0, 1, 2, 3],
  thumbnailOffset: "string",
  offsetX: "number",
  offsetY: "number",
};

export const WorksList = [
  {
    id: "techlibrary",
    title: "TechLibrary",
    src: techLibraryImg,
    leftFlex: 0,
    rightFlex: 2,
    thumbnailOffset: "60%",
    offsetX: 30,
    offsetY: -10,
  },

  {
    id: "rascloud",
    title: "Rascloud",
    src: rasCloudImg,
    leftFlex: 3,
    rightFlex: 1,
    thumbnailOffset: "20%",
    offsetX: 30,
    offsetY: -10,
  },

  {
    id: "rombnotes",
    title: "RombNotes",
    src: rombNotesImg,
    leftFlex: 1,
    rightFlex: 3,
    thumbnailOffset: "70%",
    offsetX: -10,
    offsetY: 5,
  },

  {
    id: "pokemon",
    title: "Pokemon",
    src: pokemonImg,
    leftFlex: 3,
    rightFlex: 1,
    thumbnailOffset: "20%",
    offsetX: 30,
    offsetY: 5,
  },

  // {
  //   id: "easytasks",
  //   title: "EasyTasks",
  //   src: viajaya,
  //   leftFlex: 0,
  //   rightFlex: 2,
  //   thumbnailOffset: "60%",
  //   offsetX: 30,
  //   offsetY: 5,
  // },

  // {
  //   id: "random",
  //   title: "Random",
  //   src: china,
  //   leftFlex: 0,
  //   rightFlex: 2,
  //   thumbnailOffset: "80%",
  //   offsetX: 30,
  //   offsetY: -10,
  // },
];
