var needle = require('needle');
var cheerio = require('cheerio');
var fs = require('fs');


module.exports.getTextOlx = function(url, filename){

needle.get(url, function(err,res){
	if(err) throw(err);

	filename += ".txt";
	var $ = cheerio.load(res.body);
	var geoUrl = $(".clr p");
	geoUrl.each(function(i,vale){
		fs.appendFileSync(filename, url + "\n" + $(vale).text() + "\n\n");
	});
});

};



