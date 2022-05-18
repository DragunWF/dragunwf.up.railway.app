import "dotenv/config";
import express from "express";

import projectsRouter from "./routes/projects.js";
import skillsRouter from "./routes/skills.js";
import contactRouter from "./routes/contact.js";
import socialsRouter from "./routes/socials.js";

import DatabaseTool from "./utils/db-tool.js";

const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
  DatabaseTool.insertPageVisit(1);
});

app.get("/about", (req, res) => {
  res.render("about");
  DatabaseTool.insertPageVisit(2);
});

app.use("/skills", skillsRouter);
app.use("/projects", projectsRouter);
app.use("/contact", contactRouter);
app.use("/socials", socialsRouter);

app.listen(port, () => {
  console.log("Server is now running!");
});
