"use strict";
angular.module("controllers", [])
.controller("HomeController", function($scope, openWMapService){

	var _appid = "14e96ab94a0b212154b9e64dd3d43449";
	$scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

	$scope.getIconImageUrl = function(iconName) {
      	return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

    $scope.convertDateUtc = function(unix_tm) {

        var dt = new Date(unix_tm * 1000);
        var formattedDate = ('0' + dt.getDate()).slice(-2) + '/' + ('0' + (dt.getMonth() + 1)).slice(-2) + '/' + dt.getFullYear() + ' | ' + ('0' + dt.getHours()).slice(-2) + ':' + ('0' + dt.getMinutes()).slice(-2);
        return formattedDate;
        
    };

    $scope.convertDateUtcForecast = function(unix_tm) {

        var dt = new Date(unix_tm * 1000);
        var formattedDate = ('0' + dt.getDate()).slice(-2) + '/' + ('0' + (dt.getMonth() + 1)).slice(-2);
        return formattedDate;
        
    };

    openWMapService.getWeatherFromLocationByCoordinates({
        lat:"-27.6",
        lon:"-48.55",
        appid:_appid,
        units:"metric",
        lang:'pt'
    }).then(function(_data){
        $scope.NameByDay = _data;
        $scope.unit = 'metric';
    });

    openWMapService.getForecast5FromLocationByCoordinates({
        lat:"-27.6",
        lon:"-48.55",
        appid:_appid,
        units:"metric",
        lang:'pt'
    }).then(function(_data){
        $scope.list = _data.data.list;
    });

	$scope.byCity = function(city){

        var city_name = $scope.city.name;
        var unit = $scope.city.unit;

        if( unit == null){
            var unit = 'metric';
        }

		openWMapService.getWeatherFromCitySearchByName({
	        q:city_name,
	        appid:_appid,
	        units: unit,
            lang:'pt'
	    }).then(function(_data){
	    	$scope.NameByDay = _data;
            $scope.unit = unit;
	        console.info("weather from city by name", $scope.NameByDay);
	    });

        openWMapService.getForecast5FromCitySearchByName({
            q:city_name,
            appid:_appid,
            lang:'pt'
        }).then(function(_data){
            $scope.list = _data.data.list;
        });

	};

});