import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

const NavAdmin = () => {
	const name = JSON.parse(localStorage.getItem("name"));

	return (
		<>
			<nav className="navbar bg-light">
				<div className="container-fluid">
					{/* <Link className="navbar-brand">Navbar</Link> */}
					<div>
						<button
							className="btn btn-light"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasWithBothOptions"
							aria-controls="offcanvasWithBothOptions">
							Menu
						</button>

						<div
							className="offcanvas offcanvas-start"
							data-bs-scroll="true"
							tabIndex="-1"
							id="offcanvasWithBothOptions"
							aria-labelledby="offcanvasWithBothOptionsLabel">
							<div className="offcanvas-header">
								<h5
									className="offcanvas-title"
									id="offcanvasWithBothOptionsLabel">
									Menu
								</h5>
								<button
									type="button"
									className={`btn-close`}
									data-bs-dismiss="offcanvas"
									aria-label="Close"></button>
							</div>
							<div className="offcanvas-body">
								<div>
									<button
										className="btn btn-secondary butts"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#airlines"
										aria-expanded="false"
										aria-controls="airlines">
										Airlines
									</button>
									<div className="collapse" id="airlines">
										<div className="card card-body">
											<Link
												className="side-link mid"
												to="/admin/search-airlines/1">
												Search Airlines
											</Link>
											<Link className="side-link" to="/admin/insert-airlines">
												Insert Airlines
											</Link>
										</div>
									</div>
								</div>
								<div className="mid">
									<button
										className="btn btn-secondary butts"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#flight"
										aria-expanded="false"
										aria-controls="flight">
										Flights
									</button>
									<div className="collapse" id="flight">
										<div className="card card-body">
											<Link className="side-link mid" to="/admin/flights">
												Flight Detail
											</Link>
											<Link className="side-link" to="/admin/insert-flights">
												Insert Flights
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={`d-flex`}>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/admin/home">
									Admin Home
								</Link>
							</li>
						</ul>
						<div className="btn-group dropstart">
							<button
								type="button"
								className="btn btn-secondary dropdown-toggle mx-3"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								{name}
							</button>
							<ul className="dropdown-menu">
								<li>
									<Link className="dropdown-item" to="">
										Reset Password
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/login">
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavAdmin;
