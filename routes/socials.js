import express from "express";
import DatabaseTool from "../utils/db-tool.js";

const socialsRouter = express.Router();

socialsRouter.get("/", (req, res) => {
  res.redirect("/");
});

socialsRouter.get("/github", (req, res) => {
  DatabaseTool.insertSocialsVisit(1);
  res.redirect("https://github.com/DragunWF");
});

socialsRouter.get("/itch.io", (req, res) => {
  DatabaseTool.insertSocialsVisit(2);
  res.redirect("https://dragonwf.itch.io/");
});

socialsRouter.get("/steam", (req, res) => {
  DatabaseTool.insertSocialsVisit(3);
  res.redirect("https://steamcommunity.com/profiles/76561198201145658");
});

socialsRouter.get("/codewars", (req, res) => {
  DatabaseTool.insertSocialsVisit(4);
  res.redirect("https://www.codewars.com/users/DragonWF");
});

socialsRouter.get("/typeracer", (req, res) => {
  DatabaseTool.insertSocialsVisit(5);
  res.redirect("https://data.typeracer.com/pit/profile?user=dragonwf");
});

socialsRouter.get("/discord", (req, res) => {
  DatabaseTool.insertSocialsVisit(6);
  res.redirect("https://discord.gg/9JdnnPN");
});

export default socialsRouter;
