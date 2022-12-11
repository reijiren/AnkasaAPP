import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavAdmin from "../../Component/navAdmin";
import { addAirlines } from "../../redux/action/airline";

const InsertAirlines = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [addImage, setAddImage] = useState();
	const [form, setForm] = useState({
		name: "",
	});

	const handleChange = (event) => {
		const fileUploaded = event.target.files[0];
		document.getElementById("images").innerHTML = fileUploaded.name;
		setAddImage(fileUploaded);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		let inputForm = new FormData();
		inputForm.append("name", form.name);
		inputForm.append("logo", addImage);

		const handleSuccess = (data) => {
			if (data.data.code == 200) {
				alert("Input Airlines Success");
				return navigate("/admin/home");
			}
		};
		dispatch(addAirlines(inputForm, handleSuccess));
	};

	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<form onSubmit={(e) => onSubmit(e)}>
					<div
						className={`col-md-7 position-relative start-50 translate-middle-x`}>
						<div className={`text-center`}>
							<h1>Insert Airlines</h1>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Airlines Name
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Garuda Indonesia"
								onChange={(e) => {
									setForm({ ...form, name: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formFile" className="form-label">
								Logo Airlines
							</label>
							<input
								className="form-control"
								type="file"
								id="images"
								onChange={handleChange}
							/>
						</div>
						<input className="btn btn-primary" type="submit" value="Submit" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default InsertAirlines;
