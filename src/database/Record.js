const DB = require('./db.json');

const getRecordForWorkout = (workoutId) => {
    try{
        const record = DB.records.find(record => record.workout === workoutId);

        if(!record){
            throw {
                status: 400,
                message: `cat't find workout with id: ${workoutId}`
            }
        }
        return record;
    }catch(error){
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }
    }
}

module.exports = {
    getRecordForWorkout
}