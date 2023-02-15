import express, { request } from "express";
import Database from "../utils/database.js";
import InfoTool from "../utils/infoTool.js";
import FormBot from "../utils/formBot.js";

const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.render("contact");
  Database.insertPageVisit(InfoTool.getPageId("contact"));
});

contactRouter.get("/form", (req, res) => {
  res.render("message-form");
  Database.insertPageVisit(InfoTool.getPageId("messageForm"));
});

contactRouter.post("/form", (req, res) => {
  FormBot.sendMessageForm(req.body);
  res.redirect("form/submitted");
});

contactRouter.get("/form/submitted", (req, res) => {
  res.render("form-submitted");
});

export default contactRouter;
