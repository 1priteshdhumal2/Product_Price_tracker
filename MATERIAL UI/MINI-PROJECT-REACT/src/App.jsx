import "./App.css";
import Button from "@mui/material/Button";

function App() {
  let handle = () => {
    console.log("Button was clicked");
  };
  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handle}>
        Submit
      </Button>
    </>
  );
}

export default App;
