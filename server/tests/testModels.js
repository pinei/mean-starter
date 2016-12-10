var assert = require('assert');

var db = require('../config/database')
var Company = require('../models/company');

describe('Company', function() {

	before(function() {
	    db.connect();
	});

	after(function() {
	   db.api.disconnect();
	});

	it('should create a valid company', function(done) {
		var sample = {name : 'AMBEV', website: 'www.ambev.com.br'};

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
		
	});
});