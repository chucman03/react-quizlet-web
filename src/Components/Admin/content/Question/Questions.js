import { useState } from "react";
import Select from "react-select";
import { TiPlus, TiMinus } from "react-icons/ti";
import { PiPlusCircleLight, PiMinusCircleLight } from "react-icons/pi";
import { RiImageAddFill } from "react-icons/ri";

const Questions = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [questions, setQuestions] = useState({});

  return (
    <div className="questions-container">
      <div className="title"></div>
      <hr />
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label className="mb-2">Select Quiz:</label>
          <Select
            defaultValue={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
            // className="form-control "
          />
        </div>
        <div className="mt-3 mb-2"> Add Question:</div>
        <div>
          <div className="question-content">
            <div className="form-floating description">
              <input
                type="type"
                class="form-control"
                placeholder="name@example.com"
              />
              <label>Description</label>
            </div>
            <div className="group-upload">
              <label>
                <RiImageAddFill className="label-upload" />
              </label>
              <input type="file" hidden />
              <span>0 file is uploaded</span>
            </div>
            <div className="btn-add">
              <span>
                <TiPlus className="icon-add" />
              </span>
              <span>
                <TiMinus className="icon-remove" />
              </span>
              <input type="file" />
            </div>
          </div>
          <div className="answers-content">
            <input className="form-check-input iscorrect" type="checkbox" />
            <div className="form-floating answer-name">
              <input
                type="type"
                className="form-control"
                placeholder="name@example.com"
              />
              <label>answer 1</label>
            </div>
            <div className="btn-group">
              <span>
                <PiPlusCircleLight className="icon-add" />
              </span>
              <span>
                <PiMinusCircleLight className="icon-remove" />
              </span>
              <input type="file" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
