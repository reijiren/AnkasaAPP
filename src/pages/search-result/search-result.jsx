import React, { useState, useEffect } from "react";
import "./search-result.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../Component/navbar";
import Footer from "../../Component/footer";
import { getFindFlight } from "../../redux/action/flight";
import { findAirline } from "../../redux/action/airline";

const SeacrhResult = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [ticket, setTicket] = useState([]);

  const flight = useSelector((state) => {
    return state.flight;
  });

  const [listAirline, setListAirline] = useState([]);
  useEffect(() => {
    const body = {
      limit: 10,
      sortBy: "name",
      sortOrd: "asc",
      airlineName: "",
    }

    const handleSuccess = (data) => {
      setListAirline(data.data.data);
		};

		dispatch(findAirline(page, body, handleSuccess));
  }, [])

  // SORTING ASCENDING - DESCENDING
  const [sort, setSort] = useState("desc");
  const handleSortOrder = () => {
    if (sort == "desc") {
      setSort("asc");
    } else {
      setSort("desc");
    }
    const body = {
      limit: 2,
      sortBy: "name",
      sortOrd: sort,
      data: {},
    };
    const handleSuccess = (data) => {
      setTicket(data.data.data);
    };
    dispatch(getFindFlight(page, body, handleSuccess));
  };

  const [filter, setFilter] = useState("");
  const [direct, setDirect] = useState("");
  const [transit, setTransit] = useState("");
  const [transit2, setTransit2] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [luggage, setLuggage] = useState("");
  const [inflightMeal, setInflightMeal] = useState("");
  const [wifi, setWifi] = useState("");

  useEffect(() => {
    const handleSuccess = (data) => {
      setTicket(data.data.data);
    }
    const body = {
      limit: 2,
      sortBy: "name",
      sortOrd: sort,
      data: {}
    }
    dispatch(getFindFlight(1, body, handleSuccess));
  }, [])

  useEffect(() => {
    const body = {
      limit: 2,
      sortBy: "name",
      sortOrd: sort,
      data: filter
        ? { airlineName: filter }
        : destination || departure
        ? (destination ? { city_destination: destination } : { city_departure: departure })
        : direct
        ? { direct: direct }
        : transit
        ? { transit: transit }
        : transit2
        ? { transit2: transit2 }
        : luggage
        ? { luggage: luggage }
        : inflightMeal
        ? { inflight_meal: inflightMeal }
        : wifi
        ? { wifi: wifi }
        : {},
    };
    const handleSuccess = (data) => {
      setTicket(data.data.data);
    };
    dispatch(getFindFlight(page, body, handleSuccess));
  }, [
    page,
    sort,
    filter,
    transit,
    direct,
    transit2,
    departure,
    destination,
    luggage,
    inflightMeal,
    wifi,
  ]);

  const NextPage = () => {
    setPage(page + 1);
    const body = {
      limit: 2,
      sortBy: "name",
      sortOrd: "asc",
      data: {},
    };
    const handleSuccess = (data) => {
      setTicket(data.data.data);
    };
    dispatch(getFindFlight(page, body, handleSuccess));
  };

  const PreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      const body = {
        limit: 2,
        sortBy: "name",
        sortOrd: "asc",
        data: {},
      };
      const handleSuccess = (data) => {
        setTicket(data.data.data);
      };
      dispatch(getFindFlight(page - 1, body, handleSuccess));
    }
  };

  const onReset = () => {
    setFilter("")
    setDirect("")
    setTransit("")
    setTransit2("")
    setLuggage("")
    setInflightMeal("")
    setWifi("")
  }

  return (
    <section>
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}
      <div className="container-fluid container-fluid-search-result">
        <div className="background-blue-search-result">
          <div className="row title-container-fluid-search-result">
            <div className="col-md-2">
              <img
                className="mt-5"
                src={require("../../assets/images/vector 3.png")}
              />
            </div>
            <div className="col-md-8 search-container-fluid-search-result">
              <form>
                <div className="row">
                  <div className="col-auto icon-airplane">
                    <img
                      className=""
                      src={require("../../assets/images/icon airplane.png")}
                    />
                  </div>
                  <div className="col-auto input-from">
                    <div>
                      <span>From</span>
                    </div>
                    <div>
                      <input
                        placeholder="Medan (IDN)"
                        onChange={(e) => setDeparture(e.target.value)}
                      />
                    </div>
                    <div></div>
                  </div>
                  <div className="col-auto icon-switch">
                    <img
                      className=""
                      src={require("../../assets/images/Vector (4).png")}
                    />
                  </div>
                  <div className="col-auto input-to">
                    <div>
                      <span>To</span>
                    </div>
                    <div>
                      <input
                        placeholder="Tokyo (JPN)"
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-1 result-search">
                    <div className="row">
                      <div className="col-auto">
                        <p className="date">Monday, 20 July 20</p>
                      </div>
                      <div className="col-auto icon-hole">
                        <img
                          src={require("../../assets/images/Ellipse 36.png")}
                        />
                      </div>
                      <div className="col-auto">
                        <p className="passenger">6 Passenger</p>
                      </div>
                      <div className="col-auto icon-hole">
                        <img
                          src={require("../../assets/images/Ellipse 36.png")}
                        />
                      </div>
                      <div className="col-auto">
                        <p className="class">First Economy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2 bottom-container-fluid-search-result">
              <button onClick={(e) => setDestination("") && setDeparture("")}>
                Change Search
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 container container-main-search-result">
          <div className="row">
            <div className="col-md-4 container-filter-search-result">
              <div className="title-filter-search-result">
                <div className="row">
                  <div className="col-auto">
                    <h5>
                      <b>Filter</b>
                    </h5>
                  </div>
                  <div className="col-auto">
                    <button
                      onClick={onReset}
                      className="button-title-filter-search-result"
                      type="reset"
                      form="filter-form"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 form-filter-search-result">
                <form id="filter-form">
                  {/* FILTER AIRLINE */}
                  <div className="airline text-left">
                    <button
                      type="button"
                      className="mt-3 btn btn-info"
                      data-bs-toggle="collapse"
                      data-bs-target="#select-airline"
                    >
                      <div className="row">
                        <div className="col-auto">
                          <b>Airline</b>
                        </div>
                        <div className="col-auto icon-collapse-airline">
                          <i className="fa fa-sort-up" />
                        </div>
                      </div>
                    </button>
                    <div id="select-airline" className="collapse-airline show">
                      {
                        listAirline?.length === 0 ? (
                          <div className="mt-2 col-md-10">
                            <span>No Airline Found</span>
                          </div>
                        ) : listAirline?.map((e, i) => (
                          <div key={i} className="row">
                            <div className="mt-2 col-md-10">
                              <span>{e.name}</span>
                            </div>
                            <div className="mt-2 col-md-2">
                              <input
                                className="form-check-input"
                                value={e.name}
                                type="checkbox"
                                name="filter-checkbox"
                                onClick={(e) => setFilter(e.target.value)}
                              />
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <hr />
                  {/* FILTER TYPE */}
                  <div className="type text-left">
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="collapse"
                      data-bs-target="#filter-type"
                    >
                      <div className="row">
                        <div className="col-auto">
                          <b>Type</b>
                        </div>
                        <div className="col-auto icon-filter-type">
                          <i className="fa fa-sort-up" />
                        </div>
                      </div>
                    </button>
                    <div id="filter-type" className="collapse-type show">
                      <div className="row">
                        <div className="mt-2 col-md-10">
                          <span>Economy</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="filter-checkbox"
                            name=""
                          />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Business</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>First Class</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* TRANSIT */}
                  <div className="transit text-left">
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="collapse"
                      data-bs-target="#filter-transit"
                    >
                      <div className="row">
                        <div className="col-auto">
                          <b>Transit</b>
                        </div>
                        <div className="col-auto icon-filter-transit">
                          <i className="fa fa-sort-up" />
                        </div>
                      </div>
                    </button>
                    <div id="filter-transit" className="collapse-transit show">
                      <div className="row">
                        <div className="mt-2 col-md-10">
                          <span>Direct</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            value={1}
                            type="checkbox"
                            name="filter-checkbox"
                            onClick={(e) => setDirect(e.target.value)}
                          />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Transit</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            value={1}
                            type="checkbox"
                            name="filter-checkbox"
                            onClick={(e) => setTransit(e.target.value)}
                          />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Trasit 2+</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            value={1}
                            type="checkbox"
                            name="filter-checkbox"
                            onClick={(e) => setTransit2(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* FACILITIES */}
                  <div className="facilities text-left">
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="collapse"
                      data-bs-target="#filter-facilities"
                    >
                      <div className="row">
                        <div className="col-auto">
                          <b>Facilities</b>
                        </div>
                        <div className="col-auto icon-filter-facilities">
                          <i className="fa fa-sort-up" />
                        </div>
                      </div>
                    </button>
                    <div
                      id="filter-facilities"
                      className="collapse-facilities show"
                    >
                      <div className="row">
                        <div className="mt-2 col-md-10">
                          <span>Luggage</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            value={1}
                            type="checkbox"
                            name="filter-checkbox"
                            onClick={(e) => setLuggage(e.target.value)}
                          />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Lunch</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            value={1}
                            type="checkbox"
                            name="filter-checkbox"
                            onClick={(e) => setInflightMeal(e.target.value)}
                          />
                        </div>
                        <div className="mt-2 col-md-10">
                          <span>Wi-fi</span>
                        </div>
                        <div className="mt-2 col-md-2">
                          <input
                            className="form-check-input"
                            value={1}
                            type="checkbox"
                            name="filter-checkbox"
                            onClick={(e) => setWifi(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* SELECT TICKET */}

            <div className="col-md-8 container-select-ticket-search-result">
              <div className="title-select-ticket-search-result">
                <div className="row">
                  <div className="col-auto">
                    <h5>
                      <b>Select Filter</b>
                    </h5>
                  </div>
                  <div className="col-auto">
                  </div>
                  <div className="col-auto sorting-title-select-ticket-search-result">
                    <div className="row">
                      <div className="dropdown dropdown-sorting">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          id="sorting"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <b>Sort order</b>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu"
                          aria-labelledby="sorting"
                        >
                          <li>
                            <a className="dropdown-item" onClick={handleSortOrder}>
                              {sort.toUpperCase()}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TICKET */}
              {flight.isLoading ? (
                <span className="text-center text-secondary">
                  Loading...
                </span>
              ) : ticket &&
              ticket?.length === 0 ? (
                <span className="text-center text-secondary">
                  Data not found!
                </span>
              ) : (
                ticket?.map((data, index) => (
                  <div
                    key={index}
                    className="mt-3 form-select-ticket-search-result"
                  >
                    <div className="select-ticket-search-result">
                      <div className="row">
                        <div className="col-auto logo-airline">
                          <img
                            src={`${data.logo.split('|&&|')[0]}`}
                          />
                        </div>
                        <div className="col-auto name-airplane-select-ticket">
                          <span className="text-secondary">{data.name}</span>
                        </div>
                      </div>
                      <div className="mt-4 row">
                        <div className="col-auto">
                          <h4>
                            <b>{data.city_departure}</b>
                          </h4>
                          <span className="text-secondary">
                            {String(data.time_departure).slice(0, 5)}
                          </span>
                        </div>
                        <div className="col-auto">
                          <img
                            src={require("../../assets/images/Vector.png")}
                          />
                        </div>
                        <div className="col-auto">
                          <h4>
                            <b>{data.city_destination}</b>
                          </h4>
                          <span className="text-secondary">
                            {String(data.time_arrived).slice(0, 5)}
                          </span>
                        </div>
                        <div className="col-auto">
                          <div className="row">
                            <div className="col-auto">
                              <span className="text-secondary">
                                {data.time_arrived.slice(0, 2) - data.time_departure.slice(0, 2)} hours
                              </span>
                            </div>
                            <div>
                              <span className="text-secondary">
                                {data.transit === 0
                                  ? "Direct"
                                  : data.transit === 1
                                  ? "1 transit"
                                  : "2 transit"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto facility-select-ticket">
                          <div className="row">
                            <div className="col-auto facility-select-ticket-bag">
                              {data.luggage === 1 && (
                                <img
                                  src={require("../../assets/images/Vector (1).png")}
                                />
                              )}
                            </div>
                            <div className="col-auto facility-select-ticket-food">
                              {data.inflight_meal === 1 && (
                                <img
                                  src={require("../../assets/images/Vector (2).png")}
                                />
                              )}
                            </div>
                            <div className="col-auto facility-select-ticket-wifi">
                              {data.wifi === 1 && (
                                <img
                                  src={require("../../assets/images/Vector (3).png")}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="row">
                            <div className="col-auto count-select-ticket">
                              <h6>Rp. {String(data.price).split('').reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join('')}</h6>
                            </div>
                            <div className="col-auto pax-select-ticket">
                              <span className="text-secondary">/pax</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 button-select-ticket">
                          <Link to={`/flight-detail/${data.id_flight}`}>
                            <button>Select</button>
                          </Link>
                        </div>
                      </div>
                      <div className="btn-view-detail">
                        <button
                          type="button"
                          className="mt-3 btn btn-info"
                          data-bs-toggle="collapse"
                          data-bs-target={`#demo${index}`}
                        >
                          View Details <i className="fa fa-sort-down" />
                        </button>
                        <div id={`demo${index}`} className="collapse">
                          <div className="mt-3 view-detail-ticket">
                            <div className="row">
                              <div className="col-md-6 view-detail-ticket-left">
                                <div className="text-secondary">
                                  <h6>Ticket Detail</h6>
                                </div>
                                <p className="text-secondary">
                                  Airline : {data.name}
                                </p>
                                <p className="text-secondary">
                                  City Departure : {data.city_departure} -{" "}
                                  {data.region_departure}
                                </p>
                                <p className="text-secondary">
                                  City Destination : {data.city_destination} -{" "}
                                  {data.region_destination}
                                </p>
                                <p className="text-secondary">
                                  Time estimation : {data.time_departure} -{" "}
                                  {data.time_arrived}
                                </p>
                                <p className="text-secondary">
                                  Transit :{" "}
                                  {data.transit === 0
                                    ? "Direct"
                                    : data.transit === 1
                                    ? "1 transit"
                                    : "2 transit"}
                                </p>
                              </div>
                              <div className="col-md-6 view-detail-ticket-right">
                                <div className="text-secondary">
                                  <h6>Facilities</h6>
                                </div>
                                <p className="text-secondary">
                                  Refundable :{" "}
                                  {data.refundable === 1 ? "Yes" : "No"}
                                </p>
                                <p className="text-secondary">
                                  Luggage : {data.luggage === 1 ? "Yes" : "No"}
                                </p>
                                <p className="text-secondary">
                                  Meal :{" "}
                                  {data.inflight_meal === 1 ? "Yes" : "No"}
                                </p>
                                <p className="text-secondary">
                                  Wifi : {data.wifi === 1 ? "Yes" : "No"}
                                </p>
                                <p className="text-secondary">
                                  Insurance :{" "}
                                  {data.insurance === 1 ? "Yes" : "No"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {/* Pagination */}
              <div className="d-flex justify-content-center">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="btn btn-warning-custom page-link"
                      disabled={page == 1}
                      onClick={() => PreviousPage()}
                    >
                      Previous
                    </button>
                  </li>
                  <li style={{ marginLeft: 3 }}>
                    <button className="btn btn-warning-custom page-link">
                      {page}
                    </button>
                  </li>
                  <li style={{ marginLeft: 3 }} className="page-item">
                    <button
                      className="btn btn-warning-custom page-link"
                      disabled={flight.flight <= 0}
                      onClick={() => NextPage()}
                    >
                      Next
                    </button>
                  </li>
                </ul>
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

export default SeacrhResult;
