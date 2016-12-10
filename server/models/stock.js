var db = require('../config/database').api

const Stock = db.Schema({
    symbol: {
        type: String,
        required: true
    },
    company: {
    	type: ObjectId,
    	required: true
    },
}, { collection: 'stocks'} );

Stock.statics = {
    findBySymbol: function(symbol, callback) {
        this.find( { symbol: symbol }, callback );
    }
};

module.exports = db.model('Stock', Stock);
