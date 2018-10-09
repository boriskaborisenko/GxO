import './scss/main.scss';
import './particles';
import './app';
//import 'phaser/dist/phaser';
//import './game';



const playGame = document.getElementById('play'); 
//playGame.addEventListener('click', playGameHandler, false);

function playGameHandler(evt){
    console.log('start gamexx');
    document.getElementById('game').innerHTML = 'GAME';
    document.getElementById('site').style.display = 'none';
}
