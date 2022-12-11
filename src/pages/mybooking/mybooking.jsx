import React, { useEffect } from "react";
import "../mybooking/mybooking.css";
import Footer from "../../Component/footer";
import Navbar from "../../Component/navbar";
import Profiles from "../../Component/profile";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { myBooking } from "../../redux/action/booking";
import { Link } from "react-router-dom";

const Mybook = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);

  const user = useSelector((state) => state.user);
  const thisUser = user.user;

  useEffect(() => {
    const handleSuccess = (data) => {console.log(data)};
    dispatch(myBooking(thisUser.id_user, handleSuccess));
  }, []);

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
              {booking.isLoading ? (
                <h1>Loading</h1>
              ) : booking.booking == "" ? (
                <h1>Data is not found</h1>
              ) : (
                booking.booking?.map((data, index) => (
                  <div
                    key={index}
                    className="col-md-12 p-5 bg-white mt-4 ms-2 customBorderBooking2"
                  >
                    <h5 className="date">
                      Monday, 20 July ‘20 -{" "}
                      {String(data.time_departure).slice(0, 5)} (GMT +07:00)
                    </h5>
                    <div className="d-flex align-items-start mt-2">
                      <h3 className="pe-4">{data.region_departure}</h3>
                      <img
                        className="pe-4 mt-2"
                        src={require("../../assets/images/Vector.png")}
                        alt=""
                      />
                      <h3 className="pe-4">{data.region_destination}</h3>
                    </div>
                    <p>{data.id_flight}</p>
                    <hr className="w-100" />
                    <div className="d-flex align-items-end mt-2">
                      <p className="pe-4 mt-2 status">Status</p>
                      {data.status === 0 ? (
                        <button className="btn-custom btn-disabled color-status2">
                          Waiting for payment
                        </button>
                      ) : (
                        <button className="btn-custom btn-disabled color-status1">
                          Eticked issued
                        </button>
                      )}
                      <div className="view-details">
                        {data.status === 1 ? (
                          <Link to={`/booking-detail/${data.id_booking}`}>
                            View Details
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Mybook;
