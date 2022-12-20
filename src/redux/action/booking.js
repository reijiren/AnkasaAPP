import axios from "axios";

export const myBooking = (id_user, handleSuccess) => ({
    type: "GET_MY_BOOKING",
    payload: new Promise((resolve, reject) => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/booking/user/${id_user}`)
        .then((res) => {
            handleSuccess(res)
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  });

export const getDetailBooking = (id, handleSuccess) => ({
  type: "GET_DETAIL_BOOKING",
  payload: new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/booking/detail/${id}`)
      .then((res) => {
        handleSuccess(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});

export const insertBooking = (body, handleSuccess) => ({
  type: "ADD_BOOKING",
  payload: new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/booking/insert`, body)
      .then((res) => {
        handleSuccess(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});

export const resetBooking = () => {
  return {
      type: "RESET_BOOKING",
  }
}