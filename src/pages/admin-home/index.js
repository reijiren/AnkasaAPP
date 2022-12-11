import React from "react";
import { Link } from "react-router-dom";
import NavAdmin from "../../Component/navAdmin";
import style from "./style.module.css";

const HomeAdmin = () => {
	const name = JSON.parse(localStorage.getItem("name"));

	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`${style.title}`}>
					<h2>Home</h2>
				</div>
				<div
					className={`${style.welcome} col-11 position-relative translate-middle-x start-50`}>
					<div className={`position-relative top-50 translate-middle-y`}>
						<h1>
							Hello, <span>{name}</span>!
						</h1>
						<p>Welcome to Ankasa Ticketing Admin Page</p>
						<Link className="btn btn-primary" to="/" role="button">
							Ankasa Ticketing Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAdmin;
