var ship; 
var ship2;


function setup() {
    createCanvas(800, 600);
	ship = new Ship();
	ship2 = new Ship2();
}


function draw() {
	background(0);
	ship.render();
	ship2.render();
	ship.turn();
	ship2.turn();
}

function keyReleased() {
  ship.setRotation(0);
  ship2.setRotation(0);
}


function keyPressed(){
 if (keyCode == 68){
	ship.setRotation(0.1);
  } else if (keyCode == 65){
	ship.setRotation(-0.1);
  } else if (keyCode == RIGHT_ARROW){
	ship2.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW){
	ship2.setRotation(-0.1);
  }
}

function Ship() {
	//this.pos = createVector (width/2, height/2);
	this.r = 40; 							//wielkość statku, jednostka wielkości
	this.heading = 0;
	this.rotation = 0;

	this.render = function() {
		translate((width-100)/2, (height-100)/2);								//pozycja na ekranie
		//translate(this.pos.x, this.pos.y);
		rotate(this.heading);
		noFill();
		stroke(255,20,20);
		triangle(-this.r, this.r, this.r, this.r, 0, -this.r);  	//Środek statku to (0,0) -> Pkty (Ax,Ay,Bx,By,Cx,Cy)
	}
	
	this.setRotation = function(a) {
		this.rotation = a;
	}
	
	this.turn = function() {					//obracanie się
		this.heading += this.rotation;
	}
}

function Ship2() {
	//this.pos = createVector (width/2, height/2);
	this.r = 40; 							//wielkość statku, jednostka wielkości
	this.heading = 0;
	this.rotation = 0;

	this.render = function() {
		translate(width/8, height/8);								//pozycja na ekranie
		//translate(this.pos.x, this.pos.y);
		rotate(this.heading);
		noFill(0);
		stroke(20,20,255);
		triangle(-this.r, this.r, this.r, this.r, 0, -this.r);  	//Środek statku to (0,0) -> Pkty (Ax,Ay,Bx,By,Cx,Cy)
	}
	
	this.setRotation = function(a) {
		this.rotation = a;
	}
	
	this.turn = function() {					//obracanie się
		this.heading += this.rotation;
	}
}