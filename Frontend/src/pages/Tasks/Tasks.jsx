import React, { useState } from "react";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design UI",
      assignee: "John Doe",
      priority: "High",
      deadline: "2024-10-15",
      status: "Completed",
    },
    {
      id: 2,
      title: "Develop API",
      assignee: "Jane Smith",
      priority: "Medium",
      deadline: "2024-10-20",
      status: "Pending",
    },
    {
      id: 3,
      title: "Write Documentation",
      assignee: "Alice Brown",
      priority: "Low",
      deadline: "2024-10-25",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Test Application",
      assignee: "Mark Johnson",
      priority: "High",
      deadline: "2024-10-18",
      status: "Pending",
    },
    {
      id: 5,
      title: "Fix Bugs",
      assignee: "Sarah Lee",
      priority: "Medium",
      deadline: "2024-10-22",
      status: "In Progress",
    },
    {
      id: 6,
      title: "Deploy to Production",
      assignee: "Chris Evans",
      priority: "High",
      deadline: "2024-10-30",
      status: "Pending",
    },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    assignee: "",
    priority: "Low",
    deadline: "",
    status: "Pending",
  });

  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (
      newTask.title.trim() &&
      newTask.assignee.trim() &&
      newTask.deadline.trim()
    ) {
      const newTaskEntry = { id: tasks.length + 1, ...newTask };
      setTasks([...tasks, newTaskEntry]);
      resetNewTask();
    }
  };

  const resetNewTask = () => {
    setNewTask({
      title: "",
      assignee: "",
      priority: "Low",
      deadline: "",
      status: "Pending",
    });
  };

  const changeStatus = (id, status) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "All" ? true : task.status === filter
  );

  return (
    <div className="tasks-container">
      <header className="tasks-header">
        <h2>Tasks Management</h2>
        <div className="filter-buttons">
          {["All", "Pending", "In Progress", "Completed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={filter === status ? "active" : ""}
            >
              {status}
            </button>
          ))}
        </div>
      </header>

      <section className="task-input-container">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          placeholder="Task Title"
        />
        <input
          type="text"
          value={newTask.assignee}
          onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
          placeholder="Assignee"
        />
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <input
          type="date"
          value={newTask.deadline}
          onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
        />
        <button onClick={addTask}>Add Task</button>
      </section>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.status
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            <div className="task-content">
              <div className="task-header">
                <span className="task-title">{task.title}</span>
                <span className={`priority ${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
              </div>
              <div className="task-meta">
                <span className="assignee">Assigned to: {task.assignee}</span>
                <span className="deadline">Deadline: {task.deadline}</span>
              </div>
            </div>
            <div className="task-status">
              <select
                value={task.status}
                onChange={(e) => changeStatus(task.id, e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
