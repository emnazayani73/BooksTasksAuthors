const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bookRoutes = require("./Routes/book");
const taskRoutes = require("./Routes/task");
const userRoutes = require("./Routes/user");
const authorRoutes = require("./Routes/author");
const categoryRoutes = require("./Routes/category");
mongoose
  .connect("mongodb://localhost:27017/MyDataBase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à mongoDB... reussite"))
  .catch((e) => console.log("connexion à mongodb échouée", e));

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader(
    "Acces-Control-Allow-Header",
    "Origin, X-Requested-With, Content, Accept, Content-Type ,Authorization"
  );
  res.setHeader(
    "Acces-Control-Allow-Methods",
    "GET, POST, PUT , DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/books", bookRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/categories", categoryRoutes);

module.exports = app;
