const log = require('./log.js');
let articles = require('./articles.json');
const ErrorObject = { code: 400, message: 'Invalid request' };

module.exports.createComment = function createComment(req, res, payload, cb) {
    let ind = articles.findIndex(i => i.id == payload.articleId);
    if (ind != -1) {

        if(payload.id != undefined && payload.articleId != undefined && payload.text != undefined && payload.date != undefined && payload.author != undefined){
            payload.id = Date.now();
            articles[ind].comments.push(payload);
            log.log(req.url, payload);
            cb(null, articles);
        }
        else cb(ErrorObject);
        
    }
    else cb(ErrorObject);
}