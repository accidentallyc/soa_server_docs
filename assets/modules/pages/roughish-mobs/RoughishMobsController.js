

class RoughishMobsController {
  constructor( $routeParams ) {
    this.sectionAsHTML = JST['/pages/roughish-mobs/' + $routeParams.slug ]()
  }
}

app.controller("RoughishMobsController", ["$routeParams",RoughishMobsController])