import "dotenv/config";
import express from "express";

import projectsRouter from "./routes/projects.js";
import skillsRouter from "./routes/skills.js";
import contactRouter from "./routes/contact.js";
import socialsRouter from "./routes/socials.js";

import DatabaseTool from "./utils/db-tool.js";
import InfoTool from "./utils/info-tool.js";

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

app.get("/problems-solved", (req, res) => {
  res.render("problems-solved");
  // Unofficial page
});

app.use("/skills", skillsRouter);
app.use("/projects", projectsRouter);
app.use("/contact", contactRouter);
app.use("/socials", socialsRouter);

app.listen(port, () => {
  console.log("Server is now running!");
});
