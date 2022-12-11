import React, { useState } from "react";
import NavAdmin from "../../Component/navAdmin";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	flightDelete,
	getDetailFlight,
	getFlight,
} from "../../redux/action/flight";
import { useEffect } from "react";
import "../../assets/style.css";

const FlightList = () => {
	const [idFlight, setIdFlight] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const handleSuccess = (data) => {};
		dispatch(getFlight(handleSuccess));
	}, []);

	const flight = useSelector((state) => state.flight);

	const onSubmit = (e) => {
		e.preventDefault();

		const handleSuccess = () => {
			return navigate(`/admin/search-flights?id=${idFlight}`);
		};

		dispatch(getDetailFlight(idFlight, handleSuccess));
	};

	const [delFlight, setDelFlight] = useState([]);
	const deleteFlight = (id_flight, e) => {
		e.preventDefault();

		flightDelete(id_flight)
			.then((res) => {
				console.log(res);

				const posts = delFlight.filter((item) => item.id_flight !== id_flight);
				setDelFlight({ data: posts });

				alert("Data berhasil dihapus");

				return navigate("/admin/home");
			})
			.catch((err) => {
				console.log(err);
				alert("Failed Delete Data");
			});
	};

	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`col-7 position relative start-50 translate-middle-x`}>
					<div className={`text-center`}>
						<h1>Search Flights</h1>
					</div>
					<form>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">
								Search Flights
							</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
					</form>
					{flight == undefined ? (
						<h1>No data flight</h1>
					) : (
						flight.flight?.map((item, index) => {
							return (
								<div
									key={index}
									className="col-12 position relative start-50 translate-middle-x my-3">
									<div className="details row">
										<div className="col-auto">
											<img
												src={`${item.logo.split('|&&|')[0]}`}
												className="logo"
											/>
										</div>
										<div className="col-auto">
											<p className="fs-2 airline-name">{item.name}</p>
											<div className="my-auto d-flex">
												<div className="me-3">
													<p className="text-secondary">
														From: <span>{item.city_departure}</span>
													</p>
													<p className="text-secondary">
														To: <span>{item.city_destination}</span>
													</p>
												</div>
												<div className="border"></div>
												<div className="ms-3">
													<p className="">
														Time departure: <span>{item.time_departure}</span>
													</p>
													<p className="">
														Time arrival: <span>{item.time_arrived}</span>
													</p>
												</div>
											</div>
										</div>
										<div className="position-relative start-50 translate-middle-x">
											<Link to={`/admin/update-flight/${item.id_flight}`}>
												<button className="btn btn-primary me-2" type="button">
													Update
												</button>
											</Link>
											<button
												type="button"
												onClick={(e) => deleteFlight(item.id_flight, e)}
												className="btn btn-danger">
												Delete
											</button>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};

export default FlightList;
