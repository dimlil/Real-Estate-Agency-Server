import mongoose, { Schema } from "mongoose";

const HouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    propertyDescription: {
        type: String,
        required: true
    },
    availablePieces: {
        type: String,
        required: true
    },
    rentedAHome: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    Owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
export default mongoose.model('House', HouseSchema);