import { Button } from "@mui/material";
import styled from "styled-components";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import { useEffect, useRef, useState } from "react";

const AppContainer = styled.section``;

function App() {
  const [formOpener, setFormOpener] = useState(false);

  const formRef = useRef(null);

  const [tasks, setTasks] = useState([
    { id: 1, title: "Design UI", description: "Create board", status: "TODO" },
    {
      id: 2,
      title: "API Integration",
      description: "Connect backend",
      status: "IN_PROGRESS",
    },
    { id: 3, title: "Deploy", description: "Host app", status: "DONE" },
  ]);

  const handleUpdateStatus = (taskId, currentStatus) => {
    let nextStatus = "TODO";
    if (currentStatus === "TODO") nextStatus = "IN_PROGRESS";
    else if (currentStatus === "IN_PROGRESS") nextStatus = "DONE";

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus } : task,
      ),
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    if (formOpener) formRef.current.style.display = "block";
    else formRef.current.style.display = "none";
  }, [formOpener]);

  return (
    <AppContainer className="h-screen w-3/5 m-auto">
      <Navbar formOpener={formOpener} setFormOpener={setFormOpener} />

      <div ref={formRef}>
        <InputForm formOpener={formOpener} setFormOpener={setFormOpener} />
      </div>

      <Board
        tasks={tasks}
        onUpdateStatus={handleUpdateStatus}
        onDelete={handleDelete}
      />
    </AppContainer>
  );
}

export default App;
