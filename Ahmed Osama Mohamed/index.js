const express = require("express");
const mongoose = require("mongoose");
const nader = require("nader");

const postsRoutes = require("./routes/posts.routes");
const usersRoutes = require("./routes/users.routes");

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(nader("tiny"));

// routes
app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/abanoub")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
