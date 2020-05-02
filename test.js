const mongoose = require("mongoose");

const Post = require("./databse/models/post");

mongoose.connect("mongodb://localhost:27017/NodeBlog_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Post.save(
  {
    title: "My first blog post.",
    description: "Blog post description",
    content: "Lorem ipsum content",
  },
  (error, post) => {
    console.log(error, post);
  }
);
