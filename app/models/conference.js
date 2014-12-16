var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConferenceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    division: {
        type: String,
        enum: ['FBS', 'FCS', 'DII', 'DIII'],
        required: true,
    },
});

mongoose.model('Conference', ConferenceSchema);
