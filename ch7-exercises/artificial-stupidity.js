// Your code here
function SmartPlantEater() {
	this.energy = 20;
}

SmartPlantEater.prototype.act = function(context) {
  var space = context.find(' ');
  if (this.energy > 60 && space) {
    return {type: 'reproduce', direction: space};
  }
  var plant = context.find('*');
  if (plant && this.energy < 80 ) {
    return {type: 'eat', direction: plant};
  }
  if (space) {
    return {type: 'move', direction: space};
  }
}


animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));
