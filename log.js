const fs = require('fs');
let logfileJSON = require('./logfileJSON.json');
const ErrorObject = { code: 400, message: 'Invalid request' };

module.exports.log=function log(url, data) {
    const currentDate = new Date();

    if(JSON.stringify(data) != undefined)
    	body = JSON.stringify(data)
    else 
    	body = "Empty body"

    fs.appendFileSync("logfile.log", "Date: " + currentDate + "\n" + "Url: " + url + "\n" + "Body: " + body + "\n" + "=============================================================== \n" );

    let news = {
    	Date: currentDate,
    	Url: url,
    	Body: data
    };
		logfileJSON.push(news);
		require('fs').createWriteStream('logfileJSON.json').write(JSON.stringify(logfileJSON)); 
}
