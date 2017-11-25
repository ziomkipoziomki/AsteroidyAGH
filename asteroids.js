var ship;
ship = new Ship();

function setup() {
	createCanvas(1500, 500);
}

function draw() {
	background(0);
	ship.render();
	ship.turn();
}

function noButton() {
  ship.setRotation(0);
}

function Button(){
 if (keyCode == RIGHT_ARROW){
	ship.turn(0.1);
  } else if (keyCode == LEFT_ARROW){
	ship.turn(-0.1);
  }
}

function Ship() {
	//this.pos = createVector (100, 10);
	this.r = 100; 							//wielkość statku
	this.rotation = 0;
	
	this.render = function() {
    translate(width/2, height/2);								//pozycja na ekranie
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);  	//Środek statku to (0,0) -> Pkty (Ax,Ay,Bx,By,Cx,Cy)
	}
	
	this.setRotation = function(a) {
	this.rotation = a;
	}
	
	this.turn = function(angle) {					//obracanie się
    this.heading += angle;
	}
}
