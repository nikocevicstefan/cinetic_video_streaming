const mongoose = require('mongoose');

//Defining a schema
const Schema = mongoose.Schema;
const FaqSchema = new Schema({
    question:{
        type: String,
        trim: true,
        required: true
    },
    answer:{
        type: String,
        trim: true,
        required: true
    }
})
module.exports = mongoose.model('Faq', FaqSchema);