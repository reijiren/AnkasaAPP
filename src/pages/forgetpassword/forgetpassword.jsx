import React, { useState } from "react";
import "../login/login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../redux/action/user";
import { useEffect } from "react";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: localStorage.getItem("email"),
    password: "",
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    if(!email){
      alert('Please find your email');
      return navigate('/forget')
    }
  }, [])

  const [confirmPassword, setConfirmPassword] = useState("")
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.password !== confirmPassword) {
      alert ("Password is not match")
    } else {
    const handleSuccess = (data) => {
        alert ("Password has been updated")
        return navigate("/login")
    }
    dispatch(changePassword(form, handleSuccess))
    }
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
              <input type="password" name="password" onChange={(e) => setForm({...form, password: e.target.value})} id="password" placeholder="New Password" required />
            </div>
            <div className="form-input">
              <input type="password" name="password2" onChange={(e) => setConfirmPassword(e.target.value)} id="password2" placeholder="Confirm New Password" required />
            </div>
            <div className="text-left mb-3">
              <button type="submit" className="custom-btn">Sign in</button>
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

export default ForgetPassword;
