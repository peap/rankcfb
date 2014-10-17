exports.render = function(req, res) {
    res.render('index', {
        'title': 'RankCFB: interactive college football polling',
        'header': 'RankCFB',
    });
};
