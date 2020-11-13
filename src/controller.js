// Boilerplate controller, should you ever need it.

let app = require('express')(),
  fs = require('fs'),
  https = require('https'),
  http = require('http');

let context,
  config,
  PORT,
  LOCAL,
  PRIVATE,
  httpsServer,
  HEALTHCHECK = "/admin/healthcheck";

module.exports.init = function(mainContext) {
  context = mainContext;
  config = context.config;
  dbManager = context.dbManager;
  encrypter = context.encrypter;

  PORT = parseInt(config.PORT, 10) || 8000;
  LOCAL = config.LOCAL || false;
  PRIVATE = config.PRIVATE || false;


  if (config.HEALTHCHECK) HEALTHCHECK = config.HEALTHCHECK;

  // if you want an HTTPS cert
  if (!LOCAL) {
    if (PRIVATE) {
      var privateKey = fs.readFileSync('/etc/node/privkey1.pem');
      var certificate = fs.readFileSync('/etc/node/cert1.pem');
  
      httpsServer = https.createServer({
        key: privateKey,
        cert: certificate
      }, app);

    } else {
      httpsServer = https.createServer({}, app);
    }
    
  }


  app.use(rawBodyParser);

  app.get('/', function (req, res) {
      // STUB
      res.send('boop');
  });

  app.all('*', function(req, res) {
    res.end('Default Hello');
  });

}

module.exports.listen = function(callback) {
  if (!LOCAL) {
    httpsServer.listen(PORT);
    context.server = httpsServer;
    console.log(`Listening on port ${PORT}...`);
    callback();
  } else {
    let server = app.listen(PORT, () => {
      context.server = server;
      console.log(`Listening on port ${PORT}...`);
      callback();
    });
  }

};

function rawBodyParser(req, res, next) {
  var data = '';
  req.setEncoding('utf8');

  req.on('data', function(chunk) {
    data += chunk;
  });

  req.on('end', function() {
    req.rawBody = data;
    next();
  });

}
