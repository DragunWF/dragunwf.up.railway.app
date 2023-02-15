import express from "express";
import Database from "../utils/database.js";
import InfoTool from "../utils/infoTool.js";

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  res.render("projects");
  Database.insertPageVisit(InfoTool.getPageId("projects"));
});

projectsRouter.get("/list", (req, res) => {
  res.render("projects-list", {
    data: {
      webApplications: InfoTool.getProjectsList("webApplications"),
      gameApplications: InfoTool.getProjectsList("gameApplications"),
      automationAndBots: InfoTool.getProjectsList("automationAndBots"),
    },
  });
  Database.insertPageVisit(InfoTool.getPageId("projectsList"));
});

export default projectsRouter;
