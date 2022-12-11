import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./booking-detail.css";
import Navbar from "../../Component/navbar";
import Footer from "../../Component/footer";
import { getDetailBooking } from "../../redux/action/booking";

const BookingDetail = () => {
  const {id} = useParams();

  const dispatch = useDispatch();

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const handleSuccess = (data) => {
      setDetail(data.data.data);
    }
    dispatch(getDetailBooking(id, handleSuccess));
  }, []);

  return (
    <section>
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}
      <div className="container-fluid container-fluid-booking-detail">
        <div className="container container-booking-detail">
          <div className="ticket-flight">
            <div className="row">
              <div className="col-auto">
                <h4>Booking Pass</h4>
              </div>
              <div className="col-auto titik-tiga">
                <img src={require("../../assets/images/Ellipse 5.png")} />
                <img src={require("../../assets/images/Ellipse 5.png")} />
                <img src={require("../../assets/images/Ellipse 5.png")} />
              </div>
            </div>
            <div className="mt-3 container ticket-flight-main">
              {detail ? 
              detail.map((data, index) => (
                <div key={index} className="row">
                  <div className="col-md-9 ticket-flight-main-left-border">
                    <div className="ticket-flight-main-left">
                      <div className="row">
                        <div className="col-auto">
                          <img
                            src={`${data.logo.split('|&&|')[0]}`}
                            width={100}
                            height={50}
                          />
                        </div>
                        <div className="pt-3 col-auto">
                          <h3>
                            <b>{data.city_departure}, {data.region_departure}</b>
                          </h3>
                        </div>
                        <div className="pt-3 col-auto">
                          <img
                            src={require("../../assets/images/Vector.png")}
                          />
                        </div>
                        <div className="pt-3 col-auto">
                          <h3>
                            <b>{data.city_destination}, {data.region_destination}</b>
                          </h3>
                        </div>
                      </div>
                      <div className="mt-3 row">
                        <div className="col-auto">
                          <span className="text-secondary">Code</span>
                          <h6 className="text-secondary">{data.id_flight}</h6>
                        </div>
                        <div className="col-auto">
                          <span className="text-secondary">Class</span>
                          <h6 className="text-secondary">{data.class}</h6>
                        </div>
                      </div>
                      <div className="mt-3 row">
                        <div className="col-auto">
                          <span className="text-secondary">Terminal</span>
                          <h6 className="text-secondary">{data.terminal}</h6>
                        </div>
                        <div className="col-auto">
                          <span className="text-secondary">Gate</span>
                          <h6 className="text-secondary">{data.gate}</h6>
                        </div>
                      </div>
                      <div className="mt-3 row">
                        <div className="col-auto">
                          <span className="text-secondary">Departure</span>
                          <h6 className="text-secondary">
                            Monday, 20 July '20 -{" "}
                            {String(data.time_departure).slice(0, 5)} (GMT +07:00)
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 ticket-flight-main-right-border">
                    <div className="ticket-flight-main-right text-center">
                      <img src={require("../../assets/images/QR Code 1.png")} />
                    </div>
                  </div>
                </div>
              )) : (
                <div className="row">
                  Data not found!
                </div>
              )
            }
            </div>
          </div>
        </div>
      </div>
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </section>
  );
};

export default BookingDetail;
