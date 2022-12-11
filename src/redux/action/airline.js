import axios from "axios";

export const getSearchAirlines = (name, handleSuccess) => {
	return {
		type: "GET_SEARCH_AIRLINES",
		payload: new Promise((resolve, reject) => {
			axios({
				url: `${process.env.REACT_APP_BACKEND_URL}/airline/search/${name}`,
				method: "GET",
			})
				.then((response) => {
					resolve(response);
					handleSuccess(response);
				})
				.catch((error) => {
					reject(error);
				});
		}),
	};
};

export const findAirline = (page, body, handleSuccess) => ({
	type: "FIND_AIRLINES",
	payload: new Promise((resolve, reject) => {
		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/airline/find/${page}`, body)
			.then((res) => {
				handleSuccess(res);
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	}),
});

export const addAirlines = (form, handleSuccess) => {
	return {
		type: "INSERT_AIRLINES",
		payload: new Promise((resolve, reject) => {
			axios
				.post(
					`${process.env.REACT_APP_BACKEND_URL}/airline/insert`,
					form
				)
				.then((response) => {
					handleSuccess(response);
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		}),
	};
};

export const airlineDelete = (id_airline, handleSuccess) => ({
	type: "DELETE_AIRLINE",
	payload: new Promise((resolve, reject) => {
		axios
			.delete(
				`${process.env.REACT_APP_BACKEND_URL}/airline/delete/${id_airline}
			`
			)
			.then((res) => {
				handleSuccess(res);
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	}),
});

export const getDetailAirline = (id) => ({
	type: "GET_DETAIL_AIRLINE",
	payload: new Promise((resolve, reject) => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/airline/${id}`)
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	}),
});

export const updateAirline = (id, body, handleSuccess) => ({
	type: "UPDATE_AIRLINE",
	payload: new Promise((resolve, reject) => {
		axios
			.put(`${process.env.REACT_APP_BACKEND_URL}/airline/update/${id}`, body)
			.then((res) => {
				handleSuccess(res);
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	}),
});

export const updateLogo = (id, form, handleSuccess) => ({
	type: "UPDATE_LOGO",
	payload: new Promise((resolve, reject) => {
		axios
			.put(`${process.env.REACT_APP_BACKEND_URL}/airline/changeimg/${id}`, form)
			.then((res) => {
				handleSuccess(res);
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	}),
});

export const resetAirline = () => {
    return {
        type: "RESET_AIRLINE",
    }
}