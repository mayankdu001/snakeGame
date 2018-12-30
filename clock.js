setup();
function setup(){
	createCanvas(500, 500);
	angleMode(DEGREES);
	draw();
}
function draw(){
	background(0);
	translate(250,250);
	rotate(-90);
	let hr=hour();
	let mn= minute();
	let sc= second();

	strokeWeight(8);
	stroke(255,100,150);
	noFill();
	let secondAngle=map(sc,0,60,0,360);
	ellipse(0,0,300,300);
	//arc(0,0,300,300,0,end1);

	push();
	rotate(secondAngle);
	stroke(255);
	line(0,0,100,0);
	pop();

	stroke(150,100,255);
	let minuteAngle=map(mn,0,60,0,360);
	push();
	rotate(minuteAngle);
	stroke(255,150,100);
	line(0,0,75,0);
	pop();

	stroke(150,100,255);
	let hourAngle=map(hr%12,0,12,0,360);
	push();
	rotate(hourAngle);
	stroke(150,255,100);
	line(0,0,50,0);
	pop();

	//middlepoint
	stroke(255);
	point(0,0);

	rotate(90);
	fill(250);
	noStroke();
	text(hr+":"+mn+":"+sc,0,200);
}
