import React from "react";
import NavAdmin from "../../Component/navAdmin";

const SearchUser = () => {
	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`col-7 position relative start-50 translate-middle-x`}>
					<div className={`text-center`}>
						<h1>Search User</h1>
					</div>
					<div className="mb-3">
						<label for="exampleInputEmail1" className="form-label">
							Search User
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchUser;
