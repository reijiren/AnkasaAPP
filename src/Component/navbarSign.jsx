import React from "react";
import "../assets/style.css";
import { Link } from "react-router-dom";

const NavbarSign = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <Link className="navbar-brand ms-10" to="/">
            <img
              src={require("../assets/images/vector 02.png")}
              width="30"
              alt=""
            />
            Ankasa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <form className="d-flex mx-5" role="search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="where do you go?"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </form>
            <div className="navbar-nav me-5 mx-5">
              <Link
                className="nav-link active mx-5"
                aria-current="page"
                to="search-result"
              >
                Find Ticket
              </Link>
              <Link
                className="nav-link active mx-5"
                aria-current="page"
                to="/mybook"
              >
                My Booking
              </Link>
              <Link to="/login">
                <button
                  type="button"
                  className="btn btn-primary shadow-lg bgBlue rounded mx-5"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default NavbarSign;
