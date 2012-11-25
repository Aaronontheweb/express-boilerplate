var express = require("express");
var app = express();

var Bliss = new require('bliss');
var bliss = new Bliss();
app.engine('.bliss',function(path,options,fn){
    fn(null,bliss.render(path, options));
});

require("./routes/index")(app);

var server = app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);