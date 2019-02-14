function setup() {
  createCanvas(800, 800);
	let circulo = color('#FFFF00');
	let meio = color('#000000')

  fill(circulo)
	ellipse(200, 200,350,350);
	fill(meio)
	ellipse(140, 150,70,120);
	fill(meio)
	ellipse(250, 150,70,120);
	noFill();
  strokeWeight(7)
	arc(200, 200, 190, 220,QUARTER_PI,PI-QUARTER_PI);
	
	
  
	
}

function draw() {
	
  
	
}



