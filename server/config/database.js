var mongoose = require('mongoose');
var logger = require('./logger');

mongoose.Promise = Promise // ES6 Promises

var database = {
	uri: 'mongodb://localhost/mean-starter',
	options: { server: { socketOptions: { keepAlive: 1 } } },
	connect: function() {
		mongoose.connect(this.uri, this.options)
		    .connection
		    .on('error', function(err) { logger.error('Mongoose connection error', err) })
		    .on('disconnected', function() { logger.debug('MongoDB disconnected') } )
		    .once('open', function() { logger.debug('MongoDB connected') } );
	},
	disconnect: function() {
		mongoose.disconnect();
	},
	api: mongoose
}

module.exports = database