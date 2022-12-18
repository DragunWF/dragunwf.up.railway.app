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
    problemsSolved: 9,
    deception: 10,
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
        name: "Zoom Bot",
        link: "https://github.com/DragunWF/Zoom-Bot",
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
        description:
          "A single web page application with a visit counter near the header. Made as " +
          "my submission for a performance task in school.",
      },
      {
        name: "Safety Protocols in Hiking",
        link: "https://hiking-safety-protocols.netlify.app/",
        description:
          "A single web page application serving the purpose of an infographic. Made as " +
          "my submission for a project in my P.E class in school.",
      },
    ],
    gameApplications: [
      {
        name: "Undying Mage",
        link: "https://dragonwf.itch.io/undying-mage",
        description:
          "A game where you play as a mage who gets stronger with each death he gets. Made with " +
          "the Unity Engine and C#. My submission for GameDev.tv's 2022 game jam.",
      },
      {
        name: "Geo-Shooter",
        link: "https://dragonwf.itch.io/geo-shooter",
        description:
          "My submission for GeoJam 2022. It is a game where you simply play as a triangle " +
          "shooting enemies that come towards you.",
      },
      {
        name: "Mage Alteration",
        link: "https://dragonwf.itch.io/mage-alteration",
        description:
          "A game where you can power up your mage through mutations and powerups. " +
          "Made from scratch with PyGame and Python. My submission for the PyGame " +
          "community new years 2021 game jam.",
      },
      {
        name: "Galactic n' Guns",
        link: "https://dragonwf.itch.io/galactic-n-guns",
        description:
          "A space shooter game where you can shoot down alien ships. Made from " +
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
  static #skillsList = {
    languages: ["Python", "JavaScript", "HTML & CSS", "C", "C#", "Java", "SQL"],
    misc: ["100-135 WPM QWERTY", "Gimp", "Piskel"],
    technologies: [
      {
        category: "Web Development",
        skills: ["Node.js", "Express.js", "jQuery"],
      },
      { category: "Game Development", skills: ["Unity Engine", "PyGame"] },
      {
        category: "Bots/Automation",
        skills: ["Selenium.py", "Discord.js", "PyAutoGUI"],
      },
      { category: "Databases", skills: ["MySQL", "SQLite"] },
      {
        category: "Code Editors/IDEs",
        skills: ["VSCode", "Visual Studio", "NetBeans"],
      },
      { category: "Source Control", skills: ["Git", "GitHub"] },
      { category: "Operating Systems", skills: ["Windows", "Linux", "MacOS"] },
      { category: "Linux Distros", skills: ["Ubuntu", "Mint"] },
    ],
  };

  static getPageId(pageName) {
    return this.#getId(pageName, "pages");
  }

  static getSocialId(socialName) {
    return this.#getId(socialName, "socials");
  }

  static getProjectsList(category = null) {
    return this.#getList("projects", category);
  }

  static getSkillsList(category = null) {
    return this.#getList("skills", category);
  }

  static #getId(idString, category) {
    let list;

    switch (category.toLowerCase()) {
      case "pages":
        list = this.#pageIds;
        break;
      case "socials":
        list = this.#socialIds;
        break;
      default:
        throw new Error("Unknown category chosen for IDs");
    }

    if (this.#checkListIfExists(idString, list)) return list[idString];

    const errorString = category === "pages" ? "page" : "social";
    const capitalized = `${errorString
      .charAt(0)
      .toUpperCase()}${errorString.substring(1)}`;
    throw new Error(
      `${capitalized} string is not in the list of names for ${errorString} IDs. ` +
        "Please check your string reference."
    );
  }

  static #getList(type, category) {
    const availableListTypes = ["projects", "skills"];
    if (availableListTypes.includes(type)) {
      const list = type === "projects" ? this.#projectsList : this.#skillsList;
      return category ? list[category] : list;
    }
    throw new Error("Unknown list type!");
  }

  static #checkListIfExists(stringReferenceForId, list) {
    const items = [];
    for (let item in list) items.push(item);
    return items.includes(stringReferenceForId);
  }
}

export default InfoTool;
