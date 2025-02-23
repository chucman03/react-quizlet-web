import "./SignUp.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavItem } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { postSignUp } from "../../serviecs/apiServices";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showHide, setShowHide] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignUp = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("invalid email");
      return;
    }
    if (!password) {
      toast.error("invalid password");
      return;
    }

    let data = await postSignUp(email, password, username);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="SignUp-container">
      <div className="header">
        <span> Already have account?</span>
        <button
          className="btn-login"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
      <div className="title col-4 mx-auto">Chucman Quiz </div>
      <div className="welcome col-4 mx-auto">Register and start now</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>

          <input
            type={showHide ? "text" : "password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {showHide ? (
            <span className="show-hide" onClick={() => setShowHide(false)}>
              <VscEye />
            </span>
          ) : (
            <span className="show-hide" onClick={() => setShowHide(true)}>
              <VscEyeClosed />
            </span>
          )}
        </div>
        <div className="form-group">
          <label>User Name</label>
          <input
            type={"text"}
            className="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <button className="btn-submit" onClick={() => handleSignUp()}>
            Create an account
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            &#60;&#60; Go to HomePage
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
