"use strict";
angular.module("aurum", ["ui.router","ngMask","controllers","services"])

.config(function($stateProvider,$sceDelegateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');
   	$stateProvider
		.state("home", {
			url: "/home",
			controller: "HomeController",
			templateUrl: "js/views/home.html",
		});

})