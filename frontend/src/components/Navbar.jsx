import { Button } from "@mui/material";

function Navbar() {
  return (
    <nav className="flex justify-between px-4 py-4">
        <h1 className="text-2xl font-bold ">Task Management Application</h1>
        <Button
          variant="contained"
        >
          Add
        </Button>
      </nav>
  )
}

export default Navbar;