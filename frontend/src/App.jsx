import { Button } from "@mui/material";
import styled from "styled-components";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navbar";

const AppContainer = styled.section``;
function App() {
  return (
    <AppContainer className="h-screen w-3/5 m-auto">
      <Navbar/>
      <InputForm/>
    </AppContainer>
  );
}

export default App;
