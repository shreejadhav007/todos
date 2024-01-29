const {mongoose, Schema} = require('mongoose');

const NoteSchema = new Schema({
    id:{
        type:Number,
        // unique:true
    },
    username:{
        type:String,
        require:true
    },
    note:{
        type:String, 
    },
    date:{
        type:String
    },       
    status:{
        type:Boolean,
        default:false
    },
    priority:{
        type:String
    }
})

const note = mongoose.model('notes',NoteSchema);

module.exports =  note;