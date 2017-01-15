const logger = require('../logger')l;

const model = require('../model/beer');

var beerAPI = {
    list : function(req, res, next) {
        model.Beer.find()
            .select('_id nome')
            .exec()
            .then(function(beerList) {
                    res.json(beerList);
                    next();
                }, function(err) {
                    logger.error('Error while listing beers', err.stack);
                    res.status(500).json( { error: err.message });
                    next();
                } );
    },

    select : function(req, res, next) {
        var id = req.params.id;

        model.Beer.findById(id)
            .exec()
            .then(function(beer) {
                res.json(beer);
                next();
            }, function(err) {
                logger.error('Error while selecting beer', err.stack);
                res.status(500).json( { error: err.message });
                next();
            });
    },

    create : function(req, res, next) {
        var beer = req.body;

        model.Beer.create(beer)
            .then(function(beer) {
                res.status(200).send(beer);
            }, function(err) {
                logger.error('Error while creting beer', err.stack);
                res.status(500).json( { error: err.message });
                next();
            });
    },

    update : function(req, res, next) {
        var id = req.params.id;
        var beer = req.body;

        model.Beer.findByIdAndUpdate(id, beer, {new: true})
            .exec()
            .then(function(beer) {
                res.status(200).send(beer);
            }, function(err) {
                logger.error('Error while updating beer', err.stack);
                res.status(500).json( { error: err.message });
                next();
            });
    },

    remove : function (req, res, next) {
        var id = req.params.id;

        model.Beer.findByIdAndRemove(id)
            .exec()
            .then(function() {
                res.status(204).end();
            }, function(err) {
                logger.error('Error while removing beer', err.stack);
                res.status(500).json( { error: err.message });
                next();
            });
    }
};

var beerStyleAPI = {
    list : function(req, res, next) {
        model.BeerStyle.find()
            .select('_id nome')
            .exec()
            .then(function(beerStyleList) {
                    res.json(beerStyleList);
                    next();
                }, function(err) {
                    logger.error('Error while listing beer styles', err.stack);
                    res.status(500).json( { error: err.message });
                    next();
                } );
    },

    select : function(req, res, next) {
        var id = req.params.id;

        model.BeerStyle.findById(id)
            .exec()
            .then(function(beerStyle) {
                res.json(beerStyle);
                next();
            }, function(err) {
                logger.error('Error while selecting beer style', err.stack);
                res.status(500).json( { error: err.message });
                next();
            });
    },

    create : function(req, res, next) {
        var beerStyle = req.body;

        model.BeerStyle.create(beerStyle)
            .then(function(beerStyle) {
                res.status(200).send(beerStyle);
            }, function(err) {
                logger.error('Error while creting beer style', err.stack);
                res.status(500).json( { error: err.message });
                next();
            });
    },

    update : function(req, res, next) {
        var id = req.params.id;
        var beerStyle = req.body;

        model.BeerStyle.findByIdAndUpdate(id, beerStyle, {new: true})
            .exec()
            .then(function(beerStyle) {
                res.status(200).send(beerStyle);
            }, function(err) {
                logger.error('Error while updating beerStyle', err.stack);
                res.status(500).json( { error: err.message });
                next();
            });
    },

    remove : function (req, res, next) {
        var id = req.params.id;

        model.BeerStyle.findByIdAndRemove(id)
            .exec()
            .then(function() {
                res.status(204).end();
            }, function(err) {
                logger.error('Error while removing beer style', err.stack);
                res.status(500).json( { error: err.message });
                next();
            });
    }
};

exports.Beer = beerAPI;
exports.BeerStyle = beerStyleAPI;