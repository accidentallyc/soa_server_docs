window.app = angular.module("soa",["ngRoute"])
	.config([
		'$locationProvider',
		'$routeProvider', 
		($locationProvider,$routeProvider) => {
			$routeProvider
				.when('/home', {
					template: JST['/pages/home'](),
				})
				.when('/ark', { 
					template: JST['/pages/ark'](), 
				})
				.when('/holy', { 
					template: JST['/pages/holy'](),
					controllerAs: "$ctrl",
					controller : "PageHolyController"
				})
				.otherwise({
					redirectTo:'/home'
				})
		}
	])