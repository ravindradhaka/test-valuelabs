var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add', function(req, res, next) {
    const first = req.query.first;
    const second = req.query.second;
    if(first && second) {
        const result = Number(first) + Number(second);
        console.log("result")
        return res.send({statusCode: 200, result: result})
    } else {
        return res.send("invalid number")
    }
});

module.exports = router;
