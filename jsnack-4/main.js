// 4A
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

var SERIE_A_TEAMS = 20; // numero di squadre partecipanti
var SERIE_A_GAMES = 38; // numero di partite
var SERIE_A_WIN_POINTS = 3; // punti ottenuti per ogni vittoria
var MIN_POINTS = 0;
var MAX_POINTS = SERIE_A_GAMES * SERIE_A_WIN_POINTS;
var MIN_FOULS = 0;
var MAX_FOULS = 380;

var soccerTeams = [];

for (var i = 0; i < SERIE_A_TEAMS; i++) {

  var teamName = prompt('Inserisci il nome di una squadra.');

  var team = {
    'name': teamName,
    'points': 0,
    'sufferedFouls': 0
  }

  soccerTeams.push(team);

}

// 4B
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

for (var j = 0; j < soccerTeams.length; j++) {

  soccerTeams[j].points = randomNumber (MIN_POINTS, MAX_POINTS);
  soccerTeams[j].sufferedFouls = randomNumber (200, 400);

}
