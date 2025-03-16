import { useState } from "react";
import "./Login.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { postLogin } from "../../serviecs/apiServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";
import "nprogress/nprogress.css";
import Language from "../Header/Language";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleLogin = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("invalid email");
      return;
    }
    if (!password) {
      toast.error("invalid password");
      return;
    }

    setIsLoading(true);

    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span> Don't have account yet?</span>
        <button className="btn-signup" onClick={() => handleSignUp()}>
          Sign Up
        </button>
        <Language />
      </div>
      <div className="title col-4 mx-auto">Chucman Quiz </div>
      <div className="welcome col-4 mx-auto">Hello who's this?</div>
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
            type={"Password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => handleKeyDown(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot password ?</span>
        <div>
          <button
            className="btn-submit"
            onClick={() => handleLogin()}
            disabled={isLoading}
          >
            {isLoading === true && <ImSpinner10 className="loaderIcon" />}
            <span>Login to Quiz account</span>
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
export default Login;
