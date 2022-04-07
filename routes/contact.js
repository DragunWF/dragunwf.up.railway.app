import express from "express";

const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.render("skills");
});

contactRouter.get("/form", (req, res) => {
  res.render("skills-info");
});

export default contactRouter;
