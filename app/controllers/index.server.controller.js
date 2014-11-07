exports.render = function(req, res) {
    if (!req.session.lastVisit) {
        req.session.lastVisit = new Date();
    }

    res.render('pages/index', {
        userFullName: req.user ? req.user.fullName : '',
        messages: req.flash('error') || req.flash('info'),
    });
};
