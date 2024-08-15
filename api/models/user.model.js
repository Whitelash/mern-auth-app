import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},
{
    timestamps: true //time of creation and update
});

// Create a user model from the schema
const User = mongoose.model('User', userSchema);

export default User; //export the User model, it can be used anywhere else in the project