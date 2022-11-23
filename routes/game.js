const express = require('express');
const router = express.Router();

router.get('/game/practice', (req, res) => {
    //retrieve classes from database and pass through as json
        res.render('practice', {
            layout: 'game',
            score: req.session.score,
            bestscore: req.session.bestscore
        })
});

router.post('/game/practice', (req, res) => {
    req.session.score = req.body.score
    req.session.bestscore = req.body.bestscore;
    res.redirect('#');
});

router.get('/game/test', (req, res) => {
    //retrieve classes from database and pass through as json
        res.render('test', {
            layout: 'index'
        })
});

module.exports = router;