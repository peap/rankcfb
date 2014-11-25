var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatValSchema = new Schema({
    statistic: {
        type: Schema.ObjectId,
        ref: 'Statistic',
    },
    team: {
        type: Schema.ObjectId,
        ref: 'Team',
    },
    player: {
        type: Schema.ObjectId,
        ref: 'Player',
    },
    value: Number,
    rank: Number,
});

mongoose.model('StatVal', StatValSchema);
