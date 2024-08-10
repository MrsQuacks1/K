function setup() {
    canvas=createCanvas(500, 500);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function preload() {
    classifier=ml5.imageClassifier("DoodleNet")
}

function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function Ti() {
    background("white");
}

function classifyCanvas() {
    classifier.classify(canvas, m)
}

function m(results) {
    console.log("results");
    document.getElementById("tmm").innerHTML=results[0].label;
    document.getElementById("mtm").innerHTML=results[0].confidence;
}