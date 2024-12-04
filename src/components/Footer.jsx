import { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <Row
          className=" justify-content-center pt-5 "
          style={{ color: "#f5f5f1f" }}
        >
          <Col className=" col-6">
            <Row>
              <Col className=" mb-2">
                <i
                  className="bi bi-facebook footer-icon me-2"
                  style={{ color: "#838383" }}
                ></i>
                <i
                  className="bi bi-instagram footer-icon me-2"
                  style={{ color: "#838383" }}
                ></i>
                <i
                  className="bi bi-twitter-x footer-icon me-2"
                  style={{ color: "#838383" }}
                ></i>
                <i
                  className="bi bi-youtube footer-icon"
                  style={{ color: "#838383" }}
                ></i>
              </Col>
            </Row>
            <Row className=" row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
              <Col>
                <Row>
                  <Col className=" footer-links ">
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className=" footer-links">
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className=" footer-links">
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className=" footer-links">
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        alt="footer link"
                        className="text-decoration-none"
                        style={{ color: "#838383" }}
                      >
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className=" mb-2">
                <Button
                  type="button"
                  className="btn btn-sm footer-button rounded-0 mt-3"
                  style={{
                    color: "#838383",
                    borderColor: "#838383",
                    backgroundColor: "#221f1f"
                  }}
                >
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col
                className=" mb-2 mt-2 copyright"
                style={{ color: "#838383" }}
              >
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
