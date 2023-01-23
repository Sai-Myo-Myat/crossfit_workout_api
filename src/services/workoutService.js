const workout = require('../database/workout');
const {v4: uuid} = require('uuid');

const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = (workoutId) => {
    const workout = workout.getOneWorkout(workoutId);
    return workout;
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

const updateOneWorkout = (workoutId,body) => {
    const updatedWorkout = workout.updateOneWorkout(workoutId,body);
    return updateOneWorkout;
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