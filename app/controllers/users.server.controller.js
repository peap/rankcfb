var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err){
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.list = function(req, res, next) {
    User.find({}, function(err, users){
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

exports.read = function(req, res, next) {
    res.json(req.user);
};

// middleware to attach User to request
exports.userById = function(req, res, next, id) {
    User.findOne(
        {_id: id},
        function(err, user) {
            console.log(err);
            if (err) {
                return next(err);
            } else {
                req.user = user;
                next();
            }
        }
    );
};
