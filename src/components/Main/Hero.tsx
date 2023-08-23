import { Col, Container, Row } from "react-bootstrap";

export function Hero() {
  return (
    <Container as="section">
      <Row>
        <Col>Image 1</Col>
        <Col>Image 2</Col>
        <Col>Image 3</Col>
        <Col>Image 4</Col>
      </Row>
    </Container>
  );
}
