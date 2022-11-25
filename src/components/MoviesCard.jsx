import Card from "react-bootstrap/Card";
import { Component } from "react";
import Spinner from "react-bootstrap/Spinner";

class MoviesCard extends Component {
  state = {
    movieArr: [],
    isLoading: true,
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
        console.log(this.state.movieArr);
      } else {
        console.log("error fetching Movies");
        this.setState({
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    console.log("COMPONENTDIDMOUNT FIRED!");
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
      </>
    );
  }
}

export default MoviesCard;
