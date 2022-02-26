const container = require("../../containerConfig");

const TestService = container.resolve("TestService")

exports.CreateTest = async (req) => {
 await TestService.createTest(req);
};

exports.UpdateTest = async (req) => {
 await TestService.UpdateTest(req);
};

exports.GetAllTests = async () => {
  const result = await TestService.GetAllTests();
  return result;
};

exports.GetTestById = async (id) => {
  const result = await TestService.GetTestById(id);
  return result;
};

exports.DeleteTest = async (id) => {
  await TestService.DeleteTest(id);
};
