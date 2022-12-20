import React, { useState, useEffect } from "react";
import "./flight-detail.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../Component/navbar";
import Footer from "../../Component/footer";
import { getDetailFlight } from "../../redux/action/flight";
import { insertBooking } from "../../redux/action/booking";
import { updateUser } from "../../redux/action/user";

const FlightDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id_flight } = useParams();

  const thisUser = useSelector((state) => state.user.user);
  const [ticket, setTicket] = useState([]);
  const [insurance, setInsurance] = useState(false);

  const toggleInsurance = () => {
    setInsurance((prevstate) => !prevstate);
  };

  const [form, setForm] = useState({
    id_user: "",
    id_flight: "",
    passenger: 1,
    terminal: "",
    gate: "",
    class: "",
    seat: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.terminal === "" || form.gate === "" || form.class === "" || form.seat === ""){
      alert('All input field is required')
    }else{
      const body = {
        id_user: thisUser.id_user,
        id_flight: id_flight,
        status: thisUser.balance >= (insurance ? ticket[0].price + (ticket[0].price * 5 / 100) : ticket[0].price) ? 1 : 0,
        passenger: form.passenger,
        terminal: form.terminal,
        gate: form.gate,
        class: form.class,
        seat: form.seat,
      };
      const handleSuccess = (data) => {
        if(data.data.status === "success"){
          alert("Booking Ticket Success");
        }else{
          alert(data.data.message);
        }
      }
      dispatch(insertBooking(body, handleSuccess));
  
      if(body.status === 1){
        const handleSuccess = (data) => {
          if(data.data.status === "success"){
            return navigate("/mybook");
          }
        }
        const body = {
          balance: thisUser.balance - (insurance ? ticket[0].price + (ticket[0].price * 5 / 100) : ticket[0].price)
        }
        dispatch(updateUser(body, thisUser.id_user, handleSuccess))
      }
    }
  };

  //hook useEffect
  useEffect(() => {
    const handleSuccess = (data) => {
      setTicket(data.data.data)
    }
    dispatch(getDetailFlight(id_flight, handleSuccess));
  }, []);

  return (
    <section>
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}
      <div className="container-fluid container-fluid-flight-detail">
        <div className="background-title">
          <img src={require("../../assets/images/vector 3.png")} />
        </div>
        <div className="container container-main">
          <div className="row">
            <div className="col-md-8">
              <div className="contact-person-details">
                <div className="title-contact-person-details">
                  <h5>Contact Person Details</h5>
                </div>
                <div className="form-contact-person-details">
                  <form>
                    <div className="mb-3 form-group">
                      <label className="mt-4 text-secondary" htmlFor="nama">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={thisUser.fullname}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3 form-group">
                      <label className="text-secondary" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={thisUser.email}
                        className="form-control"
                        id="email"
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-secondary" htmlFor="alamat">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        defaultValue={thisUser.phone}
                        className="form-control"
                        id="phone"
                      />
                    </div>
                  </form>
                </div>
              </div>
              {ticket?.map((data, index) => (
                <div key={index} className="passenger-details-one">
                  <div className="title-passenger-details-one">
                    <h5>Passenger Details</h5>
                  </div>
                  <div className="form-passenger-details-one">
                    <form>
                      <div className="passenger">
                        <span> Passenger : {form.passenger} Adult</span>
                      </div>
                      <div className="mb-3 form-group">
                        <label className="mt-3 text-secondary" htmlFor="title">
                          Title
                        </label>
                        <div className="mt-2 title">
                          {data.gender === "men" ? (
                            <select name="title" id="title">
                              <option value="Mr.">Mr.</option>
                            </select>
                          ) : data.gender === "women" ? (
                            <select name="title" id="title">
                              <option value="Mrs.">Mrs.</option>
                            </select>
                          ) : (
                            <select name="title" id="title">
                              <option value="Mr.">Mr.</option>
                            </select>
                          )}
                        </div>
                      </div>
                      <div className="mb-3 form-group">
                        <label className="text-secondary">Full Name</label>
                        <input
                          type="text"
                          defaultValue={thisUser.fullname}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3 form-group">
                        <label className="text-secondary">Passenger</label>
                        <input
                          type="number"
                          placeholder="Person"
                          className="form-control"
                          defaultValue={1}
                          min={1}
                          onChange={(e) =>
                            setForm({ ...form, passenger: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3 form-group">
                        <label className="text-secondary">Terminal</label>
                        <div className="mt-2 nationality">
                          <select
                            onChange={(e) =>
                              setForm({ ...form, terminal: e.target.value })
                            }
                          >
                            <option value="">Terminal</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 form-group">
                        <label className="text-secondary">Gate</label>
                        <div className="mt-2 nationality">
                          <select
                            onChange={(e) =>
                              setForm({ ...form, gate: e.target.value })
                            }
                          >
                            <option value="">Gate</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 form-group">
                        <label className="text-secondary">Class</label>
                        <div className="mt-2 nationality">
                          <select
                            onChange={(e) =>
                              setForm({ ...form, class: e.target.value })
                            }
                          >
                            <option value="">Class</option>
                            <option value="Business">Business</option>
                            <option value="Economy">Economy</option>
                            <option value="First Class">First Class</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 form-group">
                        <label className="text-secondary">Seat</label>
                        <div className="mt-2 nationality">
                          <select
                            onChange={(e) =>
                              setForm({ ...form, seat: e.target.value })
                            }
                          >
                            <option value="">Seat</option>
                            <option value="1A">1A</option>
                            <option value="2A">2A</option>
                            <option value="3A">3A</option>
                            <option value="4A">4A</option>
                            <option value="5A">5A</option>
                            <option value="6A">6A</option>
                            <option value="7A">7A</option>
                            <option value="8A">8A</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="text-secondary">Nationality</label>
                        <div className="mt-2 nationality">
                          <select>
                            <option value="">Nationality</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Thailand">Thailand</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ))}

              <div className="passenger-details-two">
                <div className="title-passenger-details-two">
                  <h5>Passenger Details</h5>
                </div>
                {ticket?.map((data, index) => (
                  <div key={index} className="form-passenger-details-two">
                    <div className="row">
                      <div className="col-auto">
                        {data.insurance === 1 ? (
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="insurance"
                            onClick={toggleInsurance}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-auto">
                        <h5>Travel Insurance</h5>
                      </div>
                      <div className="col-auto">
                        <h5>
                          Rp.{' '}
                          {insurance
                            ? String(data.price * 5 / 100).split('').reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join('')
                            : 0}
                        </h5>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-auto">
                        <span>Get travel compensation up to</span>
                      </div>
                      <div className="col-auto">
                        <span>
                          Rp.{' '}
                          {data.insurance === 1
                            ? String(data.price * 5 / 100).split('').reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join('')
                            : 0}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 button-payment text-center">
                <button onClick={handleSubmit}>Proceed to Payment</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="flight-details">
                <div className="title-flight-details">
                  <div className="row">
                    <div className="col-auto">
                      <h5>Flight Details</h5>
                    </div>
                    <div className="col-auto button-view-detail">
                      <span className="right">Views Details</span>
                    </div>
                  </div>
                </div>
                {ticket?.map((data, index) => (
                  <div key={index} className="form-flight-details">
                    <div className="row">
                      <div className="col-auto brand-airplane">
                        <img
                          src={`${data.logo.split('|&&|')[0]}`}
                          width={80}
                          height={60}
                        />
                      </div>
                      <div className="col-auto name-airplane">
                        <span className="text-secondary">{data.name}</span>
                      </div>
                    </div>
                    <div className="mt-4 row rute-airplane">
                      <div className="col-auto place-start">
                        <h5>
                          <b>{data.city_departure}</b>
                        </h5>
                      </div>
                      <div className="col-auto icon-airplane">
                        <img src={require("../../assets/images/Vector.png")} />
                      </div>
                      <div className="col-auto place-destination">
                        <h5>
                          <b>{data.city_destination}</b>
                        </h5>
                      </div>
                    </div>
                    <div className="mt-3 row keberangkatan-airplane">
                      <div className="col-auto date-airplane">
                        <span className="text-secondary">
                          {data.date_created}
                        </span>
                      </div>
                      <div className="col-auto icon-airplane-two">
                        <img
                          src={require("../../assets/images/Ellipse 48.png")}
                        />
                      </div>
                      <div className="col-auto clock-airplane">
                        <span className="text-secondary">
                          {String(data.time_departure).slice(0, 5)} -
                          {String(data.time_arrived).slice(0, 5)}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 facility">
                      <div className="refundable">
                        <div className="row">
                          <div className="col-auto">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              checked={data.refundable === 1 ? true : false}
                              readOnly
                            />
                            <span>Refundable</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 reschedule">
                        <div className="row">
                          <div className="col-auto">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name=""
                              checked={data.reschedule === 1 ? true : false}
                              readOnly
                            />
                            <span>Reschedule</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="mt-3 row payment">
                      <div className="col-auto">
                        <h4>Total Payment</h4>
                      </div>
                      <div className="col-auto count-payment">
                        <h4>Rp. {insurance ?
                          String(data.price + (data.price * 5 / 100)).split('').reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join('')
                          :
                          String(data.price).split('').reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join('')
                          }
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

export default FlightDetail;
