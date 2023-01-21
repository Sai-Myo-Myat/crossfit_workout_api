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

module.exports = {
    getAllWorkouts,
    createNewWorkout
}