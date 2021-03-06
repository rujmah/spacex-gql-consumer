import "./App.css";
import Container from "react-bootstrap/Container";
import Launches from "./components/Launches";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

function App() {
  return (
    <Container fluid>
      <h1 as="h1">Test GQL</h1>

      <Launches />
    </Container>
  );
}

export default App;
