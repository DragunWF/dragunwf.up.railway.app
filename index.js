import express from "express";
import projectsRouter from "./routes/projects.js";
import skillsRouter from "./routes/skills.js";
import contactRouter from "./routes/contact.js";

const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use("/skills", skillsRouter);
app.use("/projects", projectsRouter);
app.use("/contact", contactRouter);

app.listen(8000, () => {
  console.log("Server is now running!");
});
