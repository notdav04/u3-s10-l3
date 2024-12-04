import { Component } from "react";
import Slider from "react-slick";
import Spinner from "react-bootstrap/Spinner";
import { Alert, Col } from "react-bootstrap";

class SliderGallery extends Component {
  state = {
    error: null,
    responseList: [],
    controlLoading: false,
    settings: {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  };
  fetchSeries = async () => {
    console.log("responselist:", this.state.responseList);
    const url = "http://www.omdbapi.com/?apikey=b48d62&s=";
    const newUrl = url + this.props.search;
    try {
      const response = await fetch(newUrl);
      if (response.ok) {
        const responseObj = await response.json();
        this.setState({ responseList: responseObj.Search }, () => {});
        this.setState({ controlLoading: true }, () => {});
        console.log(responseObj);
      } else {
        this.setState({
          error: `errore nella richiesta API: ${response.statusText}`
        });
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
      <div>
        <h4 style={{ color: "#f5f5f1" }}>{this.props.titoloSezione}</h4>
        <div
          className="slider-container"
          style={{ maxWidth: "95%", marginInline: "auto" }}
        >
          {this.state.error != null && <Alert>{this.state.error}</Alert>}
          {!this.state.controlLoading && (
            <Spinner
              animation="border"
              role="status"
              style={{ color: "#f5f5f1", width: "100px", height: "100px" }}
            >
              <span className="visually-hidden ">Loading...</span>
            </Spinner>
          )}
          {this.state.responseList.length > 0 && (
            <Slider {...this.state.settings}>
              {this.state.responseList.map((element) => {
                return (
                  <Col
                    lg={2}
                    md={4}
                    sm={6}
                    key={element.imdbID}
                    className=" mb-2 text-center px-1 d-flex align-items-center"
                  >
                    <img
                      className="img-fluid hover "
                      src={element.Poster}
                      alt="movie picture"
                      style={{
                        height: "180px",
                        width: "100%",

                        objectFit: "cover"
                      }}
                    />
                  </Col>
                );
              })}
            </Slider>
          )}
        </div>
      </div>
    );
  }
}
export default SliderGallery;
