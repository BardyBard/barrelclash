const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', {
    layout: 'index',
    bestscore: req.session.bestscore
   });
});

//make wildcard request to send error for non existing pages
router.get('*', (req, res) => {
  res.status(404).render('error', {
    layout: 'index'
  });
});

module.exports = router;