var db = require('../config/database').api

var beerStyleSchema = new db.Schema({
	    name: {
	        type: String,
	        required: true
	    },
	    description: {
	    	type: String,
	    	required: true
	    },
	    kindOf : {
	    	type:  db.Schema.Types.ObjectId,
	    	ref: 'BeerStyle'
	    }
	},
	{ collection: 'beerStyles'} );

beerStyleSchema.statics = {
    findByName: function(name, callback) {
        this.find( { name: name }, callback );
    }
};

var brewerSchema = new db.Schema({
		name: {
			type: String,
			required: true
		},
		countryCode: {
			type: String,
			required: true
		}
	},
	{ collection: 'brewers'} );

var beerSchema = new db.Schema({
		name: {
			type: String,
			required: true
		},
		styles: [ { type: db.Schema.Types.ObjectId, ref: 'BeerStyle' } ],
		brewer: {type: db.Schema.Types.ObjectId, ref: 'Brewer' },
		stars: { type: Number },
		votes: { type: Number }
	},
	{ collection: 'beers'});

exports.BeerStyle = db.model('BeerStyle', beerStyleSchema);
exports.Brewer = db.model('Brewer', brewerSchema);
exports.Beer = db.model('Beer', beerSchema);
