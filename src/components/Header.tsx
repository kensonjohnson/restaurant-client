import { Container, Nav, Navbar } from "react-bootstrap";

export function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="sm" sticky="top">
        <Container className="w-100">
          <Navbar.Brand href="#home" className="">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="flex-row justify-content-around link-underline-primary text-decoration-underline fs-3 pe-5 me-5">
              <Nav.Link href="#menu" className="link-primary">
                Menu
              </Nav.Link>
              <Nav.Link href="#specials" className="link-primary">
                Specials
              </Nav.Link>
              <Nav.Link href="#about" className="link-primary">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
