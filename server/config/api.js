var
    beer = require('../api/beer');

module.exports = function(router) {
	router.get('/beers', beer.Beer.list);
	router.get('/beers/:id', beer.Beer.select);
	router.delete('/beers/:id', beer.Beer.remove);
	router.post('/beers', beer.Beer.create);
	router.put('/beers/:id', beer.Beer.update);

	router.get('/beerStyles', beer.BeerStyles.list);
	router.get('/beerStyles/:id', beer.BeerStyles.select);
	router.delete('/beerStyles/:id', beer.BeerStyles.remove);
	router.post('/beerStyles', beer.BeerStyles.create);
	router.put('/beerStyles/:id', beer.BeerStyles.update);

	return router;
};