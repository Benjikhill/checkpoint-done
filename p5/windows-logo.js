function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255);

  fill("tomato");
  rect(30, 30, 100, 100);

  fill("yellowgreen");
  rect(140, 30, 100, 100);

  fill("skyblue");
  rect(30, 140, 100, 100);

  fill("orange");
  rect(140, 140, 100, 100);
}
