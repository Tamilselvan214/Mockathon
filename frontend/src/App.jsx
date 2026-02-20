import { Button } from "@mui/material";
import styled from "styled-components";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navbar";
import { useEffect, useRef, useState } from "react";

const AppContainer = styled.section``;

function App() {
  const [formOpener, setFormOpener] = useState(false);

  const formRef = useRef(null);

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
    </AppContainer>
  );
}

export default App;
