const Achievements = [
  {
    id: "articlespelunker",
    name: "Article Spelunker",
    description: "Scroll to the bottom of an article",
    requirements: 1,
    completed: false,
    completedDate: null,
    progress: {
      names: [], // array of article ids for tracking unique articles read
    },
  },
  {
    id: "scholar",
    name: "Scholar",
    description: "Read Three Articles",
    requirements: 3,
    completed: false,
    completedDate: null,
    progress: {
      names: [], // array of article ids for tracking unique articles read
    },
  },
  {
    id: "seetheworld",
    name: "See the world",
    description: "Navigate to each major page on the nav bar",
    requirements: 4,
    completed: false,
    completedDate: null,
    progress: {
      names: [], // array of links followed
    },
  },
  {
    id: "redecorate",
    name: "Change of Scenery",
    description: "Toggle the site theme",
    requirements: 1,
    completed: false,
    completedDate: null,
    progress: {
      names: [], // array of links followed
    },
  },
];

export default Achievements;
