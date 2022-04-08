import express from "express";
import serverless from "serverless-http";

import projectsRouter from "./routes/projects.js";
import skillsRouter from "./routes/skills.js";
import contactRouter from "./routes/contact.js";
import socialsRouter from "./routes/socials.js";

import DatabaseTool from "./utils/db-tool.js";

const app = express();
const router = express.Router();

router.set("view engine", "ejs");
router.use("/public", express.static("public"));

router.get("/", (req, res) => {
  res.render("index");
  DatabaseTool.insertPageVisit(1);
});

router.get("/about", (req, res) => {
  res.render("about");
  DatabaseTool.insertPageVisit(2);
});

router.use("/skills", skillsRouter);
router.use("/projects", projectsRouter);
router.use("/contact", contactRouter);
router.use("/socials", socialsRouter);

app.use(".netlify/functions/api", router);

export const handler = serverless(app);
