import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavAdmin from "../../Component/navAdmin";
import { findAirline } from "../../redux/action/airline";
import { insertDataFlight } from "../../redux/action/flight";

const InsertFlight = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [airline, setAirline] = useState([]);

	useEffect(() => {
		const body = {
			limit: 99,
			sortBy: "name",
			sortOrd: "asc",
			airlineName: "",
		}
		const handleSuccess = (data) => {
			setAirline(data.data.data);
		};
		dispatch(findAirline(1, body, handleSuccess));
	}, [])

	const [form, setForm] = useState({
		id_flight: "",
		airline: 1,
		city_departure: "",
		city_destination: "",
		region_departure: "",
		region_destination: "",
		max_capacity: 0,
		luggage: 0,
		inflight_meal: 0,
		wifi: 0,
		time_departure: "",
		time_arrived: "",
		price: 0,
		refundable: 0,
		reschedule: 0,
		insurance: 0,
		transit: 0,
	});

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(insertDataFlight(form));
		alert("Flight inserted successfully");
		return navigate("/admin/home");
	};

	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div
					className={`col-md-7 position-relative start-50 translate-middle-x pb-3`}>
					<div className={`text-center`}>
						<h1>Insert Flights</h1>
					</div>
					<form onSubmit={(e) => onSubmit(e)}>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								ID Flight
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: AAP-229"
								maxLength={10}
								onChange={(e) => {
									setForm({ ...form, id_flight: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								ID Airlines
							</label>
							<select
								onChange={(e) =>
									setForm({ ...form, airline: e.target.value })
								}
								className="form-select form-select-sm"
								id="formGroupExampleInput"
							>
								<option value={null} disabled selected hidden>Select airline</option>
								{
									airline?.length === 0 ? 
									<option value={null} disabled>No Airline Found</option> : 
									airline.map((e, i) => (
										<option key={i} value={e.id_airline}>{e.name}</option>
									))
								}
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								City Departure
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Jakarta"
								onChange={(e) => {
									setForm({ ...form, city_departure: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								City Destination
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Tokyo"
								onChange={(e) => {
									setForm({ ...form, city_destination: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Region Departure
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Indonesia"
								onChange={(e) => {
									setForm({ ...form, region_departure: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Region Deestination
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Japan"
								onChange={(e) => {
									setForm({ ...form, region_destination: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Max Capacity
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: 1000"
								onChange={(e) => {
									setForm({ ...form, max_capacity: parseInt(e.target.value) });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Luggage
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, luggage: parseInt(e.target.value) });
								}}>
								<option value={null} disabled selected hidden>Luggage Option</option>
								<option value={0}>No Luggage</option>
								<option value={1}>With Luggage</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Flights Meal
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, inflight_meal: parseInt(e.target.value) });
								}}>
								<option value={null} disabled selected hidden>Meal Option</option>
								<option value={0}>No Meal</option>
								<option value={1}>With Meal</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Flights WiFi
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, wifi: parseInt(e.target.value) });
								}}>
								<option value={null} disabled selected hidden>WiFi Option</option>
								<option value={0}>No WiFi</option>
								<option value={1}>With WiFi</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Time Departure
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: 05:00:00"
								onChange={(e) => {
									setForm({ ...form, time_departure: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Time Arrived
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: 15:00:00"
								onChange={(e) => {
									setForm({ ...form, time_arrived: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Price
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: 5000000"
								onChange={(e) => {
									setForm({ ...form, price: parseInt(e.target.value) });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Refundable
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, refundable: parseInt(e.target.value) });
								}}>
								<option value={null} disabled selected hidden>Refund Option</option>
								<option value={0}>No Refund</option>
								<option value={1}>With Refund</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Reschedule
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, reschedule: parseInt(e.target.value) });
								}}>
								<option value={null} disabled selected hidden>Reschedule Option</option>
								<option value={0}>No Reschedule</option>
								<option value={1}>With Reschedule</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Insurance
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, insurance: parseInt(e.target.value) });
								}}>
								<option value={null} disabled selected hidden>Insurance Option</option>
								<option value={0}>No Insurance</option>
								<option value={1}>With Insurance</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Transit
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, transit: parseInt(e.target.value) });
								}}>
								<option value={null} disabled selected hidden>Transit Option</option>
								<option value={0}>No Transit</option>
								<option value={1}>With Transit</option>
							</select>
						</div>
						<div className="mb-4 mt-4">
							<input
								className="btn btn-secondary position-absolute start-50 translate-middle-x col-5"
								type="submit"
								value="Submit"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default InsertFlight;
