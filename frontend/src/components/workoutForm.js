// we need to create a form with three input fields 
// so that user can input the details of the new workout created 

import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = ()=>{
    const {dispatch } = useWorkoutsContext()
    const[title, setTitle] = useState('')
    const[load, setLoad] = useState('')
    const[reps, setReps] = useState('')
    const[error, setError] = useState(null)
    
    const handleSubmit = async (e)=>{
        e.preventDefault()

        const workout = {title, load, reps};

        const response = await fetch('/api/workouts',{
            method : 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type' : 'application/json'
            }
            
        })
        const json = await response.json();

        if(!response.ok){
            setError(json.error);
        }
        else{
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log('new workout added !', json);
            dispatch({type:'CREATE_WORKOUT', payload: json});
        }
    }

    return (
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new workout</h3>
        <label>Excercise Title:</label>
        <input 
         type="text"
         onChange={(e)=> setTitle(e.target.value)}
         value={title}
        ></input>

        <label>Load(in Kgs):</label>
        <input 
         type="number"
         onChange={(e)=> setLoad(e.target.value)}
         value={load}
        ></input>

        <label>Reps:</label>
        <input 
         type="number"
         onChange={(e)=> setReps(e.target.value)}
         value={reps}
        ></input>

        <button>Add Workout </button>
        {error && <div className= "error">{error}</div>}
      </form>
    )
}


export default WorkoutForm;