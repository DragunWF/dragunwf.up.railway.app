import express from "express";
import DatabaseTool from "../utils/db-tool.js";

const skillsRouter = express.Router();

skillsRouter.get("/", (req, res) => {
  res.render("skills");
  DatabaseTool.insertPageVisit(5);
});

skillsRouter.get("/more", (req, res) => {
  res.render("skills-info");
  DatabaseTool.insertPageVisit(6);
});

export default skillsRouter;
