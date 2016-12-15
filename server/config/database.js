var mongoose = require('mongoose');
var logger = require('./logger');

var database = {
	uri: 'mongodb://localhost/mean-starter',
	options: { server: { socketOptions: { keepAlive: 1 } } },
	connect: function() {
		mongoose.connect(this.url, this.options)
		    .connection
		    .on('error', function(err) { logger.error('Mongoose connection error', err) })
		    .on('disconnected', function() { logger.debug('MongoDB disconnected') } )
		    .once('open', function() { logger.debug('MongoDB connected') } );
	},
	disconnect: function() {
		mongoose.disconnect(function() { logger.debug('MongoDB disconnected (2)') } )
	},
	api: mongoose
}

module.exports = database