import express from "express";
import DatabaseTool from "../utils/db-tool.js";

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  res.render("projects");
  DatabaseTool.insertPageVisit(3);
});

projectsRouter.get("/list", (req, res) => {
  res.render("projects-list");
  DatabaseTool.insertPageVisit(4);
});

export default projectsRouter;
