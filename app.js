import "dotenv/config";
import express from "express";

import projectsRouter from "./routes/projects.js";
import skillsRouter from "./routes/skills.js";
import contactRouter from "./routes/contact.js";
import socialsRouter from "./routes/socials.js";

import DatabaseTool from "./utils/db-tool.js";
import InfoTool from "./utils/info-tool.js";
import GeneralTool from "./utils/general-tool.js";
import ProblemsSolvedTracker from "./utils/problems-solved-tracker.js";

const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index");
  DatabaseTool.insertPageVisit(InfoTool.getPageId("home"));
});

app.get("/about", (req, res) => {
  res.render("about");
  DatabaseTool.insertPageVisit(InfoTool.getPageId("about"));
});

app.get("/problems-solved", async (req, res) => {
  const Tracker = ProblemsSolvedTracker;
  const codewars = await Tracker.getCodewarsStats();
  const codeforces = await Tracker.getCodeforcesStats();
  const codechef = await Tracker.getCodechefStats();

  res.render("problems-solved", {
    data: {
      totalSolved: GeneralTool.formatProblemsSolved(
        codewars + codeforces + codechef
      ),
      codewarsStats: GeneralTool.formatProblemsSolved(codewars, true),
      codeforcesStats: GeneralTool.formatProblemsSolved(codeforces),
      codechefStats: GeneralTool.formatProblemsSolved(codechef),
    },
  });

  DatabaseTool.insertPageVisit(InfoTool.getPageId("problemsSolved"));
});

app.use("/skills", skillsRouter);
app.use("/projects", projectsRouter);
app.use("/contact", contactRouter);
app.use("/socials", socialsRouter);

app.listen(port, () => {
  console.log("Server is now running!");
});
