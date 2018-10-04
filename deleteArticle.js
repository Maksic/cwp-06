const log = require('./log');
let articles = require('./articles.json');
const ErrorObject = { code: 400, message: 'Invalid request' };

module.exports.deleteArticle = function deleteArticle(req, res, payload, cb) {

    let ind = articles.findIndex(i => i.id == payload.id);
    if (ind != -1) {
        articles.splice(ind, 1);
        log.log(req.url, payload);
        cb(null, articles);
    }
    else {
        cb(ErrorObject);
    }
}