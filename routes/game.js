const express = require('express');
const router = express.Router();

router.get('/game/practice', (req, res) => {
    //retrieve classes from database and pass through as json
        res.render('practice', {
            layout: 'index'
        })
});

router.get('/game/test', (req, res) => {
    //retrieve classes from database and pass through as json
        res.render('test', {
            layout: 'index'
        })
});

module.exports = router;