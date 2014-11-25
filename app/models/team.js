var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    school: String,
    mascot: String,
    city: String,
    state: String,
    conference: {
        type: Schema.ObjectId,
        ref: 'Conference',
    },
});

TeamSchema.virtual('name').get(function(){
    return this.school + ' ' + this.mascot;
});

TeamSchema.virtual('location').get(function(){
    return this.city + ', ' + this.state;
});

mongoose.model('Team', TeamSchema);
