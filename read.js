const log = require('./log');
let articles = require('./articles.json');
const ErrorObject = { code: 400, message: 'Invalid request' };

module.exports.read = function read(req, res, payload, cb) {
	let article = articles.filter((item, index) => {
  		return ++index == payload.id;
	});

	if(payload.id > articles.length || payload.id < 0)
		cb(ErrorObject)

    if (article != undefined)
    {
        log.log(req.url, payload);
        cb(null, article);

    }
    else
        cb("Error");
}