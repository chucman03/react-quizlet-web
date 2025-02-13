import React, { useState } from "react";
import { useEffect } from "react";
import { getAllUsers } from "../../../serviecs/apiServices";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { BsPlusSquareDotted } from "react-icons/bs";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
  const handleClickBtnUpdate = (user) => {
    setShowModalUdateUser(true);
    setDataUpdate(user);
  };

  const resetUpdateData = () => {
    setDataUpdate({});
  };

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            {" "}
            <BsPlusSquareDotted />
            Add New Users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
      </div>
    </div>
  );
};
export default ManageUser;
