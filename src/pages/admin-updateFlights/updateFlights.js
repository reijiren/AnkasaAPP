import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavAdmin from "../../Component/navAdmin";
import { findAirline } from "../../redux/action/airline";
import { flightUpdate, getDetailFlight } from "../../redux/action/flight";

const UpdateFlights = () => {
	const dispatch = useDispatch();
	const {id} = useParams();
	const navigate = useNavigate();

	const [detail, setDetail] = useState({});
	const [airline, setAirline] = useState([]);

	useEffect(() => {
		const handleSuccess = (data) => {
			setDetail(data.data.data[0])
		}
		dispatch(getDetailFlight(id, handleSuccess));
	}, [])

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

	const onSubmit = (e) => {
		e.preventDefault();

		const body = {data: detail}
		flightUpdate(body)

		alert('flight updated successfully');
		return navigate('/admin/home')
	}

	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`col-md-7 position-relative start-50 translate-middle-x pb-3`}>
					<form onSubmit={(e) => onSubmit(e)}>
						<div className={`text-center`}>
							<h1>Update Flights</h1>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Airline
							</label>
							<select
								onChange={(e) =>
									setDetail({ ...detail, airline: e.target.value })
								}
								className="form-select form-select-sm"
								id="formGroupExampleInput"
							>
								{
									airline?.length === 0 ? 
									<option value={null} disabled>No Airline Found</option> : 
									airline.map((e, i) => (
										<option key={i} value={e.id_airline} selected={e.id_airline === detail.airline ? true : false}>{e.name}</option>
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
								defaultValue={detail.city_departure}
								onChange={
									(e) => setDetail({...detail, city_departure: e.target.value})
								}
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
								defaultValue={detail.city_destination}
								onChange={
									(e) => setDetail({...detail, city_destination: e.target.value})
								}
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
								defaultValue={detail.region_departure}
								onChange={
									(e) => setDetail({...detail, region_departure: e.target.value})
								}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Region Destination
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Japan"
								defaultValue={detail.region_destination}
								onChange={
									(e) => setDetail({...detail, region_destination: e.target.value})
								}
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
									setDetail({ ...detail, luggage: e.target.value });
								}}>
								<option value={0} selected={detail.luggage === 0 ? true : false}>No Luggage</option>
								<option value={1} selected={detail.luggage === 1 ? true : false}>With Luggage</option>
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
									setDetail({ ...detail, inflight_meal: e.target.value });
								}}>
								<option value={0} selected={detail.inflight_meal === 0 ? true : false}>No Meal</option>
								<option value={1} selected={detail.inflight_meal === 1 ? true : false}>With Meal</option>
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
									setDetail({ ...detail, wifi: e.target.value });
								}}>
								<option value={0} selected={detail.wifi === 0 ? true : false}>No WiFi</option>
								<option value={1} selected={detail.wifi === 1 ? true : false}>With WiFi</option>
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
								defaultValue={detail.time_departure}
								onChange={
									(e) => setDetail({...detail, time_departure: e.target.value})
								}
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
								defaultValue={detail.time_arrived}
								onChange={
									(e) => setDetail({...detail, time_arrived: e.target.value})
								}
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
								defaultValue={detail.price}
								onChange={
									(e) => setDetail({...detail, price: e.target.value})
								}
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
									setDetail({ ...detail, refundable: e.target.value });
								}}>
									<option value={0} selected={detail.refundable === 0 ? true : false}>No Refund</option>
									<option value={1} selected={detail.refundable === 1 ? true : false}>With Refund</option>
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
									setDetail({ ...detail, reschedule: e.target.value });
								}}>
								<option value={0} selected={detail.reschedule === 0 ? true : false}>No Reschedule</option>
								<option value={1} selected={detail.reschedule === 1 ? true : false}>With Reschedule</option>
							</select>
						</div>
						<div className="my-4">
							<button type="submit" className="btn btn-secondary position-absolute start-50 translate-middle-x col-5">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateFlights;
