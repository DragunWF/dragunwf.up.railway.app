import express from "express";

const skillsRouter = express.Router();

skillsRouter.get("/", (req, res) => {
  res.render("skills");
});

skillsRouter.get("/more", (req, res) => {
  res.render("skills-info");
});

export default skillsRouter;
