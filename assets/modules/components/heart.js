
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
