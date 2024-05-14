import mongoose from 'mongoose';

const workOutSchema = new mongoose.Schema({
        title:{
            type: String,
            required:true
        },

        reps:{
            type:Number,
            required:true
        },
        load: {
            type:Number,
            reuired:true
        }

    },
    { timestamps : true }
);

const Workout = mongoose.model('Workout', workOutSchema);

export default Workout;