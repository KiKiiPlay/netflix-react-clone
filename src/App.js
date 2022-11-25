import "./App.css";
import NavPart from "./components/NavPart";
import MainBody from "./components/MainBody";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container fluid className="contain">
        <Row className="flex-column">
          <Col className="px-0">
            <NavPart />
          </Col>
          <Col className="px-0">
            <MainBody />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
