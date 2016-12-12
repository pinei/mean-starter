var assert = require('assert');

var db = require('../config/database')

var BeerStyle = require('../models/beer').BeerStyle;
var Beer = require('../models/beer').Beer;
var Brewer = require('../models/beer').Brewer;


describe('Beer Model', function() {

	before(function() {
		db.url = 'mongodb://localhost/mean-starter-test';
	    db.connect();

	    Beer.remove({})
	    Brewer.remove({})
	    BeerStyle.remove({})
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

		beer.save()
		ale.save()
		lager.save()


/*
        Company.create(sample, function (err, result) {
            if (err) throw err;
            Company.findOne({ name: 'AMBEV' }, function (err, result) {
                if (err) throw err;

                assert.equal(result.name, sample.name);
                assert.equal(result.website, sample.website);

                Company.findByIdAndRemove(result._id, function (err, result) {
                    if (err) throw err;
                    done();
                });
            });
        });
*/
		
	});
});