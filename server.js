var restify = require('restify');

var server = restify.createServer({
  name: 'heckler',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/ping/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

server.post('/send', function(req, res, next) {
  console.log(req.params);
  res.send(req.params);
  return next();
}

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
