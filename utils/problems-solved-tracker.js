import fetch from "node-fetch";
import cheerio from "cheerio";
import axios from "axios";

class ProblemsSolvedTracker {
  static #username = "DragunWF";
  static #digits = "0123456789";

  static async getTotalProblemsSolved() {
    const codewarsStats = await this.getCodewarsStats();
    const codechefStats = await this.getCodechefStats();
    const codeforcesStats = await this.getCodeforcesStats();
    return codewarsStats + codechefStats + codeforcesStats;
  }

  static async getCodechefStats() {
    const data = await this.#scrapeStats(
      `https://codeforces.com/profile/${this.#username.toLowerCase()}`,
      ".problems-solved"
    );
    if (data) {
      let problemsSolvedStr = [];
      for (let i = 64; i < data.length; i++) {
        if (this.#digits.includes(data[i])) problemsSolvedStr.push(data[i]);
        else break;
      }
      return Number(problemsSolvedStr.join(""));
    }
    return 0;
  }

  static async getCodeforcesStats() {}

  static async getCodewarsStats() {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${this.#username}`
    );
    const stats = await response.json();
    return stats.codeChallenges.totalCompleted;
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
