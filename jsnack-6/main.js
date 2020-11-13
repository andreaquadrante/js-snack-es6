const objectsArray = [

  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},

];

const newObjectsArray = objectsArray.map((e) => {

  const newObject = {...e, position: randomLetter ()}
  return newObject;

})

console.log(objectsArray, newObjectsArray)
