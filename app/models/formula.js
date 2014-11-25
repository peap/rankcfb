var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormulaSchema = new Schema({
    name: String,
    description: String,
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    formula: String,
});

mongoose.model('Formula', FormulaSchema);
