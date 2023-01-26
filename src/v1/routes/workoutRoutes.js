const express = require('express');
const { route } = require('.');

const router = express.Router();
const workoutController = require('../../controllers/workoutController');
const recordController = require('../../controllers/recordController');

router.get('/',workoutController.getAllWorkouts)

router.get('/:workoutId',workoutController.getOneWorkout)

router.get('/:workoutId/records', recordController.getRecordForWorkout)

router.post('/',workoutController.createNewWorkout)

router.patch('/:workoutId',workoutController.updateOneWorkout)

router.delete('/:workoutId',workoutController.deleteOneWorkout)

module.exports = router;