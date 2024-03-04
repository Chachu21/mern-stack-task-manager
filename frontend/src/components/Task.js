import React from 'react'
import { FaEdit, FaTrashAlt, FaCheckDouble } from "react-icons/fa";
const Task = ({index, task, }) => {
  return (
    <div className="task">
      <p>
        <b>{index +1}</b> {task.name}
      </p>
      <div className="icons">
        <FaCheckDouble color='green' />
        <FaEdit color="purple" />
        <FaTrashAlt color='red' />
      </div>
    </div>
  );
}

export default Task