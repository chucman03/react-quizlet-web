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
import SignUp from "./Components/Auth/SignUp";
import ListQuiz from "./Components/User/ListQuiz";
import DetailQuiz from "./Components/User/DetailQuiz";
import ManageQuiz from "./Components/Admin/content/Quiz/ManageQuiz";
import Questions from "./Components/Admin/content/Question/Questions";

const NotFound = () => {
  return (
    <div className="container mt-3 alert alert-danger">not found data </div>
  );
};
const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<ListQuiz />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<DashBoard />} />
            <Route path="manage-users" element={<ManageUser />} />
            <Route path="manage-quizzes" element={<ManageQuiz />} />
            <Route path="manage-questions" element={<Questions />} />
          </Route>
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
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
