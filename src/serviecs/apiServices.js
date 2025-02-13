import axios from "../utils/axiosCustumize";

const postCreateNewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("image", image);
  return axios.post("/api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("/api/v1/participant/all");
};
const putUpdateUser = (username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("image", image);
  return axios.put("/api/v1/participant", data);
};

export { postCreateNewUser, getAllUsers, putUpdateUser };
