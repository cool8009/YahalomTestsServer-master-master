const express = require("express");
const router = express.Router();
const TestInstancessController = require("../../controller/Controllers").TestInstancesController;

router.post('/create', async function(req,res)  {
  await TestInstancessController.CreateTestInstances(req.body);
  res.status(200).send();
});

router.put('/Update', async function(req,res)  {
  await TestInstancessController.UpdateTestInstances(req.body);
  res.status(200).send();
}); 
 
router.get('/GetAll', async function(req,res)  {
  const result =  await TestInstancessController.GetAllTestInstancess();
  res.status(200).send(result);
});
 
router.get('/GetById/:id', async function(req,res)  {
  const result =  await TestInstancessController.GetTestInstancesById(req.params.id);
  res.status(200).send(result);
});
 
router.delete('/Delete/:id', async function(req,res)  {
  await TestInstancessController.DeleteTestInstances(req.params.id);
  res.status(200).send();
});


module.exports = router;