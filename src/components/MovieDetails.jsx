import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";

const MovieDetails = () => {
  const id = useParams();
  console.log(id.id);
  const [currentElement, settCurrentElement] = useState({});
  const [listaCommenti, setListaCommenti] = useState([]);
  const [obj, setObj] = useState({
    comment: "",
    rate: "",
    elementId: id.id
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
    console.log("url POST= ", url);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTY2NzhhZDEyOTAwMTU4NzZiZTEiLCJpYXQiOjE3MzMzMjIyODQsImV4cCI6MTczNDUzMTg4NH0.58kV_f_C_TfVnIHqQDEkrtb4W2feixjwxLRnUULRkSI"
        },
        body: JSON.stringify(obj)
      });

      if (response.ok) {
        alert("Commento aggiunto con successo!");

        setObj({ elementId: id.id, comment: "", rate: "" });
      } else {
        console.log(response);
        console.log(obj);
        alert("Errore nell'invio del commento." + response.statusText);
      }
    } catch (error) {
      console.log("Errore nella richiesta POST:", error);
    }
  };
  const fetchElement = async () => {
    const url = `http://www.omdbapi.com/?apikey=b48d62&i=${id.id}`;
    console.log(url);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const responseObj = await response.json();
        settCurrentElement(responseObj);
        console.log(responseObj);
      } else {
        throw new Error(`errore nella richiesta API: ${response.statusText}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCommenti = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/" + id.id;
    console.log(url);
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTY2NzhhZDEyOTAwMTU4NzZiZTEiLCJpYXQiOjE3MzMzMjIyODQsImV4cCI6MTczNDUzMTg4NH0.58kV_f_C_TfVnIHqQDEkrtb4W2feixjwxLRnUULRkSI"
        }
      });
      if (response.ok) {
        const responseObj = await response.json();

        setListaCommenti(responseObj);
        console.log(listaCommenti);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (name, value) => {
    setObj({ ...obj, [name]: value });
  };
  useEffect(() => {
    fetchCommenti();
    fetchElement();
  }, []);
  useEffect(() => {
    setObj((prevObj) => ({ ...prevObj, elementId: id.id }));
  }, [id]);
  return (
    <>
      <div className="ms-5 mb-2">
        <Card className="bg-dark " style={{ height: "auto", width: "18rem" }}>
          <Card.Img
            variant="top"
            src={currentElement.Poster}
            style={{ height: "400px" }}
          />
          <Card.Body style={{ height: "200px" }}>
            <Card.Title className="text-light">
              {currentElement.Title}
            </Card.Title>
            <Card.Text className="text-light-emphasis">
              {currentElement.Year}
            </Card.Text>
            <Badge variant="primary">{currentElement.imdbID}</Badge>
          </Card.Body>
        </Card>
      </div>
      <div style={{ minHeight: "60vh" }} className="d-flex gap-5">
        <div style={{ width: "50" }} className="ms-5 mb-5">
          <h2 className="text-light">Lista Commenti</h2>
          <ul>
            {listaCommenti.length > 0 &&
              listaCommenti.map((comment, index) => {
                return (
                  <li key={index} className="mb-2 text-light">
                    {comment.comment} <br />
                    rate:{comment.rate}/5
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="ms-5">
          <h2
            className="text-light mb-3
            "
          >
            Aggiungi un commento
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="text-light mb-2">
              <label>Commento:</label>
              <textarea
                name="comment"
                value={obj.comment}
                onChange={(e) => handleChange("comment", e.target.value)}
                rows="1"
                required
              />
            </div>
            <div className="text-light mb-2">
              <label>Voto (1-5):</label>
              <input
                type="number"
                name="rate"
                value={obj.rate}
                onChange={(e) => handleChange("rate", e.target.value)}
                min="1"
                max="5"
                required
              />
            </div>

            <button type="submit">Invia Commento</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
