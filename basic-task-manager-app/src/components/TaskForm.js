import { useState } from "react";
import "./Taskform.css"

const Taskform = ({ task, onSave }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [dueDate, setDueDate] = useState(task ? task.dueDate : false);
  const [description, setDescription] = useState(task ? task.description : "");
  const [prioriaty, setPrioriaty] = useState(task ? task.prioriaty : false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...task, title, description, dueDate, prioriaty });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>{task ? "Edit Task" : "Add Task"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
      />
      <input
        type="checkbox"
        checked={prioriaty}
        onChange={(e) => setPrioriaty(e.target.checked)}
        placeholder="High Priority"
        value={prioriaty}
        style={{ color: prioriaty ? "red" : "black" }}
      />
      <label style={{ color: prioriaty ? "red" : "black" }}>High Priority</label>
      <input
       type="checkbox"
       checked={!prioriaty}
       onChange={(e) => setPrioriaty(!prioriaty)}
       placeholder="Low Priority"
       value={!prioriaty}
       />
       <label>Low Priority</label>


      <button onSave={handleSubmit}>{task ? "Save Changes" : "Add"}</button>
    </form>
  );
};

export default Taskform;
