var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    name: String,
    number: Number,
    year: {
        type: String,
        enum: ['freshman', 'sophomore', 'junior', 'senior'],
    },
    team: {
        type: Schema.ObjectId,
        ref: 'Team',
    },
});

mongoose.model('Player', PlayerSchema);
