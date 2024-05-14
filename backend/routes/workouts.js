import express from "express"

import Workout from "../models/Workout.js"

const router = express.Router();

//get all workouts
router.get("/", (req,res)=>{
    res.json({msg:"Get All the workouts"});
});

//get single workout
router.get("/:id", (req,res)=>{
    res.json({msg:"Get a single workout"});
});

//post a new workout
router.post("/", async (req,res)=>{
    const{title, load, reps} = req.body 
    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    }catch(error){
       res.status(400).json({error: error.message});
    }
});

//delete a workout
router.delete("/:id", (req,res)=>{
    res.send("Delete a workout");
});

//update a workout
router.patch("/:id", (req,res)=>{
    res.send("Update     a workout")
})

 export default router;