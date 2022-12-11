import React from "react";
import "../assets/style.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="container-fluid bg-white p-4 mobileOuterFooter">
          <div className="row p-5 mobileInnerFooter">
            <div className="col-md-3">
              <h4 className="">
                <img
                  src={require("../assets/images/vector 02.png")}
                  width="30"
                  alt=""
                />
                Ankasa
              </h4>
              <p className="mt-3 ms-3 text-muted">
                Find your Flight and explore the world with us. We will take
                care of the rest
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="ms-4">Features</h5>
              <ul className="listStyle">
                <li className="py-1">
                  <a href="#">Find Ticket</a>
                </li>
                <li className="py-1">
                  <a href="#">My Booking</a>
                </li>
                <li className="py-1">
                  <a href="#">Chat</a>
                </li>
                <li className="py-1">
                  <a href="#">Notification</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="ms-2">Download Angkasa App</h5>
              <ul className="listStyle">
                <a href="#" className="imgFooter">
                  <img
                    src={require("../assets/images/apple-app-store-travel-awards-globestamp-7 2.png")}
                    alt=""
                    className="mb-3"
                  />
                </a>
                <a href="#" className="imgFooter">
                  <img
                    src={require("../assets/images/apple-app-store-travel-awards-globestamp-7 3.png")}
                    alt=""
                  />
                </a>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="ms-4">Follow Us</h5>
              <ul className="listStyle d-flex flex-row">
                <li className="pe-2">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-down px-5">
            <div className="container">
              <div className="row text-muted">
                <div className="col-12 col-md-6">
                  <p>© 2022 Company, Inc. All rights reserved.</p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="text-end mx-5">
                    <i className="fa fa-map-marker"></i>
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
