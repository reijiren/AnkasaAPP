import React from "react";
import "../mybooking/mybooking.css";
import Footer from "../../Component/footer";
import Navbar from "../../Component/navbar";
import Profiles from "../../Component/profile";

const Mybook = () => {
  return (
    <>
      <Navbar />
      <main className="bg-light">
        <section className="container-fluid p-5 customMainBooking">
          <div className="row">
            <Profiles />
            <div className="col-lg-8 p-0">
              <div className="col-md-12 p-5 pt-4 pe-5 bg-white mt-3 ms-2 customBorderBooking">
                <h5 className="blue my-booking">MY BOOKING</h5>
                <h3 className="mb-1 my-booking2">My Booking</h3>
                <h6 className="order-history">Order History</h6>
              </div>
              <div className="col-md-12 p-5 bg-white mt-4 ms-2 customBorderBooking2">
                <h5 className="date">Monday, 20 July ‘20 - 12:33</h5>
                <div className="d-flex align-items-start mt-2">
                  <h3 className="pe-4">IDN</h3>
                  <img
                    className="pe-4 mt-2"
                    src={require("../../assets/images/Vector.png")}
                    alt=""
                  />
                  <h3 className="pe-4">JPN</h3>
                </div>
                <p>Garuda Indonesia, AB-221</p>
                <hr className="w-100" />
                <div className="d-flex align-items-end mt-2">
                  <p className="pe-4 mt-2 status">Status</p>
                  <button className="btn-custom">Waiting for payment</button>
                </div>
                <p className="details">View Details</p>
              </div>
              <div className="col-md-12 bg-warning p-5 bg-white mt-4 ms-2 customBorderBooking2">
                <h5 className="date">Monday, 20 July ‘20 - 12:33</h5>
                <div className="d-flex align-items-start mt-2">
                  <h3 className="pe-4">IDN</h3>
                  <img
                    className="pe-4 mt-2"
                    src={require("../../assets/images/Vector.png")}
                    alt=""
                  />
                  <h3 className="pe-4">JPN</h3>
                </div>
                <p>Garuda Indonesia, AB-221</p>
                <hr className="w-100" />
                <div className="d-flex align-items-end mt-2">
                  <p className="pe-4 mt-2 status">Status</p>
                  <button className="btn-custom">Waiting for payment</button>
                </div>
                <p className="details">View Details</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Mybook;
