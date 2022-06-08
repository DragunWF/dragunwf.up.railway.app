import express from "express";
import DatabaseTool from "../utils/db-tool.js";
import InfoTool from "../utils/info-tool.js";

const skillsRouter = express.Router();

skillsRouter.get("/", (req, res) => {
  res.render("skills");
  DatabaseTool.insertPageVisit(InfoTool.getPageId("skills"));
});

skillsRouter.get("/more", (req, res) => {
  res.render("skills-info", {
    data: {
      languages: InfoTool.getSkillsList("languages"),
      misc: InfoTool.getSkillsList("misc"),
      technologies: InfoTool.getSkillsList("technologies"),
      concatenateSkills: (skills) => {
        return;
      },
    },
  });
  DatabaseTool.insertPageVisit(InfoTool.getPageId("skillsInfo"));
});

export default skillsRouter;
