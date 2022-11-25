import Card from "react-bootstrap/Card";
import { Component } from "react";

class MoviesCard extends Component {
  state = {
    movieArr: {},
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=34d3d0dc&s=harry%20potter"
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movieArr: data,
        });
        console.log(this.state.movieArr);
      } else {
        console.log("error fetching Movies");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    console.log("COMPONENTDIDMOUNT FIRED!");
    this.fetchMovies();
  }

  render() {
    return (
      <>
        {/* {this.state.movieArr.Search.map((element) => (
          <Card style={{ width: "200px", height: "100px" }} className="mx-auto">
            <Card.Img variant="top" src={element.Poster} />
          </Card>
        ))} */}
      </>
    );
  }
}

export default MoviesCard;
