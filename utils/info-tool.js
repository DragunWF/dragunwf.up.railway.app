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
  static socialIds = {
    github: 1,
    itch: 2,
    steam: 3,
    codewars: 4,
    typeracer: 5,
    discord: 6,
  };

  static getPageId(pageName) {
    return this.#pageIds[pageName];
  }

  static getSocialId(socialName) {
    return this.#socialIds[socialName];
  }
}

export default InfoTool;
