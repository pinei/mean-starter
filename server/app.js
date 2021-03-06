var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('./config/logger');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var database = require('./config/database');

var google_authorizer = require('./config/auth-google')

class Application {
  constructor(express) {
    this.app = express || express();
  }

  setupViewEngine(engine) {
    engine = engine || 'ejs';
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', engine);

    return this;
  }

  setupLogger() {
    this.app.use(logger.middleware);

    return this;
  }

  setupParsers() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser());

    return this;
  }

  setupPublicFolder(urlPath, localDir) {
    this.app.use(urlPath, express.static(path.join(__dirname, localDir)));

    return this;    
  }

  setupFavicon(file) {
    file = file || 'favicon.ico'
    this.app.use(favicon(path.join(__dirname, file)));

    return this;
  }

  setupRoutes() {
    this.app.use('/', routes);
    this.app.use('/users', users);

    return this;  
  }

  setupAPIs() {
    // API
    var api = require('./config/api');
    this.app.use('/api', api(app.Router()));

    // makes it impossible for this API to be used by another site
    // self.api.use('/api', require('cors')());
    // self.api.use('/api', api)
  }

  setupErrorHandlers(env) {
    // catch 404 and forward to error handler
    this.app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    // development error handler
    // will print stacktrace
    if (env === 'development') {
      this.app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    this.app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });

    return this;
  }

  setupAuthorizer(authorizer) {
    authorizer(this.app)

    return this;
  }

  setupDatabase() {
    database.connect();

    return this;
  }


  setupServer(http, port) {
    port = port || 3000;
    this.app.set('port', port);
    this.server = http.createServer(this.app);

    return this;
  }

  startServer() {
    var port = this.app.get('port');
    var server = this.server;

    server.listen(port, function() {
      var addr = server.address();
      var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
      logger.info('Listening on ' + bind);      
    });

    return this;
  }
  
  onServer(event, callback) {
    this.server.on(event, callback);
  }

}

var app = new Application(express())
  .setupViewEngine('ejs')
  .setupLogger()
  .setupParsers()
  .setupPublicFolder('/', '../client/app')
  .setupPublicFolder('/', '../client/assets')
  .setupFavicon('../client/assets/images/favicon.ico')
  .setupAuthorizer(google_authorizer)
  // .setupAuthorizer(facebook_authorizer)
  .setupRoutes()
  .setupErrorHandlers(express().get('env'))
  .setupDatabase()


module.exports = app;
