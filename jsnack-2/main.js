// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [

  {

    'name': 'Scott',
    'weight': 9.50

  },

  {

    'name': 'GT',
    'weight': 7

  },

  {

    'name': 'Lombardo',
    'weight': 12

  },

]

let [lightestBike] = bikes;

bikes.forEach (function(b){

  if (b.weight < lightestBike.weight) {
    lightestBike = b
  }

});

let {name, weight} = lightestBike;

console.log (`La bici più leggera è la ${name} con un peso di ${weight} chili`);
