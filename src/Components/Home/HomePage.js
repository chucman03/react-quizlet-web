import VideoHomePage from "./../../assets/video-homepage.mp4";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signup");
  };

  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={VideoHomePage} />
      </video>
      <div className="homepage-content">
        <div className="title">There's a better way to ask</div>
        <div className="desc">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead and make everyone happy
        </div>
        <div className="button-action">
          <button className="btn-login" onClick={() => handleLogin()}>
            Get's started. It's free
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
