(function (){ 
window.app = angular.module("soa",["ngRoute","ngSanitize"])
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
				.when('/', {
					template: JST['/pages/home'](),
				})
				.when('/ark', { 
					template: JST['/pages/ark'](), 
				})
				.when('/roughish-mobs', { 
					template: JST['/pages/roughish-mobs'](), 
				})
				.when('/roughish-mobs/:slug', { 
					template: JST['/pages/roughish-mobs/container'](), 
					controllerAs: "$ctrl",
					controller : "RoughishMobsController"
				})
				.when('/holy', { 
					template: JST['/pages/holy'](),
					controllerAs: "$ctrl",
					controller : "PageHolyController"
				})
				.otherwise({
					redirectTo:'/'
				})

			// configure html5 to get links working on jsfiddle
			// $locationProvider.html5Mode(true);
		}
	]) })();
(function (){ 
const HEART_IMAGES = {
  half : "https://gamepedia.cursecdn.com/minecraft_gamepedia/4/47/Half_Heart.svg?version=322b54519dd83ec216d1036d9874d2af",
  full: "https://gamepedia.cursecdn.com/minecraft_gamepedia/a/a7/Heart.svg?version=a2353dad4364c3d56fdb4ca630257006",
  empty : "https://gamepedia.cursecdn.com/minecraft_gamepedia/b/be/Empty_Heart.svg?version=ecbb4156dc22f650bd0abc0e92bef232"
}

app
  .component('hearts', {
    template: JST['/components/heart'](),
    bindings: {
      amt:'@',
    },
    controllerAs: "$ctrl",
    controller: class HeartController {
      constructor() {
        alert(2)
        for(let i = 0; i < this.amt; i++){
          console.log("yeet")
        } 
      }
    }
  })
 })();
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
(function (){ 

class RoughishMobsController {
  constructor( $routeParams ) {
    this.sectionAsHTML = JST['/pages/roughish-mobs/' + $routeParams.slug ]()
  }
}

app.controller("RoughishMobsController", ["$routeParams",RoughishMobsController]) })();
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