import { useState } from "react";
import Board from "./components/Board";
import "./index.css";

export default function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Design UI", description: "Create board", status: "TODO" },
    { id: 2, title: "API Integration", description: "Connect backend", status: "IN_PROGRESS" },
    { id: 3, title: "Deploy", description: "Host app", status: "DONE" }
  ]);

  const handleUpdateStatus = (taskId, currentStatus) => {
    let nextStatus = "TODO";
    if (currentStatus === "TODO") nextStatus = "IN_PROGRESS";
    else if (currentStatus === "IN_PROGRESS") nextStatus = "DONE";

    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, status: nextStatus } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks(prev =>
      prev.filter(task => task.id !== taskId)
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        Task Board
      </h1>

      <Board
        tasks={tasks}
        onUpdateStatus={handleUpdateStatus}
        onDelete={handleDelete}
      />
    </div>
  );
}
