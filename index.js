
fireworks = [];
let all = 50;

function setup() {
	  createCanvas(windowWidth, windowHeight);  
	  for(let i = 0; i < all; i++) {
		      fireworks[i] = new Firework(); 
		      }
}

function draw() {
	background(220);
	textSize(50);
	fill(30);
	text('HAPPY NEW YEAR!' ,5 , windowHeight/ 2);	
	for(let firework of fireworks) {
		firework.draw();
		firework.move();  
	}
}



class Firework {
	    
	  constructor() {
		  this.x = random(0,windowWidth);
		  this.startY = random(windowHeight + 100, windowHeight + 1000);
		  this.y = this.startY; 
		  this.speed = random(1,3);
		  this.blowHeight = random(0, 400);
		  this.color = color(random(0,255), random(0,255), random(0,255));
	 	this.size = random(10,50);
	  }
	  
	  draw() {
		  	ellipse(this.x, this.y, this.size, this.size);
		  	fill(this.color);
		    }
	  
	  move(){
		if(this.y > this.blowHeight) {
		          this.y -= this.speed;
	  	} else {
			if(this.y != this.startY) {
				let explosion = new Explosion(this.x,this.y);
				explosion.draw();
			} else {
				explosion.remove();
			}
	        	this.y = this.startY;
	 	}
	  }
}


class Explosion {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.explSize = random(100,200);
		this.size = random(10, 80);
	}

	draw(){
		ellipse(this.x, this.y, this.size, this.size);
	}
	grow(){
		if(this.size < this.explSize) {
			this.size += 5;
		} else {
			this.size = 0;
		}
	}
}
