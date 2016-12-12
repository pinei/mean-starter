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
	    	type: db.Schema.ObjectId
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
		styles: [db.Schema.ObjectId],
		brewer: db.Schema.ObjectId
	},
	{ collection: 'beers'} );


module.exports.BeerStyle = db.model('BeerStyle', beerStyleSchema);
module.exports.Brewer = db.model('Brewer', brewerSchema);
module.exports.Beer = db.model('Beer', beerSchema);
