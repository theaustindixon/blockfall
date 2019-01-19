var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);
 
world.createEntity({
  name: "player",
  shape: "circle",
  radius: 1,
  image: "cloud.png",
  imageStretchToFit: true,
  density: -100000,
  x: 28,
  onKeyDown: function(e) {
	if (e.keyCode == "37") {
    this.applyImpulse(6, -30);
	}
	if (e.keyCode == "38") {
    this.applyImpulse(6, 0);
	}
	if (e.keyCode == "39") {
    this.applyImpulse(6, 60);
	}
	if (e.keyCode == "40") {
	this.applyImpulse(6, 180);
	}
  },
});
 
world.createEntity({
  name: "ground",
  shape: "square",
  type: "static",
  color: "rgb(53,59,232)",
  width: 20,
  height: .5,
  x: 20,
  y: 15
});


var block = {
  name: "block",
  shape: "square",
  image: "block.png",
  imageStretchToFit: true,
  width: 1,
  height: 1,
  onImpact: function(entity, force) {
    if (entity.name() === "stomp") {
      this.image("question.png");
    }
  }
};

var question = {
  name: "question",
  shape: "square",
  image: "question.png",
  imageStretchToFit: true,
  width: 1,
  height: 1,
};

var stomp = {
  name: "stomp",
  shape: "square",
  image: "stomp.png",
  imageStretchToFit: true,
  onImpact: function(entity, force) {
    if (entity.name() === "stomp") {
      this.destroy(stomp);
    }
  }
};


function rain_block () {
  world.createEntity(block, {
	  x: Math.floor((Math.random()*20)+10),
	  y: .01,
  });
}
setInterval(rain_block, 1000);


function rain_stomp () {
  world.createEntity(stomp, {
	  x: Math.floor((Math.random()*20)+10),
	  y: .01,

  });
}
setInterval(rain_stomp, 12000);


