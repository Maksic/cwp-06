let logfileJSON = require('./logfileJSON.json');
let articles = require('./articles.json');
const ErrorObject = { code: 400, message: 'Invalid request' };

module.exports.logJSON = function logJSON(req, res, payload, cb) {
	if(JSON.stringify(logfileJSON) != undefined)
    	cb(null, logfileJSON);
    else 
    	cb(null, ErrorObject);
};