const DB = require('./db.json');
const {saveToDB} = require('./utils');

const getAllWorkouts = () => {
    return DB.workouts;
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyExit = DB.workouts.findIndex(workout => workout.name === newWorkout.name) > -1;
    if(isAlreadyExit){
        console.log("it's is already exit")
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDB(DB);
    console.log("created");
    return newWorkout;
}

const getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find(workout => workout.id === workoutId);
    if(!workout){
        return;
    }

    return workout;
}

const updateOneWorkout = (workoutId,body) => {
    const indexToUpdate = DB.workouts.findIndex(workout => workout.id === workoutId);
    if(indexToUpdate === -1) {
        return;
    }
    const updatedWorkout = {
        ...DB.workouts[indexToUpdate],
        ...body,
        updatedAt: new Date().toLocaleString()
    }
    DB.workouts[indexToUpdate] = updatedWorkout;
    saveToDB(DB);
    return updatedWorkout;
}

module.exports = {
    getAllWorkouts,
    createNewWorkout,
    getOneWorkout,
    updateOneWorkout
}