const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        minlength:[3,"Name must contain at least 3 characters"]
    },
    position:{
        type:String
    },
    status:[{
        type:Number,
        default:0,
        min:[-1,"Set to -1"], //indicates a player is sitting out
        max:[1,"Set to +1"]  //indicates a player is playing
    }],
},{timestamps:true})

const Player = mongoose.model("player",PlayerSchema)

module.exports = Player