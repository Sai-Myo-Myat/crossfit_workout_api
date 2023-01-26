const recordService = require('../services/recordService');

const getRecordForWorkout = (req,res) => {
  try{
    const {params: {workoutId}} = req;
    if(!workoutId){
        res.status(400)
            .send({status: "FAILED", data: {error: `Parameter ':workoutId' can not be empty`}});
    }
    const record = recordService.getRecordForWorkout(workoutId);
    return record;
  }catch(error){
    res.status(error?.status)
        .send({status: "FAILED", data: {error: error?.message || error}})
  }

}

module.exports = {
    getRecordForWorkout
}