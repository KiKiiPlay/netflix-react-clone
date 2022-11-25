import Card from "react-bootstrap/Card";
import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";

class MoviesCard extends Component {
  state = {
    movieArr: [],
    isLoading: true,
    ifError: false,
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=34d3d0dc&s=harry%20potter"
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movieArr: data.Search,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          ifError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        ifError: true,
      });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const secondFilm = this.state.movieArr.slice(1, 2);
    return (
      <>
        {this.state.isLoading && (
          <Spinner
            animation="border"
            role="status"
            className="custom-spinner-color"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {secondFilm.map((element) => (
          <Card style={{ width: "200px", height: "290px" }} className="mx-auto">
            <Card.Img variant="top" src={element.Poster} />
          </Card>
        ))}
        {this.state.ifError && <Alert variant="danger">ERROR</Alert>}
      </>
    );
  }
}

export default MoviesCard;
