import { useSelector } from "react-redux";
import VideoHomePage from "./../../assets/video-homepage.mp4";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const HomePage = (props) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const { t } = useTranslation();

  const handleLogin = () => {
    navigate("/signup");
  };

  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={VideoHomePage} />
      </video>
      <div className="homepage-content">
        <div className="title">{t("homepage.title")}</div>
        <div className="desc">{t("homepage.desc")}</div>
        <div className="button-action">
          {isAuthenticated === false ? (
            <button className="btn-login" onClick={() => handleLogin()}>
              {t("homepage.title2.login")}
            </button>
          ) : (
            <button onClick={() => navigate("/users")}>
              {t("homepage.title2.user")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
