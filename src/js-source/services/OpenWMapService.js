"use strict";

angular.module("services", [])

.factory('openWMapService', function($http, openWMapServiceData) {

	var openWMapService = {};

	openWMapService.getWeatherFromCitySearchByName = function (_params) {
            var searchData = openWMapServiceData.getNew("citySearchByName", _params);
            return $http({
                method: 'GET',
                url: searchData.url,
                params: searchData.object,
            });
        };

    openWMapService.getWeatherFromLocationByCoordinates = function (_params) {
        var searchData = openWMapServiceData.getNew("locationByCoordinates", _params);
        return $http({
            method: 'GET',
            url: searchData.url,
            params: searchData.object,
        });
    };

    openWMapService.getForecast5FromCitySearchByName = function (_params) {
        var searchData = openWMapServiceData.getNew("cityForecast5SearchByName", _params);
        return $http({
            method: 'GET',
            url: searchData.url,
            params: searchData.object,
        });
    };

    openWMapService.getForecast5FromLocationByCoordinates = function (_params) {
        var searchData = openWMapServiceData.getNew("locationForecast5ByCoordinates", _params);
        return $http({
            method: 'GET',
            url: searchData.url,
            params: searchData.object,
        });
    };

    return openWMapService;

})

.service('openWMapServiceData', function () {
    this.getApiBaseUrl = function (_params) {
        return "http://api.openweathermap.org/data/2.5/";
    };

    this.fillDataInObjectByList = function (_object, _params, _list) {
        angular.forEach(_list, function (value, key) {
            if (angular.isDefined(_params[value])) {
                _object.object[value] = _params[value];
            }
        });
        return _object;
    };

    this.getNew = function (_type, _params) {

        var openWMapSearchData = {
            object: {
                appid: _params.appid,
            },
            url: "",
        };

        switch (_type) {
            case "citySearchByName":
                openWMapSearchData = this.fillDataInObjectByList(openWMapSearchData, _params, [
                    'q', 'lang', 'type', "units",
                ]);
                openWMapSearchData.url = this.getApiBaseUrl() + "weather";
                break;

            case "locationByCoordinates":
                openWMapSearchData = this.fillDataInObjectByList(openWMapSearchData, _params, [
                    'lat', 'lon', 'lang', "units",
                ]);
                openWMapSearchData.url = this.getApiBaseUrl() + "weather";
                break;

            case "cityForecast5SearchByName":
                openWMapSearchData = this.fillDataInObjectByList(openWMapSearchData, _params, [
                    'q', 'lang', 'type', "units",
                ]);
                openWMapSearchData.url = this.getApiBaseUrl() + "forecast";
                break;

            case "locationForecast5ByCoordinates":
                openWMapSearchData = this.fillDataInObjectByList(openWMapSearchData, _params, [
                    'lat', 'lon', 'lang', "units",
                ]);
                openWMapSearchData.url = this.getApiBaseUrl() + "forecast";
                break;
        }
        return openWMapSearchData;
    }});