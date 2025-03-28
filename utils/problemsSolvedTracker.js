import fetch from "node-fetch";
import * as cheerio from "cheerio";
import axios from "axios";

class ProblemsSolvedTracker {
  static #username = "DragunWF";
  static #codewarsUsername = "DragunWF";
  static #digits = "0123456789";

  static async getTotalProblemsSolved() {
    const codewarsStats = await this.getCodewarsStats();
    const codechefStats = await this.getCodechefStats();
    const codeforcesStats = await this.getCodeforcesStats();
    return codewarsStats + codechefStats + codeforcesStats;
  }

  static async getCodechefStats() {
    const data = await this.#scrapeStats(
      `https://codechef.com/users/${this.#username.toLowerCase()}`,
      ".problems-solved"
    );
    if (data) {
      const problemsSolvedIndex = 96; // Obtained through testing
      let problemsSolvedStr = "";
      for (let i = problemsSolvedIndex; i < data.length; i++) {
        if (this.#digits.includes(data[i])) problemsSolvedStr += data[i];
        else break;
      }
      return Number(problemsSolvedStr);
    }
    return 0;
  }

  static async getCodeforcesStats() {
    const data = await this.#scrapeStats(
      `https://codeforces.com/profile/${this.#username}`,
      "._UserActivityFrame_counterValue"
    );
    if (data) {
      const problemsSolved = Number(data.split(" ")[0]);
      return problemsSolved;
    }
    return 0;
  }

  static async getCodewarsStats() {
    try {
      const response = await fetch(
        `https://www.codewars.com/api/v1/users/${this.#codewarsUsername}`
      );
      const stats = await response.json();
      return stats.codeChallenges.totalCompleted;
    } catch (err) {
      console.log(err);
      return 0;
    }
  }

  static async #scrapeStats(url, tag) {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      return $(tag).text();
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default ProblemsSolvedTracker;
