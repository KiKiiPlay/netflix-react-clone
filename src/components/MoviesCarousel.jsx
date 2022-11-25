import { Component } from "react";
import MoviesCard from "./MoviesCard";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";

class MoviesCarousel extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <MoviesCard />
                </Col>
                <Col>
                  <MoviesCard />
                </Col>
                <Col>
                  <MoviesCard />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <MoviesCard />
                </Col>
                <Col>
                  <MoviesCard />
                </Col>
                <Col>
                  <MoviesCard />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default MoviesCarousel;
