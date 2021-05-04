var cat;
var bgImg;
var mouseImg1,catImg2,mouseImg2,catImg1,catImg3,mouseImg3;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg3=loadAnimation("images/cat4.png")
    mouseImg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(870,600,20,20);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale=0.2;


    mouse=createSprite(200,600,20,20);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
cat.velocityX=0;
cat.addAnimation("catlastImage",catImg3);
cat.x=300;
cat.changeAnimation("catLastImage");
cat.scale=0.2;
mouse.addAnimation("mouseRunning",mouseImg3);
mouse.scale=0.15;
mouse.changeAnimation("mouseRunning");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning")
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;


}

}
