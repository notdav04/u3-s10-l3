import { Component } from "react";
import { Col, Row } from "react-bootstrap";
class Grid extends Component {
  state = {
    responseList: []
  };
  fetchSeries = async () => {
    const url = "http://www.omdbapi.com/?apikey=b48d62&s=";
    const newUrl = url + this.props.search;
    try {
      const response = await fetch(newUrl);
      if (response.ok) {
        const responseObj = await response.json();
        this.setState({ responseList: responseObj.Search }, () => {});
        console.log(responseObj);
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.fetchSeries();
  }
  render() {
    return (
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {this.state.responseList.length > 0 &&
          this.state.responseList.map((film, index) => {
            if (index < 6) {
              return (
                <Col
                  lg={2}
                  md={4}
                  sm={12}
                  key={film.imdbID}
                  className=" mb-2 text-center px-1"
                >
                  <img
                    className="img-fluid"
                    src={film.Poster}
                    alt="movie picture"
                    style={{ height: "400px" }}
                  />
                </Col>
              );
            }
          })}
      </Row>
    );
  }
}

export default Grid;
