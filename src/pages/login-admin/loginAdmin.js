import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { adminLogin } from "../../redux/action/user";

const LoginAdmin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();

		const body = {
			email: form.email,
			password: form.password,
		};

		const handleSuccess = (data) => {
			console.log(data.data);

			if (data.data.status !== "success") {
				alert(data.data.message);
			} else {
				localStorage.setItem(
					"name",
					JSON.stringify(data.data.token.data.fullname)
				);
				localStorage.setItem(
					"email",
					JSON.stringify(data.data.token.data.email)
				);
				localStorage.setItem("token", data.data.token.token);
				localStorage.setItem(
					"level",
					JSON.stringify(data.data.token.data.level)
				);
				return navigate("/admin/home");
			}
		};

		dispatch(adminLogin(form, handleSuccess));
	};

	return (
		<div className="container-fluid row">
			<div className="text-center mb-3">
				<h1>
					Welcome to admin page
					<br />
					Ankasa Ticketing
				</h1>
				<p>Please Log In to continue</p>
			</div>
			<div className="d-flex justify-content-center align-items-center">
				<div className="card">
					<div className="card-body">
						<form onSubmit={(e) => onSubmit(e)}>
							{/* <form> */}
							<div className="form-group mb-3">
								<label htmlFor="username"></label>
								<input
									type="text"
									placeholder="Username or Email"
									className="form-control"
									onChange={(e) =>
										setForm({ ...form, email: e.target.value })
									}></input>
							</div>

							<div className="form-group mb-3">
								<label htmlFor="password"></label>
								<input
									type="password"
									placeholder="Password"
									className="form-control"
									onChange={(e) =>
										setForm({ ...form, password: e.target.value })
									}></input>
							</div>
							<button type="submit" className="btn btn-primary">
								Log In
							</button>
						</form>
						<div className="text-center">
							<Link>Forgot Password</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginAdmin;
