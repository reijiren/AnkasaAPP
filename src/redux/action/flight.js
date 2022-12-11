import axios from "axios";

export const getFlight = (handleSuccess) => ({
	type: "GET_FLIGHT",
	payload: new Promise((resolve, reject) => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/flight`)
			.then((res) => {
				handleSuccess(res);
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	}),
});

export const getFindFlight = (page, body, handleSuccess) => ({
	type: "GET_FIND_FLIGHT",
	payload: new Promise((resolve, reject) => {
		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/flight/find/${page}`, body)
			.then((res) => {
				handleSuccess(res);
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	}),
});

export const getDetailFlight = (id_flight, handleSuccess) => ({
	type: "GET_DETAIL_FLIGHT",
	payload: new Promise((resolve, reject) => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/flight/detail?id=${id_flight}`)
			.then((res) => {
				handleSuccess(res);
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	}),
});

export const insertDataFlight = (form) => {
	return {
		type: "INSERT_FLIGHT",
		payload: new Promise((resolve, reject) => {
			const body = { data: form };
			
			axios
				.post(`${process.env.REACT_APP_BACKEND_URL}/flight/insert`, body)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		}),
	};
};

export const flightDelete = (id_flight) => {
	return new Promise((resolve, reject) => {
		axios
			.delete(
				`${process.env.REACT_APP_BACKEND_URL}/flight/delete?id=${id_flight}
			`
			)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const flightUpdate = (form) => {
	return new Promise((resolve, reject) => {
		axios.put(
				`${process.env.REACT_APP_BACKEND_URL}/flight/update`, form
			)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const resetFlight = () => {
    return {
        type: "RESET_FLIGHT",
    }
}