var mongoose = require('mongoose');

var database = {
	url: 'mongodb://localhost/mean-starter',
	options: { server: { socketOptions: { keepAlive: 1 } } },
	connect: function() {
		mongoose.connect(this.url, this.options)
		    .connection
		    .on('error', console.log)
		    .on('disconnected', function() { console.log('MongoDB disconnected') } )
		    .once('open', function() { console.log('MongoDB connected') } );
	},
	api: mongoose
}

module.exports = database