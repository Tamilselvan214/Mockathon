import { Button } from "@mui/material";

function Navbar(props) {
  const {
    formOpener,
    setFormOpener
  } = props;
  return (
    <nav className="flex justify-between px-4 py-4 border-b border-gray-300 ">
        <h1 className="text-2xl font-bold ">Task Management App</h1>
        <Button
          variant="contained"
          sx={{
            textTransform:"none"
          }}
          onClick={()=>{
            if(formOpener) setFormOpener(false);
            else setFormOpener(true);
          }}
        >
          Add a Task
        </Button>
      </nav>
  )
}

export default Navbar;