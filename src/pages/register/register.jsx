import React, {useState} from "react";
import "../login/login.css";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../redux/action/user";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
       username:'',
       email:'',
       password:'',
       password2:'',
  })
  
  const onSubmit =  (e) => {
      e.preventDefault();
      if(form.username == "" || form.email == "" || form.password == ""){
          alert('Semua input wajib diisi')
      }else {
          if (form.password !== form.password2) {
            alert("Password harus sama");
            return navigate ("/register")
          }
          const body = {
              username: form.username,
              password: form.password,
              email: form.email,
          }
          const handleSuccess = (data) => {
            if(data.data.code !== 200){
              alert('error:' + data.data.message)
            }
            else{
                alert("Register success")
                return navigate('/login')
            }
          }
          dispatch (userRegister(form, handleSuccess))
      }    
  }

  return (
    <section>
     <div className="container-fluid">
  <div className="row">
    <div className="col-lg-7 col-md-7 d-none d-md-block image-container" />
    <div className="col-lg-5 col-md-5 form-container">
      <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-start">
        <div className="logo">
          <img src={require("../../assets/images/Group 29.png")} width="150px" alt />
        </div>
        <div className="heading">
          <h1 className="fw-bold">Register</h1>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-input">
            <input type="text" name="username" onChange={(e) => setForm({...form, username: e.target.value})} id="username" placeholder="Username" required />
          </div>
          <div className="form-input">
            <input type="email" name="email" onChange={(e) => setForm({...form, email: e.target.value})} id="email" placeholder="Email" required />
          </div>
          <div className="form-input">
            <input type="password" name="password" onChange={(e) => setForm({...form, password: e.target.value})} id="password" placeholder="Password" required />
          </div>
          <div className="form-input">
            <input type="password" name="password2" onChange={(e) => setForm({...form, password2: e.target.value})} id="password2" placeholder="Confirm Password" required />
          </div>
          <div className="text-left mb-3">
            <button type="submit" className="custom-btn">Sign up</button>
          </div>
          <div className="text-left mt-3">
            <input className="me-2" type="checkbox" id="cb1" />
            <label htmlFor="cb1">Accept terms and condition</label>
          </div>
          <hr className="mt-5" />
          <div className="text-center mt-2">
            <p>Already have an account?</p><p>
            </p></div>
          <div className="text-left mb-3">
            <button type="submit" className="sign-btn">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Register;
