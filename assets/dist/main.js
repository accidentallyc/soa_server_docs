(function (){ 
window.app = angular.module("soa",["ngRoute"])
	.service("FirebaseSvc",[
		function () {
			var firebaseConfig = {
			  apiKey: "AIzaSyBH8S79PlUwDESk9i6oKBP63rSAdGkQswo",
			  authDomain: "spirit-of-adventure-a91ec.firebaseapp.com",
			  databaseURL: "https://spirit-of-adventure-a91ec.firebaseio.com/",
			  projectId: "spirit-of-adventure-a91ec",
			};
			const instance = firebase.initializeApp(firebaseConfig);
			const firestore = firebase.firestore();

			const fsSvc = {
				_config : firebaseConfig,
				_instance : instance,
				_firestore : firestore,
			}

			return fsSvc;
		}
	])
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

			// configure html5 to get links working on jsfiddle
			$locationProvider.html5Mode(true);
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
(function (){ // const HOLY_ITEMS_LIST = [
//     Holy("Sword of Mars").Faith(210).Levels(30),
//     Holy("St Michaels Sword").Faith(140).Levels(30),
//     Holy("Smasher of Thousands").Faith(10).Levels(30),
//     Holy("Ring of Solomon").Faith(40).Levels(20),
//   ]

class PageHolyController {
	constructor( HoliesSvc, $scope ) {
    this.svcs = {
      HoliesSvc
    }
    
    this
      .svcs
      .HoliesSvc
      .fetchAll()
      .then((results) => {
        this.holyItems = results
        $scope.$digest()
      })
		// this.holyItems = HOLY_ITEMS_LIST.map((item) => item.toJson() );
	}
}

class Holy {
  constructor(name) {
    this.data = { name };
  }

  Faith(cost) {
    this.data.faithCost = cost;
    return this;
  }

  Levels(cost) {
    this.data.expCost = cost;
    return this;
  }

  Display(...displays) {
    this.data.display = displays;
    return this;
  }

  ToJson() {
    return this.data
  }
}

app.controller("PageHolyController", ["HoliesSvc","$scope",PageHolyController]) })();
(function (){ app.service("HoliesSvc", [
    "FirebaseSvc",
    class HoliesSvc {

      constructor (FirebaseSvc) {
        this.svcs = {
          FirebaseSvc
        };
      }

      fetchAll() {
        const holies = [];
        return this
          .svcs
          .FirebaseSvc
          ._firestore
          .collection("holies")
          .get()
          .then((results) => {
            results.forEach(function(doc) {
              holies.push(doc.data())
            })
          })
          .then(() => {
            return holies;
          })
      }
    }
  ]) })();