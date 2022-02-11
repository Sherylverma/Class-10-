
var trex,trexImg ;
var edges;
var ground, groundImg;
var invisibleGround;

function preload(){
    trexImg=loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImg=loadImage("ground2.png");
}
  

function setup(){
      createCanvas(600,200);
      //create a trex sprite
    trex = createSprite(90,160,20,30);
    trex.addAnimation("running",trexImg);
    trex.scale = 0.5;  
    
    ground = createSprite(300,180,600,10);
    ground.velocityX=-3;
    ground.addImage(groundImg);
    //edges=createEdgeSprites();
    invisibleGround = createSprite(300,190,600,10);
    invisibleGround.visible=false;
}

function draw(){
    background("black");
//trex should jump when y position is 161 and more with space key, keyDown means pressing
    if(keyDown("space") && trex.y>=161){
      trex.velocityY=-10 ;
    }

    trex.velocityY=trex.velocityY+0.6;
    //console.log(ground.x)
    console.log(trex.y);

    if(ground.x<0){
      ground.x=ground.width/2;
    }

    trex.collide(invisibleGround);
    drawSprites();
}
