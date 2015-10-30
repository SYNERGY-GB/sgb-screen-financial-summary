(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-financial-summary', ['megazord'])
    .controller('sgb-screen-financial-summary-controller', ['$scope', '_router', '_screen', '_screenParams', '_data', function ($scope, _router, _screen, _screenParams, _data) {
        _screen.initialize($scope, _screenParams);

        $scope.data = _data;
        $scope.goToAccount = function(account){
//Nothing to do but fire the event
			_router.fireEvent({
				name: 'goToAccount',
				params: {
					account: account
				}
			});
		};

		$scope.goToCards = function(cards){
			_router.fireEvent({
				name: 'goToCards',
				params: {
					cards: cards
				}
			});
		};

        //Add your controller logic here.
    }]);

},{}]},{},[1]);
