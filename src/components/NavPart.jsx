import "./components_css/NavPart.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavPart() {
  return (
    <Navbar bg="black" expand="lg">
      <Container className="mx-0 px-0">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white" }}>
              TV Shows
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white" }}>
              Movies
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white" }}>
              Recently Added
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "white" }}>
              My List
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavPart;
