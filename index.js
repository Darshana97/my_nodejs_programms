const path = require("path");

const expressEdge = require("express-edge");

const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
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


//

app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
