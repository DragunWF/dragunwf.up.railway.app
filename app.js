import "dotenv/config";
import express from "express";

import projectsRouter from "./routes/projects.js";
import skillsRouter from "./routes/skills.js";
import contactRouter from "./routes/contact.js";
import socialsRouter from "./routes/socials.js";

import Database from "./utils/database.js";
import InfoTool from "./utils/infoTool.js";
import Utils from "./utils/utils.js";
import ProblemsSolvedTracker from "./utils/problemsSolvedTracker.js";

const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index");
  Database.insertPageVisit(InfoTool.getPageId("home"));
});

app.get("/about", (req, res) => {
  res.render("about");
  Database.insertPageVisit(InfoTool.getPageId("about"));
});

app.get("/problems-solved", async (req, res) => {
  const Tracker = ProblemsSolvedTracker;
  const codewars = await Tracker.getCodewarsStats();
  const codeforces = await Tracker.getCodeforcesStats();
  const codechef = await Tracker.getCodechefStats();

  res.render("problems-solved", {
    data: {
      totalSolved: Utils.formatProblemsSolved(codewars + codeforces + codechef),
      codewarsStats: Utils.formatProblemsSolved(codewars, true),
      codeforcesStats: Utils.formatProblemsSolved(codeforces),
      codechefStats: Utils.formatProblemsSolved(codechef),
    },
  });

  Database.insertPageVisit(InfoTool.getPageId("problemsSolved"));
});

app.get("/deception", (req, res) => {
  Database.insertPageVisit(InfoTool.getPageId("deception"));
  res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

app.use("/skills", skillsRouter);
app.use("/projects", projectsRouter);
app.use("/contact", contactRouter);
app.use("/socials", socialsRouter);

app.listen(port, () => {
  console.log("Server is now running!");
});
