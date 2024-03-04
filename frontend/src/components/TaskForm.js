import React from 'react'

const TaskForm = ({ onSubmite, onchange, name}) => {
  return (
    <div>
      <form action="" className='task-form'>
        <input type="text" placeholder="Add task" name='name' value={name} onChange={onchange} />
        <button onClick={onSubmite}>Add</button>
      </form>
    </div>
  );
}

export default TaskForm