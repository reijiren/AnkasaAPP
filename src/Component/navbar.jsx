import React from "react";
import "../assets/style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);

  const replaceImage = (img) => {
    img.target.src = `https://res.cloudinary.com/dmkviiqax/image/upload/v1670752651/default_qxzbhn.png`;
  }

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <Link className="navbar-brand ms-10" to="/">
            <img
              src={require("../assets/images/vector 02.png")}
              width="30"
              alt="logo"
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
                to="/search-result"
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
              <div className="dropdown">
                <a
                  className="nav-link active mx-5"
                  aria-current="page"
                  href="#"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={require("../assets/images/Group 797.png")}
                    width="20"
                    alt=""
                    className="mx-4"
                  />
                  <img
                    src={require("../assets/images/btnNotifications.png")}
                    width="20"
                    alt=""
                    className="mx-2"
                  />
                </a>
              </div>
              <Link to="/profile">
                <img
                  src={`${user.photo?.split('|&&|')[0]}`}
                  onError={replaceImage}
                  width="40"
                  className="mobileProfileNavbar rounded-circle customBorder"
                  alt="profile image"
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
