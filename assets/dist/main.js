(function (){ window.app = angular.module("soa",["ngRoute"])
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
	]) })();
(function (){ app
  .component('invslot', {
    template: JST['/components/invslot'](),
    bindings: {
    	item:'@',
    	amt:'@',
    }
  })
 })();
(function (){ class PageHolyController {
	constructor() {
		this.holyItems = [
			{name:"Sword of Mars", faithCost:200,expCost:9, display:["hello"]},
			{name:"Hermes Slippers", faithCost:200,expCost:9},
		];
	}
}

app.controller("PageHolyController", [PageHolyController]) })();