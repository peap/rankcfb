exports.render = function(req, res) {
    if (!req.session.lastVisit) {
        req.session.lastVisit = new Date();
    }

    res.render('index', {
        'title': 'RankCFB: interactive college football polling',
        'header': 'RankCFB',
        'userFullName': req.user ? req.user.fullName : '',
    });
};
