const container = require("../../containerConfig");

const TestInstanceService = container.resolve("TestInstanceService");

exports.CreateTestInstance = async (req) => {
   await TestInstanceService.createTestInstance(req);
};

exports.UpdateTestInstance = async (req) => {
 await TestInstanceService.UpdateTestInstance(req);
};

exports.GetAllTestInstances = async () => {
  const result = await TestInstanceService.GetAllTestInstances();
  return result;
};

exports.GetTestInstanceById = async (id) => {
  const result = await TestInstanceService.GetTestInstanceById(id);
  return result;
};

exports.DeleteTestInstance = async (id) => {
  await TestInstanceService.DeleteTestInstance(id);
};
