import express, { request } from "express";
import DatabaseTool from "../utils/db-tool.js";
import InfoTool from "../utils/info-tool.js";
import sendMessageForm from "../utils/form-bot.js";

const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.render("contact");
  DatabaseTool.insertPageVisit(InfoTool.getPageId("contact"));
});

contactRouter.get("/form", (req, res) => {
  res.render("message-form");
  DatabaseTool.insertPageVisit(InfoTool.getPageId("messageForm"));
});

contactRouter.post("/form", (req, res) => {
  sendMessageForm(req.body);
  res.redirect("form/submitted");
});

contactRouter.get("/form/submitted", (req, res) => {
  res.render("form-submitted");
});

export default contactRouter;
