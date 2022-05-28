/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var aantal = 0;
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
var spelStatus = UITLEG;
var img; var img2; var img3;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var VijandX = 500;
var VijandY = 100;
var cirkelX = 700;
var cirkelY= 100;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
if (keyIsDown(65)){
  spelerX=spelerX-5;
}
if (keyIsDown(68)){
  spelerX = spelerX + 5;
}
if (keyIsDown(87)){
  spelerY = spelerY - 3;
}
 if (keyIsDown(83)){
   spelerY = spelerY +1;
 }
  // vijand
  if (spelStatus===SPELEN){
      VijandY = VijandY + 4;
  }
  
 

  // kogel
  if (spelStatus===SPELEN){
    cirkelY = cirkelY + 9;
  }
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if (spelerX-VijandX<100&&
  spelerX-VijandX>-25&&
  spelerY-VijandY<50&&
    spelerY-VijandY>-20){
  spelStatus = GAMEOVER;
}

  // botsing speler tegen rand
   if (spelerX < 435 || spelerX > 783) {
     spelStatus = GAMEOVER;
   }
  // update punten en health
 var punten = 0;
  fill(255,215,0);
   textSize(20);
   text(0 + punten,600,700);
  if (spelerX-cirkelX<50&&
    spelerX-cirkelX>-50&&
    spelerY-cirkelY<65&&
    spelerY-cirkelY>-40){
      punten= punten + 50;
    }
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  
  background('green');
fill(247,104,6);
rect(320,0,100,720);
rect(750,0,100,720);
  // vijand
  fill(255,255,255);
 var blokje= function(x,y){
  rect(x,y,75,75);
 }
 blokje(VijandX, VijandY);
 blokje(VijandX+ 150, VijandY-200);
  // kogel
  
  // speler
  fill("white");
  rect(spelerX - 18, spelerY - 8, 36, 15);
  fill("black");
  ellipse(spelerX, spelerY, 20, 20);

  // punten en health

var coin = function(X,Y){
  fill("yellow");
  ellipse(X,Y,40,40);
}
coin(cirkelX,cirkelY);

};
 
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload(){
  img = loadImage('goede background.jpg');
  img2 = loadImage('GO.jpg');
  img3 = loadImage('lava (2).gif')
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
 
  // Kleur de achtergrond wit, zodat je het kunt zien
  background('green');
  //vijanden

  
  }
  var uitleg = function(){
    image(img, 0,0,1280,720);
    fill("white");
    textSize (25);
    text("Druk op ENTER om te starten", 900,700);
    textSize(30);
    text("Ontwijk de witte blokjes m.b.v. de toetsen 'A','S','D' en 'W' en verzamel munten voor punten :)", 40,400);
  }
var gameover = function () {
       image(img2,0,0,1280,720);
       fill("white");
       textSize (60);
       text("Hoe ben je nu al af?????", 300,550);
       text("Druk op spatie om verder te spelen", 150,650);
       text("punten = "+ punten, 200,100)
      
}
/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

function draw() {
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
     uitleg();
  }
  if (keyIsDown(13)){
    spelStatus= SPELEN;
  }
  if (spelStatus === SPELEN) {
    tekenAlles();
    beweegAlles();
    verwerkBotsing();
  
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
     gameover();
     if (keyIsDown(32)){
       spelStatus = SPELEN;  
     }
  }
 
  
  
}