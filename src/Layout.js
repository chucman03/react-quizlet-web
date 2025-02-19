import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./Components/User/User";
import Admin from "./Components/Admin/Admin";
import HomePage from "./Components/Home/HomePage";
import ManageUser from "./Components/Admin/content/ManageUser";
import DashBoard from "./Components/Admin/content/DashBoard";
import Login from "./Components/Auth/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<User />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<DashBoard />} />
            <Route path="manage-users" element={<ManageUser />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* </React.StrictMode> */}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default Layout;
