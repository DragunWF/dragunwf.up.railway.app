import express from "express";
import Database from "../utils/database.js";
import InfoTool from "../utils/infoTool.js";

const socialsRouter = express.Router();

socialsRouter.get("/", (req, res) => {
  res.redirect("/");
});

socialsRouter.get("/github", (req, res) => {
  Database.insertSocialsVisit(InfoTool.getSocialId("github"));
  res.redirect("https://github.com/DragunWF");
});

socialsRouter.get("/itch.io", (req, res) => {
  Database.insertSocialsVisit(InfoTool.getSocialId("itch"));
  res.redirect("https://dragonwf.itch.io/");
});

socialsRouter.get("/steam", (req, res) => {
  Database.insertSocialsVisit(InfoTool.getSocialId("steam"));
  res.redirect("https://steamcommunity.com/profiles/76561198201145658");
});

socialsRouter.get("/codewars", (req, res) => {
  Database.insertSocialsVisit(InfoTool.getSocialId("codewars"));
  res.redirect("https://www.codewars.com/users/DragonWF");
});

socialsRouter.get("/typeracer", (req, res) => {
  Database.insertSocialsVisit(InfoTool.getSocialId("typeracer"));
  res.redirect("https://data.typeracer.com/pit/profile?user=dragonwf");
});

socialsRouter.get("/discord", (req, res) => {
  Database.insertSocialsVisit(InfoTool.getSocialId("discord"));
  res.redirect("https://discord.gg/9JdnnPN");
});

export default socialsRouter;
