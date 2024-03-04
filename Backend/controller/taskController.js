const Task = require("../models/tasksModel");

//to create task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(200).json({ msg: error.message });
  }
};
//get all tasks
const getTasks = async (req, res) => {
  try {
    const all_task = await Task.find();
    res.status(200).json(all_task);
  } catch (error) {
    res.status(200).json({ msg: error.message });
  }
};

//get a single task
const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const singleTask = await Task.findById(id);
    if (!singleTask) {
      res.status(404).json(`task is not found by this id : ${id}`);
    }
    res.status(200).json(singleTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//delete task
const delete_task = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTask = await Task.findByIdAndDelete(id);

    if (!deleteTask) {
      res.status(404).json(`task is not found by this id : ${id}`);
    }

    res.status(200).json(deleteTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//update task
const update_task = async (req, res) => {
  try {
    const { id } = req.params;
    const updateTask = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(id);
    res.status(200).json(updateTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getSingleTask,
  getTasks,
  delete_task,
  update_task,
};
