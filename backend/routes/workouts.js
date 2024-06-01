import express from "express"
import {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} from "../controllers/workoutController.js";



const router = express.Router();

//get all workouts
router.get("/", getWorkouts);

//get single workout
router.get("/:id", getWorkout);

//post a new workout
router.post("/", createWorkout);    // to maintain code we have written the logics in controller and imported them over here

//delete a workout
router.delete("/:id",deleteWorkout);

//update a workout
router.patch("/:id", updateWorkout);

 export default router;