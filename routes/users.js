const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next) => {
    res.send("REGISTER");
});

router.post('/auth', (req, res, next) => {
    res.send("AUTH");
});

router.get('/profile', (req, res, next) => {
    res.send("PROFILE");
});


module.exports = router;