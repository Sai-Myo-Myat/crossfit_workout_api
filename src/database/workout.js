const DB = require('./db.json');
const {saveToDB} = require('./utils');

const getAllWorkouts = (filterParams) => {
    try{
        let workouts = DB.workouts;
        if(filterParams){
            return DB.workouts.filter(workout => workout.mode.toLowerCase() === filterParams.toLowerCase())
        }
        return workouts;
    }catch(error){
        throw {status: 500, message: error}
    }
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyExit = DB.workouts.findIndex(workout => workout.name === newWorkout.name) > -1;
    if(isAlreadyExit){
        throw {
            status: 400,
            message: `Workout with the name '${newWorkout.name}' already exists`
        }
    }
    try{
        DB.workouts.push(newWorkout);
        saveToDB(DB);
        return newWorkout;
    }catch(error){
        throw {status: error?.status || 500, message: error?.message || error}
    }
}

const getOneWorkout = (workoutId) => {
    try{
        const workout = DB.workouts.find(workout => workout.id === workoutId);
        if(!workout){
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`
            }
        }
    return workout;
    }catch(error){
        throw {status: error?.status || 500, message: error?.message || error}
    }
}

const updateOneWorkout = (workoutId,body) => {
    try{
        const indexToUpdate = DB.workouts.findIndex(workout => workout.id === workoutId);
        if(indexToUpdate === -1) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`
            }
        }
        const updatedWorkout = {
            ...DB.workouts[indexToUpdate],
            ...body,
            updatedAt: new Date().toLocaleString()
        }
        DB.workouts[indexToUpdate] = updatedWorkout;
        saveToDB(DB);
        return updatedWorkout;
    }catch(error){
        throw {status: error?.status || 500, message: error?.message || error};
    }
}

const deleteOneWorkout = (workoutId) => {
    try{
        const indexToDelete = DB.workouts.findIndex(workout => workout.id === workoutId);
        if(indexToDelete === -1){
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`
            }
        }
        DB.workouts.splice(indexToDelete,1);
        saveToDB(DB);
    }catch(error){
        throw {status: error?.status || 500, message: error?.message || error};
    }
}

module.exports = {
    getAllWorkouts,
    createNewWorkout,
    getOneWorkout,
    updateOneWorkout,
    deleteOneWorkout
}