/**
 * JS - Aula14 - Jogo de Cartas
 * trabalhando com arrays(vetores)
 */

var naipes = ['♥', '♦', '♣', '♠'];
var faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var naipe = naipes[Math.floor(Math.random() * 4)];
var face = faces[Math.floor(Math.random() * faces.length)];

document.write("<h1>" + face + naipe + "</h1>");