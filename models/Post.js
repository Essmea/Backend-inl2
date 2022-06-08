const mongoose = require('mongoose');

//Post Data 
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

//Export Schema
module.exports = mongoose.model('Posts', PostSchema) 