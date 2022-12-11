import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import { airlineDelete, findAirline, getSearchAirlines } from "../redux/action/airline";
import "../assets/style.css";

const SearchAirlineDetail = () => {
	const [queryParam] = useSearchParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const name = queryParam.get("name") || "";
	const {page} = useParams();

	const pagination = parseInt(page);

	const body = {
		limit: 3,
		sortBy: "name",
		sortOrd: "asc",
		airlineName: name ? name : "",
	}

	useEffect(() => {
		console.log(pagination)
		const handleSuccess = (data) => {
			console.log(data);
		};

		dispatch(findAirline(page, body, handleSuccess));
	}, [pagination]);

	const [delAirlines, setDelAirlines] = useState([]);

	const airline = useSelector((state) => {
		return state.airline;
	});

	const onPrev = () => {
		return navigate(`/admin/search-airlines/${pagination - 1}`)
	}

	const onNext = () => {
		return navigate(`/admin/search-airlines/${pagination + 1}`)
	}

	const deleteAirlines = (id_airline, e) => {
		e.preventDefault();

		const handleSuccess = (data) => {
				console.log(data);

				const posts = delAirlines.filter(
					(item) => item.id_airline !== id_airline
				);
				setDelAirlines({ data: posts });

				alert("Airline deleted. All related data will also be deleted.");
		}

		dispatch(airlineDelete(id_airline, handleSuccess));
	};

	return (
		<div>
			<div className="container-fluid row">
				{airline.isLoading ? (
					<h1>loading</h1>
				) : airline.isError ? (
					<div></div>
				) : (!airline.airline || airline.airline == "") ? (
					<h1>Data is not found</h1>
				) : (
					airline.airline.map((item, index) => {
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
										<Link to={`/admin/update-airlines/${item.id_airline}`}>
											<button>Update</button>
										</Link>
										<button
											type="button"
											onClick={(e) => deleteAirlines(item.id_airline, e)}>
											Delete
										</button>
									</div>
								</div>
							</div>
						);
					})
				)}

				<div className="d-flex flex-row">
					<button onClick={() => onPrev()} disabled={pagination === 1}>&#60;</button>
					<button onClick={() => onNext()} disabled={airline.airline == ""}>&#62;</button>
				</div>
			</div>
		</div>
	);
};

export default SearchAirlineDetail;
