import React from "react";
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from "react-router-dom";
import BookingDetail from "../pages/booking-detail/booking-detail";
import FlightDetail from "../pages/flight-detail/flight-detail";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Forget from "../pages/forget/forget";
import Mybook from "../pages/mybooking/mybooking";
import SeacrhResult from "../pages/search-result/search-result";
import Explore from "../pages/explore/explore";
import HomeAdmin from "../pages/admin-home";
import LoginAdmin from "../pages/login-admin/loginAdmin";
import InsertAirlines from "../pages/admin-insertAirlines/insertAirlines";
import UpdateAirlines from "../pages/admin-updateAirlines/updateAirlines";
import SearchAirlines from "../pages/admin-searchAirlines/searchAirlines";
import InsertFlight from "../pages/admin-insertFlight/insertFlight";
import FlightList from "../pages/admin-searchFlights/flightList";
import UpdateFlights from "../pages/admin-updateFlights/updateFlights";
import SearchUser from "../pages/admin-searchUser/searchUser";
import ForgetPassword from "../pages/forgetpassword/forgetpassword";
import SearchFlightDetail from "../pages/admin-searchFlights/searchFlights";

import ScrollToTop from "../Component/ScrollToTop";

const PrivateRoute = () => {
	const token = localStorage.getItem("token");

	if (token) {
		return <Outlet />;
	} else {
		alert("Please login first");
		return <Navigate to="/login" />;
	}
};

const AdminRoute = () => {
	const level = localStorage.getItem("level");

	if (level == 0) {
		return <Outlet />;
	} else {
		alert("You have no access to this site");
		return <Navigate to="/admin" />;
	}
};

const Router = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/">
					<Route index element={<Explore />} />
					<Route path="profile" element={<PrivateRoute />}>
						<Route index element={<Profile />} />
					</Route>
					<Route path="flight-detail/:id_flight" element={<PrivateRoute />}>
						<Route index element={<FlightDetail />} />
					</Route>
					<Route path="mybook" element={<PrivateRoute />}>
						<Route index element={<Mybook />} />
					</Route>
					<Route path="booking-detail/:id" element={<PrivateRoute />}>
						<Route index element={<BookingDetail />} />
					</Route>
					<Route path="search-result" element={<PrivateRoute />}>
						<Route index element={<SeacrhResult />} />
					</Route>

					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="forget" element={<Forget />} />
					<Route path="forget-password" element={<ForgetPassword />} />
				</Route>
				<Route path="/admin/">
					<Route index element={<LoginAdmin />} />
					<Route path="home" element={<AdminRoute />}>
						<Route index element={<HomeAdmin />} />
					</Route>
					<Route path="insert-airlines" element={<AdminRoute />}>
						<Route index element={<InsertAirlines />} />
					</Route>
					<Route path="search-airlines/:page" element={<AdminRoute />}>
						<Route index element={<SearchAirlines />} />
					</Route>
					<Route path="update-airlines/:id" element={<AdminRoute />}>
						<Route index element={<UpdateAirlines />} />
					</Route>
					<Route path="insert-flights" element={<AdminRoute />}>
						<Route index element={<InsertFlight />} />
					</Route>
					<Route path="flights" element={<AdminRoute />}>
						<Route index element={<FlightList />} />
					</Route>
					<Route path="search-flights" element={<AdminRoute />}>
						<Route index element={<SearchFlightDetail />} />
					</Route>
					<Route path="update-flight/:id" element={<AdminRoute />}>
						<Route index element={<UpdateFlights />} />
					</Route>
					<Route path="search-user" element={<AdminRoute />}>
						<Route index element={<SearchUser />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
