import express from "express";

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  res.render("projects");
});

projectsRouter.get("/list", (req, res) => {
  res.render("projects-list");
});

export default projectsRouter;
