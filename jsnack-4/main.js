// 4A
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const SERIE_A_TEAMS = 20; // numero di squadre partecipanti
const SERIE_A_GAMES = 38; // numero di partite
const SERIE_A_WIN_POINTS = 3; // punti ottenuti per ogni vittoria
const MIN_POINTS = 0;
const MAX_POINTS = SERIE_A_GAMES * SERIE_A_WIN_POINTS;
const MIN_FOULS = 0;
const MAX_FOULS = 380;

let soccerTeams = [];

for (let i = 0; i < SERIE_A_TEAMS; i++) {

  let teamName = prompt('Inserisci il nome di una squadra.');

  let team = {
    'name': teamName,
    'points': 0,
    'sufferedFouls': 0
  }

  soccerTeams.push(team);

}

// 4B
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

for (let j = 0; j < soccerTeams.length; j++) {

  soccerTeams[j].points = randomNumber (MIN_POINTS, MAX_POINTS);
  soccerTeams[j].sufferedFouls = randomNumber (200, 400);

}
