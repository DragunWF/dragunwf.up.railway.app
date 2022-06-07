import express from "express";
import DatabaseTool from "../utils/db-tool.js";
import InfoTool from "../utils/info-tool.js";

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  res.render("projects");
  DatabaseTool.insertPageVisit(InfoTool.getPageId("projects"));
});

projectsRouter.get("/list", (req, res) => {
  res.render("projects-list");
  DatabaseTool.insertPageVisit(InfoTool.getPageId("projectsList"));
});

export default projectsRouter;
