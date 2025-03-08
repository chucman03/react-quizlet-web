import { toast } from "react-toastify";
import { deleteQuizForAdmin } from "../../../../serviecs/apiServices";
import React, { useEffect, useState } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import _ from "lodash";

const ModalDeleteQuiz = (props) => {
  const { show, dataDeleteQuiz, setShow } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitDeleteUser = async () => {
    let data = await deleteQuizForAdmin(dataDeleteQuiz.id);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.fetchQuiz();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>confirm delete quiz ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete quiz:{" "}
          {dataDeleteQuiz && dataDeleteQuiz.name ? dataDeleteQuiz.name : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
            confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalDeleteQuiz;
