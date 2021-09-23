var agar;
var food = [];
var speed = 10;

function setup() {
	createCanvas(600, 600);
	agar = new Agar();
	
	for (var i = 0; i < 100; i++) {
		food[i] = new Food();
		food[i].display();
	}
}

function draw() {
	background(50);
	
	if (food.length > 0) {
		for (var i = 0; i < food.length; i++) {
			food[i].display();
		}
		
		agar.display();
		agar.move();
		agar.r = (200 -food.length) /3;
		speed = food.length / 30 + 3;
		
		for (var i = 0; i < food.length; i++) {
			if (agar.intersect(food[i])) {
				food.splice(i, 1);
			}
		}
		
	} else {
		textSize(100);
		textAlign(CENTER);
		textStyle(BOLD);
		text('You WON', width/2, height/2);
		
		textSize(33);
		textAlign(CENTER);
		textStyle(NORMAL);
		text('Press F5 to Play Again!', width/2, height/2 +60);
	}
}

function keyPressed() {
	
	if (keyCode === RIGHT_ARROW) {
		agar.dir(speed, 0);
	} else if (keyCode === LEFT_ARROW) {
		agar.dir(-speed, 0)
	} else if (keyCode === DOWN_ARROW) {
		agar.dir(0, speed);
	} else if (keyCode === UP_ARROW) {
		agar.dir(0, -speed);
	}
}