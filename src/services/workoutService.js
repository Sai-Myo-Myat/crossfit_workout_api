const workout = require('../database/workout');
const {v4: uuid} = require('uuid');

const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = (workoutId) => {
    try{
        const workout = workout.getOneWorkout(workoutId);
        return workout;
    }catch(error){
        throw(error);
    }
};

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
    }
    try{
        const createdWorkout = workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    }catch(error) {
        throw error;
    }
};

const updateOneWorkout = (workoutId,body) => {
    try{
        const updatedWorkout = workout.updateOneWorkout(workoutId,body);
        return updateOneWorkout;
    }catch(error){
        throw error;
    }
};

const deleteOneWorkout = (workoutId) => {
    try{
        workout.deleteOneWorkout(workoutId);
        return;
    }catch(error){
        throw error;
    }
};
  
module.exports = {
getAllWorkouts,
getOneWorkout,
createNewWorkout,
updateOneWorkout,
deleteOneWorkout,
};