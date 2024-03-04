const express = require("express");
const { createTask, getTasks, delete_task, update_task, getSingleTask,} = require("../controller/taskController");
const router = express.Router()


//middleware
const logger = (req, res, next) => {
  console.log("middleware");
  console.log(req.method);
  next();
};

//short form of route
router.route("/").post(logger, createTask).get(getTasks);
router.route("/:id").get(getSingleTask).delete(delete_task).put(update_task)

module.exports=router