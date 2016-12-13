var assert = require('assert');
var async = require('async');

var db = require('../config/database')

var BeerStyle = require('../models/beer').BeerStyle;
var Beer = require('../models/beer').Beer;
var Brewer = require('../models/beer').Brewer;


describe('Beer Model', function() {

	before(function(done) {
		db.url = 'mongodb://localhost/mean-starter-test';
	    db.connect();

	    async.eachSeries([Beer, Brewer, BeerStyle], function(item, callback) {
	    	item.remove({}, function(err) {
	    		if (err)
	    			callback(err);
	    		else
	    			callback();
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
			description: 'An alcoholic drink made from yeast-fermented malt flavored with hops'});
		var ale = new BeerStyle({
			name: 'Ale',
			description: 'A type of beer brewed using a warm fermentation method, resulting in a sweet, full-bodied and fruity taste.',
			kindOf: beer._id });
		var lager = new BeerStyle({
			name: 'Lager',
			description: 'A type of beer that is conditioned at low temperatures, normally at the brewery.',
			kindOf: beer._id });


		async.eachSeries([beer, ale, lager], function(item, callback) {
			// for each item
			item.save(function(err) {
				callback(err)
			});
		}, function(err) {
			assert(err == null, err);
			done();
		});
		
	});
});