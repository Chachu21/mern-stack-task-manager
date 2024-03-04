require("dotenv").config();
const express = require("express");
const Task = require("./models/tasksModel");
const router = require("./routes/task_route");
const cors = require("cors");
const connectDb = require("./config/connectDb");
//create instance of express server for access feature of express provide
const app = express();
//port
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1/tasks", router);

//routes
app.get("/", (req, res) => {
  res.send("hello word");
});

//dataBase connection
connectDb();
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
