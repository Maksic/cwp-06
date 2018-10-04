const log = require('./log');
let articles = require('./articles.json');
const ErrorObject = { code: 400, message: 'Invalid request' };

module.exports.updateArticle = function updateArticle(req, res, payload, cb) {

    let ind = articles.findIndex(i=>i.id == payload.id);

    if(ind!=-1){
    	if(payload.title != undefined && payload.text != undefined && payload.date != undefined && payload.author != undefined){
        	articles.splice(ind, 1, payload);
        	log.log(req.url, payload);
        	cb(null, articles[ind]);
    	}
    	else cb(ErrorObject);
    }
    else
        cb('err');
}