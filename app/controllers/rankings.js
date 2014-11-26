var mongoose = require('mongoose');
var Ranking = mongoose.model('Ranking');

var getErrorMessage = function(err) {
    if (err.errors) {
        var msg = '';
        var errCount = 0;
        for (var errName in err.errors) {
            var errMsg = err.errors[errName].message;
            if (errMsg) {
                errCount++;
                msg = errMsg;
            }
        }
        return 'There were ' + errCount + ' errors, including this one: ' + msg;
    } else {
        return 'Unknown server error';
    }
};

exports.create = function(req, res) {
    var ranking = new Ranking(req.body);
    ranking.user = req.user;
    ranking.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err),
            });
        } else {
            res.json(ranking);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.ranking);
};

exports.update = function(req, res) {
    var ranking = req.ranking;
    ranking.name = req.body.name;
    ranking.description = req.body.description;
    ranking.formula = req.body.formula;
    ranking.published = req.body.published;
    ranking.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err),
            });
        } else {
            res.json(ranking);
        }
    });
};

exports.delete = function(req, res) {
    var ranking = req.ranking;
    ranking.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err),
            });
        } else {
            res.json(ranking);
        }
    });
};

exports.list = function(req, res) {
    Ranking.find({published: true})
        .sort('votes name')
        .populate('user', 'username fullName')
        .exec(function(err, rankings) {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err),
                });
            } else {
                res.json(rankings);
            }
        });
};

exports.vote = function(req, res) {
    var ranking = req.ranking;
    if (req.body.vote === '+') {
        ranking.votes += 1;
    }
    if (req.body.vote === '-') {
        ranking.votes -= 1;
    }
    ranking.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err),
            });
        } else {
            res.json(ranking);
        }
    });
};

// middleware
exports.rankingById = function(req, res, next, id) {
    Ranking.findById(id)
        .populate('user', 'username fullName')
        .exec(function(err, ranking) {
            if (err) {
                return next(err);
            }
            if (!ranking) {
                return next(new Error('Failed to load ranking ' + id + '.'));
            }
            req.ranking = ranking;
            next();
        });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.ranking.user.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized.'
        });
    }
    next();
};
