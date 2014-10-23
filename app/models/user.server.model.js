var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        index: true,
    },
    username: {
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        trim: false,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName){
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

UserSchema.set('toJSON', {virtuals: true});

mongoose.model('User', UserSchema);
