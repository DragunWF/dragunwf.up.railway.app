class InfoTool {
  static #pageIds = {
    home: 1,
    about: 2,
    projects: 3,
    projectsList: 4,
    skills: 5,
    skillsInfo: 6,
    contact: 7,
    messageForm: 8,
  };
  static #socialIds = {
    github: 1,
    itch: 2,
    steam: 3,
    codewars: 4,
    typeracer: 5,
    discord: 6,
  };
  static #projectsList = {
    automationAndBots: [
      {
        name: "Scarlet",
        link: "https://github.com/DragunWF/Scarlet",
        description:
          "A private discord bot made with NodeJS with a MySQL database to monitor my server " +
          "with some utility and fun commands to try out.",
      },
      {
        name: "AutoJoinZoom",
        link: "https://github.com/DragunWF/AutoJoinZoom",
        description:
          "An automation bot used for automatically joining zoom meetings. I created " +
          "this bot with the sole purpose of using it to join my zoom classes with ease.",
      },
      {
        name: "CookieClicker Bot",
        link: "https://github.com/DragunWF/Cookie-Clicker-Bot",
        description:
          "An automation bot made with Selenium and Python. It's used for " +
          "automating the well-known game, Cookie Clicker.",
      },
      {
        name: "TypeRacer Bot",
        link: "https://github.com/DragunWF/TypeRacer-Bot",
        description:
          "An typing automation bot made with Selenium and Python. Used for automating " +
          "practice and training races.",
      },
      {
        name: "Ancalagon",
        link: "https://github.com/DragunWF/Ancalagon",
        description:
          "A discord bot with made with NodeJS. It's a bot with an economy feature where " +
          "you can grind and earn some bot-currency. It's also a bot with utility commands.",
      },
      {
        name: "DragonBot",
        link: "https://github.com/DragunWF/DragonBot",
        description:
          "A general-purpose discord bot made in Python. This was my first big project " +
          "made with Python.",
      },
    ],
    webApplications: [
      {
        name: "Benefits of Saving",
        link: "https://benefits-of-saving.herokuapp.com/",
        description: "",
      },
      {
        name: "Safety Protocols in Hiking",
        link: "https://hiking-safety-protocols.netlify.app/",
        description: "",
      },
    ],
    gameApplications: [
      {
        name: "Undying Mage",
        link: "https://dragonwf.itch.io/undying-mage",
        description:
          "A game where you play as a mage who gets stronger with each death he gets. Made with " +
          "the Unity Engine and C#. A submission for GameDev.tv's 2022 game jam.",
      },
      {
        name: "Mage Alteration",
        link: "https://dragonwf.itch.io/mage-alteration",
        description:
          "A game where you can power up your mage through mutations and powerups. " +
          "Made from scratch with PyGame and Python.",
      },
      {
        name: "Galactic n' Guns",
        link: "https://dragonwf.itch.io/galactic-n-guns",
        description:
          "A space shooter game where you can shoot down alien ships. Made from" +
          "scratch with PyGame and Python.",
      },
      {
        name: "Blue Warcook",
        link: "https://dragonwf.itch.io/blue-warcook",
        description:
          "A survival shooter game made from scratch with the PyGame library and Python.",
      },
      {
        name: "Gem Collector",
        link: "https://dragonwf.itch.io/gem-collector",
        description:
          "A game where you just collect gems before the timer runs out. Made as a practice project " +
          "for a learning experience with the Unity Engine and C#.",
      },
    ],
  };

  static getPageId(pageName) {
    return this.#pageIds[pageName];
  }

  static getSocialId(socialName) {
    return this.#socialIds[socialName];
  }

  static getProjectsList(category = null) {
    return category ? this.#projectsList[category] : this.#projectsList;
  }
}

export default InfoTool;
