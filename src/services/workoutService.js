const workout = require('../database/workout');
const {v4: uuid} = require('uuid');

const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = () => {
    return;
};

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
    }
    const createdWorkout = workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
};

const updateOneWorkout = () => {
    return;
};

const deleteOneWorkout = () => {
    return;
};
  
module.exports = {
getAllWorkouts,
getOneWorkout,
createNewWorkout,
updateOneWorkout,
deleteOneWorkout,
};