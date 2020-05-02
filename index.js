const path = require("path");

const expressEdge = require("express-edge");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/NodeBlog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public"));
app.use(expressEdge);

app.set("views", `${__dirname}/views`);

//Home page

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "pages/index.html"));
// });

//template engine home page
app.get("/", (req, res) => {
  res.render("index");
});

//About page

// app.get("/about", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "pages/about.html"));
// });

app.get("/about", (req, res) => {
  res.render("about");
});

//Post page

// app.get("/post", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "pages/post.html"));
// });

app.get("/post", (req, res) => {
  res.render("post");
});

//Contact page
// app.get("/contact", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "pages/contact.html"));
// });

app.get("/contact", (req, res) => {
  res.render("contact");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
