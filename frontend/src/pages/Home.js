import {useEffect} from 'react'
import WorkoutDetails from "../components/workoutDetails.js"
import WorkoutForm from '../components/workoutForm.js';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext.js';


const Home = ()=> {
    //const [workouts, setWorkouts] = useState(null);

    const {workouts, dispatch} = useWorkoutsContext()
    useEffect(()=>{
       const fetchWorkouts = async()=>{
          const response = await fetch('/api/workouts');

          const json = await response.json();

          if(response.ok){
            //setWorkouts(json);
            dispatch({type : 'SET_WORKOUTS', payload: json})
          }
       }
       fetchWorkouts()
    }, [dispatch]) 
 return (
    <div className="home">
    <div className="workouts">
        {workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
    </div>
    <WorkoutForm/>
    </div>
 )
}

export default Home;