var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    /*console.log(req.cookies);
    console.log(req.session);
    req.session.username = 'jk';
    req.session.mail = 'mail';

    res.cookie('name', 'jk', {
        maxAge: 10000
    });
    res.cookie('id', '123', {
        maxAge: 10000,
        httpOnly: true
    });*/
    res.render('index', {
        title: 'Express',
        username: req.session.username,
        email: req.session.email
    });
});

router.post('/', function (req, res) {
    req.session.username = req.body.username;
    req.session.email = req.body.email;
    res.redirect('/');
});

module.exports = router;
