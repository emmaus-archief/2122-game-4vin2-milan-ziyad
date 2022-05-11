/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var VijandX = 500;
var VijandY = 100;
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
  if (spelStatus===SPELEN||VijandY<500){
      VijandY = VijandY + 4;
  }
  else{
    VijandY=VijandY - 5;
  }

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if (spelerX-VijandX<100&&
  spelerX-VijandX>-85&&
  spelerY-VijandY<45&&
    spelerY-VijandY>-20){
  spelStatus = GAMEOVER;
}

  // botsing speler tegen rand
   if (spelerX < 435 || spelerX > 783) {
     spelStatus = GAMEOVER;
   }
  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
background('green');
fill(247,104,6);
rect(370,0,50,720);
rect(800,0,50,720);
  // vijand
  fill(255,255,255);
 var blokje= function(x,y){
  rect(x,y,75,75);
 
 }
 blokje(VijandX, VijandY);
  // kogel
  
  // speler
  fill("white");
  rect(spelerX - 18, spelerY - 8, 36, 15);
  fill("black");
  ellipse(spelerX, spelerY, 20, 20);

  // punten en health

  var punten = 0;
 fill(255,215,0);
  textSize(20);
text(punten,600,700);
punten = punten +1;
  
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

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
  //vijanden

  
  }
var gameover = function () {
       background("black");
       fill("white");
       textSize (80);
       text("Hoe ben je nu al af?????", 250,400);
}
/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
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
  }
}