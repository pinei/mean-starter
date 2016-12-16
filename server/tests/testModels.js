var assert = require('assert');
var async = require('async');
var logger = require('../config/logger')
var db = require('../config/database')

var BeerStyle = require('../models/beer').BeerStyle;
var Beer = require('../models/beer').Beer;
var Brewer = require('../models/beer').Brewer;


describe('Beer Model', function() {

	before(function(done) {
		this.timeout(5000);

		db.uri = 'mongodb://localhost/mean-starter-test';
	    db.connect();

	    async.eachSeries([Beer, Brewer, BeerStyle], function(item, callback) {
	    	logger.debug('[test] Cleaning collection ' + item.modelName);
	    	item.remove(function(err, obj) {
	    		if (!err)
	    			logger.debug('[test] Items cleaned: ' + obj.result.n);
	    		callback(err);
	    	});
	    }, function(err) {
					assert(err == null, err);
					done();
	    });
	});

	after(function() {
	   db.disconnect();
	});

	it('should create beer styles', function(done) {
		var beer = new BeerStyle({
			name: 'Beer',
			description: 'An alcoholic drink made from yeast-fermented malt flavored with hops'
		});
		beer.kindOf = beer._id;
		beer.ancestors = [ beer._id ];

		var ale = new BeerStyle({
			name: 'Ale',
			description: 'A type of beer brewed using a warm fermentation method, resulting in a sweet, full-bodied and fruity taste.'
		});
		ale.kindOf = beer._id;
		ale.ancestors = [ beer._id, ale._id ];

		var lager = new BeerStyle({
			name: 'Lager',
			description: 'A type of beer that is conditioned at low temperatures, normally at the brewery.'
		});
		lager.kindOf = beer._id
		lager.ancestors = [ beer._id, lager._id ];

		async.each([beer, ale, lager], function(item, callback) {
			// for each item
			item.save(function(err) {
				logger.debug('[test] Item ' + item.name + ' was saved');
				callback(err);
			});
		}, function(err) {
			logger.debug('[test] Done');
			assert(err == null, err);
			done();
		});
		
	});
});