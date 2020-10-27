const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const ground= 550;
let littleHeart;
let littleHeartAnim;
let BG;

let slpdog;
let slpdogAnim;

let coffee;
let coffeeAnim;



function preload(){
    const littleHeartSpritesheet = loadSpriteSheet("img/32littleHeart.png", 32,32,6);
    littleHeartAnim = loadAnimation(littleHeartSpritesheet);
    littleHeart = createSprite(CANVAS_WIDTH / 2, ground, 64, 64);
    littleHeart.moveSpeed = 6;
    

    const stillAnimation= loadSpriteSheet("img/littleWhite.png", 32, 32, 6);
    slpdogAnim= loadAnimation(stillAnimation);
    //slpdog= createSprite  (CAVAS_WIDTH/2, CANVAS_HEIGHT/2, 64, 64);
   

    const stillAnimation2= loadSpriteSheet("img/coffee.png",32, 32, 6);
    coffeeAnim= loadAnimation(stillAnimation2);
    //offee= createAnimation( CANVAS_WIDTH/2, ground, 64,64);



    BG = loadImage('img/Room.jpg');
}

function setup(){
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    littleHeart.addAnimation("moveR", littleHeartAnim);
    littleHeart.addAnimation("moveL", littleHeartAnim);
    littleHeart.addImage("still",loadImage("img/littleHeartSingle.png"));
    littleHeart.setDefaultCollider();
    littleHeart.scale= 2.0;

   // slpdog. addAnimation("dog", stillAnimation);


   // coffee. addAnimation("coffee", stillAnimation2);


}

function update(object) {
    if ( keyDown("left") || keyDown("right")) {
  
      if (keyDown("left")) {
        object.addSpeed(2, 180);
        object.mirrorX(-1);
      }
      if (keyDown("right")) {
        object.addSpeed(2, 0);
        object.mirrorX(1);
      }
    } else {
      object.setSpeed(0);
    }
    drawObject(object);
  }

  function drawObject(object) {
      if (object.getSpeed()> 0.0001) {
          object.changeAnimation("moveR");
      } else {
          object.changeImage("still");
      }
      littleHeart.limitSpeed(littleHeart.moveSpeed);
      drawSprite(object);
  }

  function draw() {
    background(BG);
    update(littleHeart);
    animation(slpdog);
    animation(coffee);
  }
  
