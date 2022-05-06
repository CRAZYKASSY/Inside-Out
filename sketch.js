var back_img;
var bingbong_img, bingbong;
var happy_img, sad_img, fear_img, desg_img, angry_img;
var bgsound;
var buttons, buttonr;
var sonar = false;
var happyG, sadG, fearG, desgG, angryG;
var cannonbase_img, cannon_img;
var cannonBase, cannon;

function preload (){
cannon_img = loadImage ("assets/canon.png");
 back_img = loadImage ("assets/background.png");
 bingbong_img = loadImage ("assets/Bing_Bong.png");
 happy_img = loadImage ("assets/Alegria.png");
 sad_img = loadImage ("assets/Tristeza.png");
 fear_img = loadImage ("assets/Temor.png");
 desg_img = loadImage ("assets/Desagrado.png");
 angry_img = loadImage ("assets/Furia.png");
 bgsound = loadSound ("bginside.mp4");
 cannonbase_img = loadImage ("assets/cannonBase.png");
}

function setup (){
    createCanvas (windowWidth,windowHeight);

    bingbong = createSprite (150,500,width+100,height+100);
    bingbong.addImage (bingbong_img);
    bingbong.scale = 0.7;

    cannon = createSprite (550,600,100,100);
    cannon.addImage ("cañon",cannon_img);
    cannon.scale = 0.09;

    cannonBase = createSprite (550,600,100,100);
    cannonBase.addImage ("base",cannonbase_img);
    cannonBase.scale = 0.09;

    
    buttons = createImg ("assets/botons.png");
    buttons.position (700,20);
    buttons.size (40,40);
    buttons.mouseClicked (mute);

    happyG = new Group ();
    sadG = new Group ();
    fearG = new Group ();
    desgG = new Group ();
    angryG = new Group ();

    bubbles (10,400,150);
    bubbles (7,460,200);
    bubbles (8,440,250);
    bubbles (9,420,300);
    bubbles (6,480,350);

}

function draw (){
    background (back_img);
    if ( !bgsound.isPlaying () && sonar === false){
        bgsound.play ();
        bgsound.setVolume = 0.5;
   }  
   moveCannon ();
   shootbubbles ();
 drawSprites ();
}

function windowResized (){
    resizeCanvas (windowWidth,windowHeight);
}

function mute (){
    if (bgsound.isPlaying){
      bgsound.stop ();
      sonar = true;
    }
    else {
        bgsound.play ();
        sonar = false;
    }
}

function bubbles (tamaño,x,y){
 var bubble ;
 for ( var i=0; i<tamaño; i++){
 bubble = createSprite (x,y,40,40);
 x= x+45;
 var rand = Math.round (random (1,5));
 switch (rand){
     case 1:bubble.addImage ("happy",happy_img);
     happyG.add (bubble);
     break;
     case 2: bubble.addImage ("sad",sad_img);
     sadG.add (bubble);
     break;
     case 3: bubble.addImage ("angry",angry_img);
     angryG.add (bubble);
     break;
     case 4: bubble.addImage ("fear",fear_img);
     fearG.add (bubble);
     break;
     case 5: bubble.addImage ("desagrado",desg_img);
     desgG.add (bubble);
     break;
     default : break;
 }
 bubble.scale = 0.05;
 }
}
 function moveCannon (){
    if (keyIsDown ("39")&& cannon.rotation<110){
        cannon.rotation += 10;
    }
    if (keyIsDown ("37")&& cannon.rotation>-70){
        cannon.rotation -= 10;
    }
    if (cannon.rotation>109){
        cannon.rotation = 109;
    }
    if (cannon.rotation<-69){
        cannon.rotation = -69;
    }
    console.log (cannon.rotation);
 }
   
 function shootbubbles(){
     if (keyIsDown ("32")){
        var pelotita = createSprite (550,600,80,80);
        pelotita.velocityY = -4;
        var rand = Math.round (random (1,5));
     switch (rand){
     case 1:pelotita.addImage ("happy",happy_img);
     happyG.add (pelotita);
     break;
     case 2:pelotita.addImage ("sad",sad_img);
     sadG.add (pelotita);
     break;
     case 3:pelotita.addImage ("angry",angry_img);
     angryG.add (pelotita);
     break;
     case 4:pelotita.addImage ("fear",fear_img);
     fearG.add (pelotita);
     break;
     case 5:pelotita.addImage ("desagrado",desg_img);
     desgG.add (pelotita);
     break;
     default : break;
 }
 pelotita.scale = 0.05;
     }
     happyG.collide (happyG);
     happyG.collide (angryG);
     happyG.collide (sadG);
     happyG.collide (desgG);
     happyG.collide (fearG);

     angryG.collide (happyG);
     angryG.collide (angryG);
     angryG.collide (sadG);
     angryG.collide (desgG);
     angryG.collide (fearG);

     sadG.collide (happyG);
     sadG.collide (angryG);
     sadG.collide (sadG);
     sadG.collide (desgG);
     sadG.collide (fearG);

     desgG.collide (happyG);
     desgG.collide (angryG);
     desgG.collide (sadG);
     desgG.collide (desgG);
     desgG.collide (fearG);

     fearG.collide (happyG);
     fearG.collide (angryG);
     fearG.collide (sadG);
     fearG.collide (desgG);
     fearG.collide (fearG);
     
     //    pelotita.velocityY = 0;
     //}
    }

