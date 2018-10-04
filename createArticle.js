const log = require('./log');
let articles = require('./articles.json');
const ErrorObject = { code: 400, message: 'Invalid request' };

module.exports.createArticle = function createArticle(req, res, payload, cb) {
	if(payload.title != undefined && payload.text != undefined && payload.date != undefined && payload.author != undefined){
    	payload.id = Date.now();
        articles.push(payload);
    	log.log(req.url, payload);
    	cb(null, articles);
	}
	else
        cb(ErrorObject);
}