import React, { useState, useEffect } from "react";
import "../../assets/style.css";
import Footer from "../../Component/footer";
import Navbar from "../../Component/navbar";
import Profiles from "../../Component/profile";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/action/user";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const thisUser = user.user;

  const [editform, setEditform] = useState(false);

  const handleEdit = () => {
    if (editform) {
      setEditform(false);
    } else {
      setEditform(true);
    }
  }

  const handleSuccess = (data) => {
    console.log(data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    dispatch(updateUser(Object.fromEntries(formData), thisUser.id_user, handleSuccess));
  };

  return (
    <div className="body">
      <Navbar />
      <main className="bg-light">
        <section className="container-fluid p-5 customMainProfile">
          <div className="row">
            <Profiles />
            <div className="col-md-8 bg-warning p-5 bg-white m-2 customBorderProfile">
              <h5 className="blue">PROFILE</h5>
              <h3 className="mb-5">Profile</h3>
              <form onSubmit={(e) => onSubmit(e)} id="form-user">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="mb-4">Contact</h5>
                    <div>
                      <label
                        htmlFor="inputEmail"
                        className="form-label text-muted"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control customBorderInput bg-light"
                        id="inputEmail"
                        disabled
                        placeholder="email@gmail.com"
                        value={
                          user.isLoading
                            ? "Loading..."
                            : thisUser.email
                        }
                      />
                      <hr />
                    </div>
                    <div>
                      <label
                        htmlFor="inputPhone"
                        className="form-label text-muted"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputPhone"
                        name="phone"
                        disabled={!editform}
                        maxLength={12}
                        placeholder="+62"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : thisUser.phone
                        }
                      />
                      <hr />
                    </div>
                    <div>
                      <label
                        htmlFor="inputCard"
                        className="form-label text-muted"
                      >
                        Credit Card
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputCard"
                        name="credit_card"
                        disabled={!editform}
                        placeholder="1234567890123456"
                        maxLength={16}
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : thisUser.credit_card
                        }
                      />
                      <hr />
                    </div>
                    <div>
                      <label
                        htmlFor="inputBalance"
                        className="form-label text-muted"
                      >
                        Balance
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputBalance"
                        name="balance"
                        disabled={!editform}
                        placeholder="Rp. 0"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : thisUser.balance
                        }
                      />
                      <hr />
                    </div>
                    <div className="col-md-12 blue text-end">
                      <h6>
                        Account Setting <i className="fa fa-arrow-right"></i>
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="mb-4">Biodata</h5>
                    <div>
                      <label
                        htmlFor="inputUsername"
                        className="form-label text-muted"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput bg-light"
                        id="inputUsername"
                        disabled
                        placeholder="John Doe"
                        value={
                          user.isLoading
                            ? "Loading..."
                            : thisUser.username
                        }
                      />
                      <hr />
                    </div>

                    <div>
                      <label
                        htmlFor="inputFullname"
                        className="form-label text-muted"
                      >
                        Fullname
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputFullname"
                        name="fullname"
                        disabled={!editform}
                        placeholder="John Doe"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : thisUser.fullname
                        }
                      />
                      <hr />
                    </div>

                    <div>
                      <label
                        htmlFor="inputCity"
                        className="form-label text-muted"
                      >
                        City
                      </label>
                      <div className="col-md-6 w-100">
                        <input
                          type="text"
                          className="form-control customBorderInput"
                          id="inputCity"
                          name="city"
                          disabled={!editform}
                          placeholder="Medan"
                          defaultValue={
                            user.isLoading
                              ? "Loading..."
                              : thisUser.city
                          }
                        />
                      </div>
                      <hr />
                    </div>
                    <div>
                      <label
                        htmlFor="inputAddress"
                        className="form-label text-muted"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputAddress"
                        name="address"
                        disabled={!editform}
                        placeholder="Jl. Sisingamangaraja No. 45"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : thisUser.address
                        }
                      />
                      <hr />
                    </div>
                    <div>
                      <label
                        htmlFor="inputPostCode"
                        className="form-label text-muted"
                      >
                        Pos Code
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputPostCode"
                        name="post_code"
                        disabled={!editform}
                        placeholder="21***"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : thisUser.post_code
                        }
                      />
                      <hr />
                    </div>
                    <div className="row">
                  <div className="col-md-6 text-end mt-3">
                    <button type="button" onClick={handleEdit} className="btn btn-primary bg-danger">Edit</button>
                  </div>
                  <div className="col-md-6 text-center mt-3">
                    <button type="submit" className="btn btn-primary bgBlue" hidden={!editform}>Save</button>
                  </div>
                  </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Profile;
