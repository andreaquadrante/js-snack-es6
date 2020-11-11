// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area. (ripassiamo il Teorema di Pitagora ;D )

let triangle = {

  'base': 12,
  'height': 18,

}

// ricavo l'ipotenusa del triangolo
let myTriangleHypotenuse = triangleHypotenuse (triangle.base, triangle.height);

// calcolo il perimetro del triangolo
let myTrianglePerimeter = trianglePerimeter(triangle.base, triangle.height, myTriangleHypotenuse)

// calcolo l'area del triangolo
let myTriangleArea = triangleArea (triangle.base, triangle.height);
