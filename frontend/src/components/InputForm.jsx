import { Button, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
background-color: #dddddd6a;
`
function InputForm() {
  return (
    <FormContainer className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <div className="grid gap-4 shadow border bg-white border-gray-200 rounded-lg p-4 w-100">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold mb-4">Add a Task</h1>
          <CloseIcon/>
        </div>
        <TextField label="Enter Title" />
        <TextField label="Enter Description" multiline rows={4} />
        <Button variant="contained">Add</Button>
      </div>
    </FormContainer>
  );
}

export default InputForm;
