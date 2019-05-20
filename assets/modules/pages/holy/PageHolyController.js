// const HOLY_ITEMS_LIST = [
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

app.controller("PageHolyController", ["HoliesSvc","$scope",PageHolyController])