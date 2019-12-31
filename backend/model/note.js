const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    id: Number,
    eventName: String,
    eventDescription:String,
    eventDate:String,
    eventTime:String,
    eventLocation:String,
    eventImg:String
});

module.exports = mongoose.model('notes', noteSchema);
