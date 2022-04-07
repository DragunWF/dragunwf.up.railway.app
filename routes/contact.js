import express from "express";
import DatabaseTool from "../utils/db-tool.js";

const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.render("contact");
  DatabaseTool.insertPageVisit(7);
});

contactRouter.get("/form", (req, res) => {
  res.render("message-form");
  DatabaseTool.insertPageVisit(8);
});

export default contactRouter;
