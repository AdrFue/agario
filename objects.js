function Agar() {
	this.x = width/2;
	this.y = height/2;
	this.r;
	this.xSpeed = 0;
	this.ySpeed = 0;
	
	this.display = function() {
		noStroke();
		fill(255);
		ellipse(this.x, this.y, this.r, this.r);
	}
	
	this.dir = function(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}

	this.move = function() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		
		if (this.x >= width -this.r/2) {
			this.x = width -this.r/2;
		} else if(this.x <= 0 +this.r/2) {
			this.x = 0+this.r/2;
		} 
		if (this.y >= height -this.r/2) {
			this.y = height -this.r/2;
		} else if (this.y <= 0 +this.r/2) {
			this.y = 0 +this.r/2;
		}
	}
	
	this.intersect = function(food) {
		var d = dist(this.x, this.y, food.x, food.y);
		
		if (d+30 <= this.r +food.r) {
			return true;
		} else {
			return false;
		}
	}
}

function Food() {
	this.r = 10;
	this.x = random(this.r, width -this.r);
	this.y = random(this.r, height -this.r);
	this.col = [random(255), random(255), random(255)];
	
	this.display = function() {
		noStroke();
		fill(this.col[0], this.col[1], this.col[2]);
		ellipse(this.x, this.y, this.r, this.r);
	}
}