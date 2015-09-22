'use strict';

angular.module('sgb-screen-financial-summary', ['megazord'])
    .controller('sgb-screen-financial-summary-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams', function ($scope, _router, _screen, _screenParams, $stateParams) {
        _screen.initialize($scope, _screenParams);

        $scope.data = $stateParams.data;
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