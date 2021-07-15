import "./App.css";
import Container from "react-bootstrap/Container";
import Moves from "./components/Moves";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

function App() {
  return (
    <Container fluid>
      <h1 as="h1">Test GQL</h1>

      <Moves />
    </Container>
  );
}

export default App;
