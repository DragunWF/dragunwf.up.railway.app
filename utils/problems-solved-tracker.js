import fetch from "node-fetch";
import cheerio from "cheerio";
import axios from "axios";

class ProblemsSolvedTracker {
  static #username = "DragunWF";

  static async getTotalProblemsSolved() {
    const codewarsStats = await this.#getCodewarsStats();
    const codechefStats = null;
    const codeforcesStats = null;
  }

  static async #getCodewarsStats() {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${username}`
    );
    const stats = await response.json();
    return stats.codeChallenges.totalCompleted;
  }
}

export default ProblemsSolvedTracker;
