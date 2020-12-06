/*
ref - to point to an address
on - to read the value from database
set - update the value in the database
*/
var database;
var distance = 0;
var gameState = 0;
var playerCount = 0;
var game,player,form;
var allPlayers;
var cars, car1, car2, car3,car4 ;


function setup(){
    createCanvas(displayWidth - 20,displayHeight - 125);
    database = firebase.database();
    console.log(database)

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(playerCount === 4)
    {
        game.update(1);
    }
    if(gameState === 1)
    {
        clear();
        game.play();
    }
   // drawSprites();
}

