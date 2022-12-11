import React, {useState} from "react";
import "../login/login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkEmail } from "../../redux/action/user";

const Forget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const handleSuccess = (data) => {
      console.log(data.data.data)
      if (data.data.data.length !== 0) {
        localStorage.setItem("email", email)
        return navigate("/forget-password")
      } else {
        alert ("Email is not registered")
      }
    }
    dispatch (checkEmail(email, handleSuccess))
  }

  return (
    <section>
        <div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-7 col-md-7 d-none d-md-block image-container" />
      <div className="col-lg-5 col-md-5 form-container">
        <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-start">
          <div className="logo">
            <img src={require("../../assets/images/Group 29.png")} width="150px" alt />
          </div>
          <div className="heading">
            <h1 className="fw-bold">Forgot Password</h1>
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-input">
              <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" required />
            </div>
            <div className="text-left mb-3">
              <button type="submit" className="custom-btn">Next</button>
            </div>
            <div className="text-center mt-2">
              <p></p><p>
              </p></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Forget;
