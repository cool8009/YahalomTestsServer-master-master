const container = require("../../containerConfig");

const QuestionService = container.resolve("QuestionService");

exports.CreateQuestion = async (req) => {
   await QuestionService.CreateQuestion(req);
};

exports.UpdateQuestion = async (req) => {
  await QuestionService.UpdateQuestion(req);
};

exports.GetAllQuestions = async () => {
  const result = await QuestionService.GetAllQuestions();
  return result;
};

exports.GetQuestionById = async (id) => {
  const result = await QuestionService.GetQuestionById(id);
  return result;
};
exports.GetQuestionByTestId = async (testid) => {
  const result = await QuestionService.GetQuestionByTestId(testid);
  return result;
};

exports.DeleteQuestion = async (id) => {
  await QuestionService.DeleteQuestion(id);
};
