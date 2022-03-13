// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 6;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();

// Código del cuadrado
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo son: ${ladoTriangulo1} cm,
${ladoTriangulo2} cm, ${baseTriangulo} cm. y la altura es 
de ${alturaTriangulo} cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo; 
console.log(`El perímetro del triangulo es: ${perimetroTriangulo} cm`);
const areaTriangulo = baseTriangulo * alturaTriangulo / 2;
console.log(`El área del triangulo es: ${areaTriangulo} cm^2`);
console.groupEnd();

//Código de Circulo 
console.group("Circulo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
console.log(`El radio del circulo es ${radioCirculo} cm, 
     su diametro es ${diametroCirculo} cm`);

const perimetroCirculo = PI * diametroCirculo;
console.log(`El perímetro del Circulo es: ${perimetroCirculo} cm`);

const areaCirculo = (radioCirculo * radioCirculo) * PI ;
console.log(`El área del circulo es: ${areaCirculo} cm^2`);
console.groupEnd();
     