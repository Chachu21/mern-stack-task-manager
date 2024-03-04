import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import TaskForm from "./TaskForm";
import Task from "./Task";

const TaskList = () => {
  const [formData, setformData] = useState({
    name: "",
    completed: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const { name } = formData;

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("input field cannot be empty");
    }

    try {
      await axios.post("http://127.0.0.1:5000/api/v1/tasks", formData);

      toast.success("task is added successfully");
      setformData({ ...formData, name: "" }); // Update the name property to an empty string
    } catch (error) {
      return toast.error(error.message);
    }
  };
  const getTasks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/v1/tasks");
      setTasks(response.data); // set tasks as response.data
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="task_list">
      <h2>Task Manager</h2>
      <TaskForm onchange={changeHandle} name={name} onSubmite={createTask} />
      <div className="list_of">
        <p>
          <b>Total Task</b> 0
        </p>
        <p>
          <b>Completed Task</b> 0
        </p>
      </div>
      <hr />
      {isLoading && <img src="../logo.png" alt="loading" />}
      {!isLoading &&
        Array.isArray(tasks) &&
        tasks.map((task, index) => {
          return <Task key={index} task={task} index={index} />;
        })}
    </div>
  );
};
export default TaskList;
