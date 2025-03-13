import { useState, useEffect } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import {
  postCreateNewQuiz,
  getAllQuizForAdmin,
} from "../../../../serviecs/apiServices";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";
import ModalEditQuiz from "./ModalEditQuiz";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import QuizQA from "./QuizQA";
import AssignQuiz from "./AssignQuiz";

const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];

const ManageQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [showModalEditQuiz, setShowModalEditQuiz] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  const [dataDeleteQuiz, setDataDeleteQuiz] = useState({});
  const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const handleChangeFile = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    } else {
      // setPreviewImage("");
    }
  };

  const handleSubmitQuiz = async () => {
    if (!name || !description) {
      toast.error("name/description is required");
      return;
    }
    let res = await postCreateNewQuiz(description, name, type?.value, image);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
    } else {
      toast.error(res.EM);
    }
  };

  const handleClickBtnEditQuiz = (item) => {
    setShowModalEditQuiz(true);
    setDataEdit(item);
  };

  const resetEditData = () => {
    setDataEdit({});
  };
  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
  };
  const handleClickBtnDeleteQuiz = (item) => {
    setShowModalDeleteQuiz(true);
    setDataDeleteQuiz(item);
  };

  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Manage Quizzes</Accordion.Header>
          <Accordion.Body>
            <div className="add-new">
              <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add New Quiz</legend>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your quiz name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label>Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="quiz description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <label>Description</label>
                </div>
                <div className="my-3">
                  {" "}
                  <Select
                    value={type}
                    defaultValue={type}
                    onChange={setType}
                    options={options}
                    placeholder={"Quiz type"}
                  />
                </div>
                <div className="more-actions form-group">
                  <label className="mb-1">Upload image</label>
                  <input
                    id="upload-file"
                    type="file"
                    className="form-control"
                    onChange={(event) => handleChangeFile(event)}
                  />
                </div>
                <div className="mt-3">
                  <button
                    onClick={() => handleSubmitQuiz()}
                    className="btn btn-warning"
                  >
                    Save
                  </button>
                </div>
              </fieldset>
            </div>

            <div className="list-detail">
              <TableQuiz
                listQuiz={listQuiz}
                handleClickBtnEditQuiz={handleClickBtnEditQuiz}
                dataEdit={dataEdit}
                resetEditData={resetEditData}
                handleClickBtnDeleteQuiz={handleClickBtnDeleteQuiz}
              />
              {/* <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        /> */}
              <ModalEditQuiz
                listQuiz={listQuiz}
                dataEdit={dataEdit}
                show={showModalEditQuiz}
                setShow={setShowModalEditQuiz}
                resetEditData={resetEditData}
                fetchQuiz={fetchQuiz}
              />
              <ModalDeleteQuiz
                show={showModalDeleteQuiz}
                setShow={setShowModalDeleteQuiz}
                dataDeleteQuiz={dataDeleteQuiz}
                fetchQuiz={fetchQuiz}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Update Content Quizzes</Accordion.Header>
          <Accordion.Body>
            <QuizQA />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Asign to Answer</Accordion.Header>
          <Accordion.Body>
            <AssignQuiz />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default ManageQuiz;
