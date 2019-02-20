var express = require('express');
var router = express.Router();
var debug = require('debug')('api-reverse_string')

router.get('/reverse_string', function(req, res, next) {
	debug(req.query)
	for (var i = 100000; i>=0; --i) {
		debug(i)
	}
	res.json({reverse_string: reverseString(req.query.str)})	
});

function reverseString(str){
	return str.split("").reverse().join("");
}

module.exports = router;
