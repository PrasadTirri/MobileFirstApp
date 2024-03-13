import React, { useState } from "react";
import "./login.css";
import loginImage from "../assets/loginImage.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (mail === "prasad" && password === "tirri") {
      navigate("/home");
    } else {
      alert("Enter mail:prasad, password:tirri");
    }
  };
  return (
    <section className="_form_05">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="_form-05-box formWrapper">
              <div className="row">
                <div className="col-sm-6 _nb-pl px-2">
                  <div className="_mn_df px-5">
                    <div className="main-head">
                      <h2>Login to your account</h2>
                    </div>

                    <div className="form-group">
                      <label className="mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        className="customInput"
                        placeholder="Enter Email"
                        required=""
                        aria-required="true"
                      />
                    </div>

                    <div className="form-group">
                      <label className="mb-2" htmlFor="email">
                        Password
                      </label>
                      <input
                        value={password}
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="customInput"
                        placeholder="Enter Password"
                        required=""
                        aria-required="true"
                      />
                    </div>

                    <div className="checkbox form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          Remember me
                        </label>
                      </div>
                      <a href="#">Forgot Password</a>
                    </div>

                    <div className="form-group">
                      <div className="btn text-black" onClick={handleLogin}>
                        <a href="#">Login</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 _lk_nb mobile_view">
                  <div className="iconWrapper">
                    <img src={loginImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
