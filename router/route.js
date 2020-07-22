var express = require('express');
var router = express.Router();
const myController = require('../controllers/myController');


// GET /getTimeStories
router.get('/getTimeStories', (req,res) => {
    myController.getTimeStories(req,res);
});


module.exports = router;
