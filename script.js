/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var punten = 0;
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
const WINNAAR = 4;
var spelStatus = UITLEG;
var img; var img2; var img3;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var VijandX = 525;
var VijandY = 100;
var vijand2X = 650;
var vijand2Y = 250;
var cirkelX = 700;
var cirkelY = 100;
var cirkel2X = 450;
var cirkel2Y = 200;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  if (keyIsDown(65)) {
    spelerX = spelerX - 2;
  }
  if (keyIsDown(68)) {
    spelerX = spelerX + 2;
  }
  if (keyIsDown(87)) {
    spelerY = spelerY - 2;
  }
  if (keyIsDown(83)) {
    spelerY = spelerY + 1;
  }
  // vijand
  if (spelStatus = SPELEN) {
    VijandY = VijandY + 5;
  }
  if (spelStatus = SPELEN) {
    vijand2Y = vijand2Y + 5;
  }

  // kogel
  if (spelStatus === SPELEN) {
    cirkelY = cirkelY + 5;
  }
  if (spelStatus === SPELEN) {
    cirkel2Y = cirkel2Y + 5;
  }


};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (spelerX - VijandX < 100 &&
    spelerX - VijandX > -25 &&
    spelerY - VijandY < 50 &&
    spelerY - VijandY > -20) {
    spelStatus = GAMEOVER;
  }
  if (spelerX - vijand2X < 100 &&
    spelerX - vijand2X > -25 &&
    spelerY - vijand2Y < 50 &&
    spelerY - vijand2Y > -20) {
    spelStatus = GAMEOVER;
  }

  // botsing speler tegen rand
  if (spelerX < 440 || spelerX > 730) {
    spelStatus = GAMEOVER;
  }
  if (spelerY < 10) {
    spelStatus = WINNAAR;
  }
  if (spelerY > 710) {
    spelStatus = GAMEOVER;
  }
  // update punten en health

  fill(255, 215, 0);
  textSize(20);

  if (spelerX - cirkelX < 50 &&
    spelerX - cirkelX > -40 &&
    spelerY - cirkelY < 65 &&
    spelerY - cirkelY > -40) {
    punten = punten + 50;
  }
  if (spelerX - cirkel2X < 50 &&
    spelerX - cirkel2X > -40 &&
    spelerY - cirkel2Y < 65 &&
    spelerY - cirkel2Y > -40) {
    punten = punten + 50;
  }



  text(punten, 600, 700);

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond

  background('green');
  fill(247, 104, 6);
  rect(320, 0, 100, 720);
  rect(750, 0, 100, 720);
  fill(0, 0, 255);
  rect(420, 2, 330, 3);
 fill(255,0,0);
  rect(420, 715, 330, 3);
  // vijand
  image(img3, VijandX, VijandY, 75, 75);
  image(img3, vijand2X, vijand2Y, 75, 75);



  // kogel

  // speler
  fill("white");
  rect(spelerX - 18, spelerY - 8, 36, 15);
  fill("black");
  ellipse(spelerX, spelerY, 20, 20);

  // punten en health

  var coin = function (X, Y) {
    fill("yellow");
    ellipse(X, Y, 40, 40);
  }
  coin(cirkelX, cirkelY);
  coin(cirkelX - 200, cirkelY - 300);

  coin(cirkel2X, cirkel2Y);
  coin(cirkel2X - 200, cirkel2Y - 300);

}
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
function preload() {
  img = loadImage('goede background.jpg');
  img2 = loadImage('GO.jpg');
  img3 = loadImage('purepng.com-shrekshrekcomputer-animatedfantasy-filmfairy-talebook-1701528653667zkisp.png');

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
  background("green");
  //vijanden


}
var uitleg = function () {
  image(img, 0, 0, 1280, 720);
  fill("white");
  textSize(25);
  text("Druk op ENTER om te starten", 900, 700);
  textSize(30);
  text("Ontwijk de witte blokjes m.b.v. de toetsen 'A','S','D' en 'W' en verzamel munten voor punten :)", 40, 400);
  text("Bereik de blauwe lijn om het level te halen", 350, 500);
}
var gameover = function () {
  image(img2, 0, 0, 1280, 720);
  fill("white");
  textSize(60);
  text("Druk op spatie om opnieuw te spelen", 150, 650);
  text("punten = " + punten, 450, 150);
  if (punten === 0) {
    text("noob", 750, 150);
  }

}
var winnaar = function (){
  background("blue");
  textSize(40);
  fill("yellow");
  text("Gefeliciteerd. Je hebt het gehaald.", 350, 400);
  textSize(30);
  text("Druk op spatie om opnieuw te spelen", 400, 600);
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
    if (keyIsDown(13)) {
      spelStatus = SPELEN;
    }
  }
  if (spelStatus === WINNAAR){
    winnaar();
    if (keyIsDown(32)){
      spelStatus = UITLEG;
      spelerX = 600;
      spelerY = 600; // y-positie van speler
      VijandX = 525;
      VijandY = 100;
      vijand2X = 650;
      vijand2Y= 250;
      cirkelX = 700;
      cirkelY= 100;
      punten = 0;
}
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
    if (keyIsDown(32)) {
      spelStatus = SPELEN;
      spelerX = 600;
      spelerY = 600; // y-positie van speler
      VijandX = 525;
      VijandY = 100;
      vijand2X = 650;
      vijand2Y = 250;
      cirkelX = 700;
      cirkelY = 100;
      cirkel2X = 450;
      cirkel2Y = 200;
      punten = 0;
    }

  }
}