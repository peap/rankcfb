var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatisticSchema = new Schema({
    name: String,
    source: String,
    subject: {
        type: String,
        enum: ['player', 'team'],
    },
    scope: {
        type: String,
        enum: ['total', 'average'],
    },
    units: {
        type: String,
        enum: ['yards', 'percentage', 'count'],
    },
});

mongoose.model('Statistic', StatisticSchema);
