import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../serviecs/apiServices";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;

  useEffect(() => {
    fetchQuestion;
  }, [quizId]);

  const fetchQuestion = async () => {
    let res = await getDataQuiz(quizId);
  };
  return <div className="detail-quiz-container"></div>;
};
export default DetailQuiz;
