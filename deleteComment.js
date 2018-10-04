const log = require('./log.js');
let articles = require('./articles.json');
const ErrorObject = { code: 400, message: 'Invalid request' };

module.exports.deleteComment = function deleteComment(req, res, payload, cb) {
    let index, indexOfComment;

    if ((index = articles.findIndex(i => i.id == payload.articleId)) != -1 &&
        (indexOfComment = articles[index].comments.findIndex(i => i.id == payload.id)) != -1) {
        
        if(payload.id != undefined && payload.articleId != undefined){
            articles[index].comments.splice(indexOfComment, 1);
            log.log(req.url, payload);
            cb(null, articles);
        }
        else cb(ErrorObject);

    }
    else cb(ErrorObject);
}