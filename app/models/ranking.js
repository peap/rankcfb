var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RankingSchema = new Schema({
    name: String,
    description: String,
    formula: String,
    published: Boolean,
    votes: {
        type: Number,
        default: 0,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
});

mongoose.model('Ranking', RankingSchema);
