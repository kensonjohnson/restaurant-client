import { Button, Container } from "react-bootstrap";
import { Header } from "./components/Header";

function App() {
  return (
    <Container fluid="xl" className="shadow">
      <Header />
      <Button variant="primary" className="rounded-0">
        Button
      </Button>
    </Container>
  );
}

export default App;
