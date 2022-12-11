import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../../assets/style.css";
import { flightDelete, getDetailFlight } from "../../redux/action/flight";
import NavAdmin from "../../Component/navAdmin";

const SearchFlightDetail = () => {
	const [queryParam] = useSearchParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const idFlight = queryParam.get("id_flight");

	useEffect(() => {
		dispatch(getDetailFlight(idFlight));
	}, []);

	const [delFlight, setDelFlight] = useState([]);

	const flight = useSelector((state) => {
		return state.flight;
	});

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
			<div>
				<NavAdmin />
				<div className={`container-fluid row`}>
					<div
						className={`col-7 position relative start-50 translate-middle-x`}>
						<div className={`text-center`}>
							<h1>Search Flights</h1>
						</div>
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
					</div>
				</div>
			</div>
			<div className="container-fluid row">
				{flight.isLoading ? (
					<h1>loading</h1>
				) : flight.isError ? (
					<div></div>
				) : (
					flight.flight?.map((item, index) => {
						return (
							<div
								key={index}
								className="col-7 position relative start-50 translate-middle-x my-3">
								<div className="details row">
									<div className="col-auto">
										<img
											src={`${item.logo.split('|&&|')[0]}`}
											className="logo"
										/>
									</div>
									<div className="col-auto">
										<p className="fs-2 airline-name">{item.name}</p>
									</div>
									<div className="position-relative start-50 translate-middle-x">
										<Link to={`/admin/update-flight/${item.id_airline}`}>
											<button>Update</button>
										</Link>
										<button
											type="button"
											onClick={(e) => deleteFlight(item.id_flight, e)}>
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
	);
};

export default SearchFlightDetail;
