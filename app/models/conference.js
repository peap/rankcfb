var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConferenceSchema = new Schema({
    name: String,
    division: {
        type: String,
        enum: ['FBS', 'FCS', 'DII', 'DIII'],
    },
});

mongoose.model('Conference', ConferenceSchema);
