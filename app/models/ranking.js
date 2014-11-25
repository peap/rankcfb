var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RankingSchema = new Schema({
    name: String,
    description: String,
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    formula: String,
});

mongoose.model('Ranking', RankingSchema);
