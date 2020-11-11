// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area. (ripassiamo il Teorema di Pitagora ;D )

var triangle = {

  'base': 12,
  'height': 18,

}

// ricavo l'ipotenusa del triangolo
var myTriangleHypotenuse = triangleHypotenuse (triangle.base, triangle.height);

// calcolo il perimetro del triangolo
var myTrianglePerimeter = trianglePerimeter(triangle.base, triangle.height, myTriangleHypotenuse)

// calcolo l'area del triangolo
var myTriangleArea = triangleArea (triangle.base, triangle.height);
