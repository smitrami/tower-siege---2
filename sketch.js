const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//create variables.
var engine, world;
var stand1, stand2;
var ground;
var stone, stone_img, chain;
var rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8, rect9, rect10, rect11, rect12, rect13, rect14, rect15;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var blocks1, blocks2, blocks3, blocks4, blocks5, blocks6, blocks7, blocks8, blocks9, blocks10, blocks11;
var rectangle1, rectangle2, rectangle3, rectangle4, rectangle5, rectangle6, rectangle7;
var rectangle8, rectangle9, rectangle10, rectangle11, rectangle12, rectangle13, rectangle14;
var rectangle15, rectangle16, rectangle17, rectangle18, rectangle19;
var rectangle20, rectangle21, rectangle22;
function preload() {
    //load stone img.
    stone_img = loadImage("polygon.png");
}
function setup() {
    var canvas = createCanvas(3000, 450);
    engine = Engine.create();
    world = engine.world;
    //create ground.
    ground = new Ground(750, 445, 3000, 8);
    //create stand1 & stand2.
    stand1 = new Ground(500, 250, 300, 10);
    stand2 = new Ground(1000, 200, 250, 10);
    //create stone.
    stone = new Polygon(100, 100, 50);
    //create chain.
    chain = new Sling(stone.body, { x: 100, y: 100 });
    //stand1's level three.
    rect1 = new Box(365, 230, 20, 40);
    rect2 = new Box(385, 230, 20, 40);
    rect3 = new Box(405, 230, 20, 40);
    rect4 = new Box(425, 230, 20, 40);
    rect5 = new Box(445, 230, 20, 40);
    rect6 = new Box(465, 230, 20, 40);
    rect7 = new Box(485, 230, 20, 40);
    rect8 = new Box(505, 230, 20, 40);
    rect9 = new Box(525, 230, 20, 40);
    rect10 = new Box(545, 230, 20, 40);
    rect11 = new Box(565, 230, 20, 40);
    rect12 = new Box(585, 230, 20, 40);
    rect13 = new Box(605, 230, 20, 40);
    rect14 = new Box(625, 230, 20, 40);
    //level two.
    block1 = new Box(370, 200, 20, 40);
    block2 = new Box(390, 200, 20, 40);
    block3 = new Box(410, 200, 20, 40);
    block4 = new Box(430, 200, 20, 40);
    block5 = new Box(450, 200, 20, 40);
    block6 = new Box(470, 200, 20, 40);
    block7 = new Box(490, 200, 20, 40);
    block8 = new Box(510, 200, 20, 40);
    block9 = new Box(530, 200, 20, 40);
    block10 = new Box(550, 200, 20, 40);
    block11 = new Box(570, 200, 20, 40);
    block12 = new Box(590, 200, 20, 40);
    block13 = new Box(610, 200, 20, 40);
    //top.
    blocks1 = new Box(380, 170, 20, 40);
    blocks2 = new Box(400, 170, 20, 40);
    blocks3 = new Box(420, 170, 20, 40);
    blocks4 = new Box(440, 170, 20, 40);
    blocks5 = new Box(460, 170, 20, 40);
    blocks6 = new Box(480, 170, 20, 40);
    blocks7 = new Box(500, 170, 20, 40);
    blocks8 = new Box(520, 170, 20, 40);
    blocks9 = new Box(540, 170, 20, 40);
    blocks10 = new Box(560, 170, 20, 40);
    blocks11 = new Box(580, 170, 20, 40);
    //stand2's level three.
    rectangle1 = new Box(900, 180, 30, 40);
    rectangle2 = new Box(930, 180, 30, 40)
    rectangle3 = new Box(960, 180, 30, 40);
    rectangle4 = new Box(990, 180, 30, 40)
    rectangle5 = new Box(1020, 180, 30, 40);
    rectangle6 = new Box(1050, 180, 30, 40);
    rectangle7 = new Box(1080, 180, 30, 40);
    //level two.
    rectangle8 = new Box(900, 150, 25, 40);
    rectangle9 = new Box(930, 150, 30, 40);
    rectangle10 = new Box(960, 150, 30, 40);
    rectangle11 = new Box(990, 150, 30, 40);
    rectangle12 = new Box(1020, 150, 30, 40);
    rectangle13 = new Box(1050, 150, 30, 40);
    rectangle14 = new Box(1080, 150, 30, 40);
    //level three.
    rectangle15 = new Box(930, 120, 30, 40);
    rectangle16 = new Box(960, 120, 30, 40);
    rectangle17 = new Box(990, 120, 30, 40);
    rectangle18 = new Box(1020, 120, 30, 40);
    rectangle19 = new Box(1050, 120, 30, 40);
    //top.
    rectangle20 = new Box(950, 90, 30, 40);
    rectangle21 = new Box(980, 90, 30, 40);
    rectangle22 = new Box(1010, 90, 30, 40);
    Engine.run(engine);
}
function draw() {
    background("#0061ff");
    Engine.update(engine);
    //text.
    push();
    fill("black");
    textSize(35);
    text("Press space to get a second chance to play ", 180, 40);
    pop();
    chain.display();
    fill("black");
    ground.display();
    fill("#ff0066")
    stand1.display();
    stand2.display();
    stone.display();
    //display stand1's level 3.
    fill("cyan");
    rect1.display();
    rect2.display();
    rect3.display();
    rect4.display();
    rect5.display();
    rect6.display();
    rect7.display();
    rect8.display();
    rect9.display();
    rect10.display();
    rect11.display();
    rect12.display();
    rect13.display();
    rect14.display();
    //rect15.display();
    //display level2.
    fill("#FF0066");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    //display top.
    fill("cyan");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
    blocks9.display();
    blocks10.display();
    blocks11.display();
    //dispaly stand2's level 3.
    fill("cyan");
    rectangle1.display();
    rectangle2.display();
    rectangle3.display();
    rectangle4.display();
    rectangle5.display();
    rectangle6.display();
    rectangle7.display();
    //display level 2.
    fill("#FF0066");
    rectangle8.display();
    rectangle9.display();
    rectangle10.display();
    rectangle11.display();
    rectangle12.display();
    rectangle13.display();
    rectangle14.display();
    //display level 3.
    fill("cyan");
    rectangle15.display();
    rectangle16.display();
    rectangle17.display();
    rectangle18.display();
    rectangle19.display();
    //display tpo level.
    fill("#FF0066");
    rectangle20.display();
    rectangle21.display();
    rectangle22.display();
    drawSprites();
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });

}
function mouseReleased() {
    chain.fly();

}
function keyPressed() {
    if (keyCode === 32) {
        chain.attach(stone.body);
    }

}