class PageHolyController {
	constructor() {
		this.holyItems = [
			{name:"Sword of Mars", faithCost:200,expCost:9, display:["hello"]},
			{name:"Hermes Slippers", faithCost:200,expCost:9},
		];
	}
}

app.controller("PageHolyController", [PageHolyController])