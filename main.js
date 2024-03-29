noseX = 0;
noseY = 0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/mkvPPVsF/mustache-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache, noseX, noseY, 100, 50);
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x -40;
        noseY = results[0].pose.nose.y -5;
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        console.log("nose y: "+results[0].pose.nose.y);
    };
}