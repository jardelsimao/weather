describe('aurum', function () {

	var openWMapService;

	beforeEach(angular.mock.module('services'));

	beforeEach(inject(function(_openWMapService_) {
	    openWMapService = _openWMapService_;
	}));

	it('services', function() {
    	expect(openWMapService).toBeDefined();
  	});

  	describe('methods', function(){

  		it('checando methods', function() {
	    	expect(openWMapService.getWeatherFromCitySearchByName).toBeDefined();
	  	});

	  	it('checando methods', function() {
	    	expect(openWMapService.getForecast5FromCitySearchByName).toBeDefined();
	  	});
	  	
	  	it('checando methods', function() {
	    	expect(openWMapService.getWeatherFromLocationByCoordinates).toBeDefined();
	  	});

	  	it('checando methods', function() {
	    	expect(openWMapService.getForecast5FromLocationByCoordinates).toBeDefined();
	  	});
  	})

});