import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TvShows = () => {
  const [listaShows, setListaShows] = useState([]);
  const fetchMovies = async (t) => {
    const url = `http://www.omdbapi.com/?apikey=b48d62&s="${t}"`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const responseObj = await response.json();
        setListaShows(responseObj.Search);
        console.log(responseObj);
      } else {
        throw new Error(`errore nella richiesta API: ${response.statusText}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const handlePageChange = (id) => {
    console.log(id);
    navigate(`/MovieDetails/${id}`);
  };
  useEffect(() => {
    fetchMovies("harry");
  }, []);
  return (
    <>
      <Container>
        <Row>
          {listaShows.length > 0 &&
            listaShows.map((show) => {
              return (
                <Col key={show.imdbID} lg={3} className={`mb-5 hover`}>
                  <Card
                    className="bg-dark "
                    style={{ height: "auto", width: "auto" }}
                    onClick={() => {
                      handlePageChange(show.imdbID);
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={show.Poster}
                      style={{ height: "400px" }}
                    />
                    <Card.Body style={{ height: "200px" }}>
                      <Card.Title className="text-light">
                        {show.Title}
                      </Card.Title>
                      <Card.Text className="text-light-emphasis">
                        {show.Year}
                      </Card.Text>
                      <Button variant="primary">{show.imdbID}</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};
export default TvShows;
