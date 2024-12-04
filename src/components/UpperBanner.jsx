import { Component } from "react";
import { Dropdown } from "react-bootstrap";
class UpperBanner extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-between py-4">
          <div className="d-flex">
            <h2 className="mb-4" style={{ color: "#f5f5f1" }}>
              Home
            </h2>
            <div className="btn-group" role="group">
              <Dropdown className="dropdown ms-4 mt-1">
                <Dropdown.Toggle
                  type="button"
                  className=" rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#221f1f", borderColor: "#838383" }}
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <li>
                    <Dropdown.Item href="#">Comedy</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item href="#">Drama</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item href="#">Thriller</Dropdown.Item>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div style={{ color: "#f5f5f1" }}>
            <i className="bi bi-grid icons mx-2"></i>
            <i className="bi bi-grid-3x3 icons mx-2"></i>
          </div>
        </div>
      </>
    );
  }
}

export default UpperBanner;
