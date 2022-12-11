import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavAdmin from "../../Component/navAdmin";
import { findAirline, getSearchAirlines } from "../../redux/action/airline";
import SearchAirlineDetail from "../../Component/detailSearchAirlines";

const SearchAirlines = () => {
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const page = 1;

	const body = {
		limit: 3,
		sortBy: "name",
		sortOrd: "asc",
		airlineName: name ? name : "",
	}

	useEffect(() => {
		const handleSuccess = () => {
			console.log("Data fetched!");
		}
		dispatch(findAirline(page, body, handleSuccess))
	}, [])

	const onSubmit = (e) => {
		e.preventDefault();

		const handleSuccess = () => {
			return navigate(`/admin/search-airlines/1?name=${name}`);
		};

		dispatch(findAirline(page, body, handleSuccess));
	};

	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`col-7 position relative start-50 translate-middle-x`}>
					<div className={`text-center`}>
						<h1>Search Airlines</h1>
					</div>
					<form onSubmit={(e) => onSubmit(e)}>
						<div className="mb-3">
							<label htmlFor="searchAirlines" className="form-label">
								Search Airlines
							</label>
							<input
								type="text"
								className="form-control"
								id="searchAirlines"
								aria-describedby="emailHelp"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
					</form>
					<SearchAirlineDetail />
				</div>
			</div>
		</div>
	);
};

export default SearchAirlines;
