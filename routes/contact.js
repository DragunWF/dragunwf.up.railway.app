import express from "express";
import DatabaseTool from "../utils/db-tool.js";
import InfoTool from "../utils/info-tool.js";

const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.render("contact");
  DatabaseTool.insertPageVisit(InfoTool.getPageId("contact"));
});

contactRouter.get("/form", (req, res) => {
  res.render("message-form");
  DatabaseTool.insertPageVisit(InfoTool.getPageId("messageForm"));
});

export default contactRouter;
