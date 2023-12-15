import React from "react";
import "./TaskList.css";

const TaskList = ({
  tasks,
  onDelete,
  onEdit,
  onComplete,
  dueDate,
  prioriatyList,
}) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-item" key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.completed}</p>
          <p>{task.dueDate}</p>
          <label style={{ color: task.prioriaty ? "red" : "black" }}>
            High Priority
          </label>
          <input type="checkbox" checked={task.prioriaty} onChange={() => prioriatyList(task.id)} />
          <label >Low Priority</label>
          <input type="checkbox" checked={!task.prioriaty} onChange={() => prioriatyList(task.id)} />
          <label>Due Date</label>
          <input type="date" onChange={() => dueDate(task.id)} min={new Date().toISOString().split("T")[0]} />
          <button className={task.completed ? "incomplete-button" : "completed-button"}onClick={() => onComplete(task.id)}>{ task.completed ? "Incomplete" : "Complete"}</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onEdit(task.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
