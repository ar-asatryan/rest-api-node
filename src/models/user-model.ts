import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name..."]
    },
    username: {
        type: String,
        required: [true, "Please add a username..."],
        Unique: true
    },
    email: {
        type: String,
        required: [true, "Please add an email..."],
        Unique: true
    },
    phone: {
        type: Number,
        required: [true, "Please add phone number..."],
        Unique: true
    },
    website: {
        type: String,
        required: [true, "Please add website..."],
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)