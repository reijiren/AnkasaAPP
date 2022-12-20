import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "../assets/style.css";
import { useDispatch } from "react-redux";
import { getUser, updatePhoto } from "../redux/action/user";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Profiles = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const thisUser = user.user;

  const [image, setImage] = useState(null);

  useEffect(() => {
    const handleSuccess = (data) => {}
    dispatch(getUser(thisUser.id_user, handleSuccess))
  }, [])

  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setImage(fileUploaded);
  };

  const handleSuccess = (data) => {
    alert("Photo Uploaded");
    window.location.reload();
  };

  // update photo profile
  const handleSubmit = (e) => {
    e.preventDefault();
    if(image){
      const formData = new FormData();
      formData.append("photo", image);
      dispatch(updatePhoto(formData, thisUser.id_user, handleSuccess));
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const replaceImage = (img) => {
    img.target.src = `https://res.cloudinary.com/dmkviiqax/image/upload/v1670752651/default_qxzbhn.png`;
  }

  return (
    <>
      <div className="col-md-3 p-5 bg-white m-2 customBorderProfile">
        <div className="row text-center">
          <div className="col-md-12 my-2">
            <img
              src={`${user.user.photo?.split('|&&|')[0]}`}
              onError={replaceImage}
              width="100"
              alt=""
              className="mx-auto d-block rounded-circle customBorder"
            />
          </div>
          <div className="col-md-12 my-2">
            <form action="" onSubmit={handleSubmit} id="form-photo">
              <button type="button" className="btn btn-outline-primary" onClick={handleClick}>
                Select Photo
              </button>
              <button type="submit" className="btn btn-outline-primary" hidden={image ? false : true}>
                Upload Photo
              </button>
              <input
                type="file"
                ref={hiddenFileInput}
                id="formFile"
                onChange={(e) => handleChange(e)}
                style={{ display: "none" }}
              />
            </form>
          </div>
          <div className="col-md-12">
            <h3 className="text-center">
              {user.user.fullname}
            </h3>
            <p className="text-muted">
              {user.user.city ? `${user.user.city}, Indonesia` : "-"}
            </p>
          </div>
          <div className="col-md-12">
            <div className="row">
              <p className="col-md-6 text-start customTitleCard">Cards</p>
              <p className="col-md-6 text-end blue" id="add">
                +add
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card bgBlue text-white">
              <div className="card-body">
                <div className="row">
                  <p>
                    {user.user.credit_card || "-"}
                  </p>
                  <div className="col-md-6 text-start">
                    <p>X Card</p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p>
                      Rp.{" "}
                      {user.user.balance ? String(user.user.balance).split('').reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join('') : "-"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 p-3 ms-4">
            <div className="row text-start">
              <div className="col-md-12 text-bold my-1">
                <p>
                  <i className="fa fa-user blue"> Profile</i>
                </p>
              </div>
              <div className="col-md-12 text-bold my-1">
                <p>
                  <i className="fa fa-star"> My Review</i>
                </p>
              </div>
              <div className="col-md-12 text-bold my-1">
                <p>
                  <i className="fa fa-cog"> Setting</i>
                </p>
              </div>
              <div className="col-md-12 text-bold my-1">
                <p>
                  <i onClick={logout} 
                   style={{cursor: "pointer"}} 
                   className="fa fa-sign-out text-danger"> Logout</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profiles;
