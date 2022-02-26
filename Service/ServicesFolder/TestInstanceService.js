const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/quizzerdb.db'
  });
  
const TestInstances  = require("../../models/TestInstances")(sequelize, Sequelize.DataTypes);

module.exports = class TestInstancesService {
    
    async createTestInstances(testInstances) {
        
        await TestInstances.create(testInstances)
            .then(result =>
                console.log("TestInstances by " + result.TestInstancesId + " id created"))
            .catch(err =>
                console.log(err));                      
    }

    async UpdateTestInstances(newTestInstances) {
        await TestInstances.update({Email: newTestInstances.Email , FirstName: newTestInstances.FirstName,
            Grade: newTestInstances.Grade , LastName: newTestInstances.LastName}, {
            where: {
                TestInstancesId: newTestInstances.TestInstancesId
            }})
        .then(result =>
            console.log("TestInstances by " + result.TestInstancesId + " id update"))
        .catch(err =>
            console.log(err));             
    }      

    async GetAllTestInstances() {
        return TestInstances.findAll().catch((err) => {console.log(err)});               
    }

    async GetTestInstancesById(id) {
        const result = TestInstances.findOne({ 
            where: {
                TestInstancesId: id
        }})
        .catch((err) => {
            console.log(err)
        });
        return result;  
    }

    async DeleteTestInstances(Id) {
        await TestInstances.destroy({
            where: {
                TestInstancesId: Id
            }}) 
            .then(result =>
                console.log("test by " + result.TestInstancesId + " id deleted"))
            .catch(err =>
                console.log(err));           
    }      
}