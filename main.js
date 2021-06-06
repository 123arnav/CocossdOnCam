
status="";
object=[];
function preload(){

};

function setup(){
canvas=createCanvas(500,400);
canvas.position(550,200);
video=createCapture(VIDEO);
video.hide();
ObjectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="detecting";
};
function modelLoaded(){
    console.log("loaded")
    status="true";
   
}
function draw(){
    image(video,0,0,500,400);
    document.getElementById("status").innerHTML="detected";
    if (status!=""){
r=random(255);
b=random(255);
g=random(255);
        ObjectDetector.detect(video,gotResult);
        for(i=0;i<object.length;i++){
            fill(r,g,b);
            noFill();
            stroke(r,g,b);
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
            text(object[i].label,object[i].x,object[i].y);
        }
    };
   
}
function gotResult(error,result){
if (error){
    console.log(error);

}
else{
    console.log(result);
    object=result;
};
}