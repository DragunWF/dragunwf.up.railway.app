import express from "express";
import Database from "../utils/database.js";
import InfoTool from "../utils/infoTool.js";
import Utils from "../utils/utils.js";
import ProblemsSolvedTracker from "../utils/problemsSolvedTracker.js";

const skillsRouter = express.Router();

skillsRouter.get("/", (req, res) => {
  const languagesArray = Utils.splitAmpersandsFromArray(
    InfoTool.getSkillsList("languages")
  );
  res.render("skills", {
    data: {
      languages: Utils.concatenateStringsWithAnd(languagesArray),
    },
  });

  Database.insertPageVisit(InfoTool.getPageId("skills"));
});

skillsRouter.get("/more", async (req, res) => {
  res.render("skills-info", {
    data: {
      languages: InfoTool.getSkillsList("languages"),
      misc: InfoTool.getSkillsList("misc"),
      technologies: InfoTool.getSkillsList("technologies"),
      concatenateSkills: Utils.concatenateStrings,
      problemsSolved: Utils.formatProblemsSolved(
        await ProblemsSolvedTracker.getTotalProblemsSolved()
      ),
    },
  });

  Database.insertPageVisit(InfoTool.getPageId("skillsInfo"));
});

export default skillsRouter;
