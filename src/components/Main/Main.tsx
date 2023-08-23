import { Container } from "react-bootstrap";
import { Hero } from "./Hero";

export function Main() {
  return (
    <Container as="main" className="px-0">
      <Hero />
    </Container>
  );
}
