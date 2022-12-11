import React from "react";
import { useState } from "react";
import "../login/login.css";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/action/user";
import { useEffect } from "react";
import { resetAirline } from "../../redux/action/airline";
import { resetBooking } from "../../redux/action/booking";
import { resetFlight } from "../../redux/action/flight";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [form, setForm] = useState({
      email:'',
      password: '',
    })

  useEffect(() => {
    localStorage.clear();
  }, [])

  const toRegister = () => {
    return navigate('/register')
  }

  const toResetPassword = () => {
    return navigate('/forget')
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    const handleSuccess = (data) => {
      if(data.data.status === "success"){
        const userData = data.data.token;
        localStorage.setItem("token", userData.token)
        localStorage.setItem("email", JSON.stringify(userData.data.email))
        dispatch(resetAirline());
        dispatch(resetBooking());
        dispatch(resetFlight());
        alert("Login Success")
        
        navigate("/")
      }else{
        alert(data.data.message)
      }
    }
    dispatch(userLogin(form, handleSuccess))
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-7 d-none d-md-block image-container" />
          <div className="col-lg-5 col-md-5 form-container">
            <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-start">
              <div className="logo">
                <img src={require("../../assets/images/Group 29.png")} width="150px" alt="" />
              </div>
              <div className="heading">
                <h1 className="fw-bold">Login</h1>
              </div>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-input">
                  <input type="text" onChange={(e) => setForm({...form, email: e.target.value})} name="email" id="email" placeholder="Email" required />
                </div>
                <div className="form-input">
                  <input type="password" onChange={(e) => setForm({...form, password: e.target.value})} name="password" id="password" placeholder="Password" required />
                </div>
                <div className="text-left mb-3">
                  <button type="submit" className="custom-btn">Sign in</button>
                </div>
                <div className="text-center mt-2">
                  <p>Did you forgot your password?</p><p>
                  </p></div>
                <div className="text-center mb-3">
                  <button type="button" className="tap-btn" onClick={toResetPassword}>Tap here for reset</button>
                </div>
                <hr className="mt-5" />
                <div className="text-center mt-2">
                  <p>Or sign in with</p>
                </div>
                <div className="text-center mb-3">
                  <button type="button" className="soc-btn" onClick={toRegister}><img src={require("../../assets/images/google.png")} alt="" /></button>
                  <button type="button" className="soc-btn" onClick={toRegister}><img src={require("../../assets/images/Facebook.png")}alt="" /></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
