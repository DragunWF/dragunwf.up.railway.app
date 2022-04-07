import express from "express";

const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.render("contact");
});

contactRouter.get("/form", (req, res) => {
  res.render("message-form");
});

export default contactRouter;
