var db = require('../config/database').api

const Company = db.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
    	type: String,
    	required: true
    },
    sector: String,
    logo_img : { email : String },
}, { collection: 'companies'} );

Company.statics = {
    findByName: function(name, callback) {
        this.find( { name: name }, callback );
    }
};

module.exports = db.model('Company', Company);
