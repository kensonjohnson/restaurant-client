import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <Container fluid="xl" className="shadow">
      <Header />
      <Main />
    </Container>
  );
}

export default App;
