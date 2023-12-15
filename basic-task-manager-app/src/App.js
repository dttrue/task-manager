import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { task as initialTask } from "./TaskData";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(initialTask);
  const [editingTask, setEditingTask] = useState();
  

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (taskId) => {
    const findTask = tasks.find((task) => task.id === taskId);
    setEditingTask(findTask);
  };

  const saveTask = (updateTask) => {
    setTasks(tasks.map((task) => (task.id === updateTask.id ? updateTask : task)));
    setEditingTask(null);
  }

  const onComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
}

const dueDate = (id) => {
  setTasks(tasks.map((task) => (task.id === id ? { ...task, dueDate: !task.dueDate } : task)));
  
}

const prioriatyList = (id) => {
setTasks(tasks.map((task) => (task.id === id ? { ...task, prioriaty: !task.prioriaty } : task)));
}



  return (
    <div className="App">
      < Header />
      <TaskForm   onSave={editingTask ? saveTask : addTask}  task={editingTask}   onAdd={addTask} />
      <TaskList prioriatyList={prioriatyList} dueDate={dueDate} onComplete={onComplete} tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );


}

export default App;
