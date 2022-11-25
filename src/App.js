import "./App.css";
import NavPart from "./components/NavPart";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container fluid className="contain">
        <Row>
          <Col className="px-0">
            <NavPart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
