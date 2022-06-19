NoseX = 0;
NoseY = 0;
GameX = 0;
GameY = 0;

function setup(){
    var canvas = createCanvas(700,700);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    posenet = ml5.poseNet(video , ModelLoaded)
}

function draw(){
    image(video,0,0,500,500);
}

function ModelLoaded(){
    console.log("model is loaded");
}