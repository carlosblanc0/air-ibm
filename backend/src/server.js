const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const port = process.env.SERVER_PORT || 8080;
const app = express();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);
app.listen(port, () =>
  console.log(`Express server currently running on port ${port}`)
);
