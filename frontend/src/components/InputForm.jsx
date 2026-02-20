import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  background-color: #3b3b3b6a;
`;

function InputForm(props) {
  const { formOpener, setFormOpener } = props;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  async function handleFormSubmit() {
    try{
      const response = await axios.post("http://localhost:8080/")
    }catch(err){
      throw new Error(err.message);
    }
  }

  return (
    <FormContainer className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <div className="grid gap-4 shadow border bg-white border-gray-200 rounded-lg p-4 w-100">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold mb-4">Add a Task</h1>
          <CloseIcon
            className="cursor-pointer"
            onClick={() => {
              if (formOpener) setFormOpener(false);
              else setFormOpener(true);
            }}
          />
        </div>
        <TextField
          label="Enter Title"
          value={formData.title}
          onChange={(e) => {
            setFormData({
              ...formData,
              title: e.target.value,
            });
          }}
        />
        <TextField
          label="Enter Description"
          multiline
          rows={4}
          value={formData.description}
          onChange={(e) => {
            setFormData({
              ...formData,
              description: e.target.value,
            });
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            console.log(formData);
            setFormData({
              title: "",
              description: "",
            });
          }}
        >
          Add
        </Button>
      </div>
    </FormContainer>
  );
}

export default InputForm;
