var express = require("express");
var app = express();

var Bliss = new require('bliss');
var bliss = new Bliss();
app.engine('.bliss',function(path,options,fn){
    fn(null,bliss.render(path, options));
});

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.set('view options', { pretty: true });
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

require("./routes/index")(app);

var server = app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);