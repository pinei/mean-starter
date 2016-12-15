var db = require('../config/database').api

var beerStyleDef = {
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
  },
  ancestors : [{
  	type: db.Schema.Types.ObjectId,
  	ref: 'BeerStyle'
  }]
};

var beerStyleSchema = new db.Schema(beerStyleDef,	{ collection: 'beerStyles'} );

beerStyleSchema.statics = {
    findByName: function(name, callback) {
        this.find( { name: name }, callback );
    }
};

var brewerDef = {
		name: {
			type: String,
			required: true
		},
		countryCode: {
			type: String,
			required: true
		}
};

var brewerSchema = new db.Schema(brewerDef,	{ collection: 'brewers'} );

var beerDef = {
	name: {
		type: String,
		required: true
	},
	styles: [
		// reusing schema definition
		beerStyleDef
	],
	brewer: { type: db.Schema.Types.ObjectId, ref: 'Brewer' },
	stars: { type: Number },
	votes: { type: Number }
};

var beerSchema = new db.Schema(beerDef,	{ collection: 'beers'});

exports.BeerStyle = db.model('BeerStyle', beerStyleSchema);
exports.Brewer = db.model('Brewer', brewerSchema);
exports.Beer = db.model('Beer', beerSchema);
