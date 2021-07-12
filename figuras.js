// Código del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
};

function areaCuadrado(lado){
    return lado * lado;
};

////// Código del triangulo

function perimetroTriangulo(lado1,lado2, base){
    return lado1 + lado2 + base
};


function areaTriangulo(base, altura){
    return (base * altura) / 2;
};

////// código del circulo

// Diámetro
function diametroCirculo (radio){
    return radio * 2;
};

const PI = Math.PI;

// Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo (radio){
    return (radio * radio) * PI;
};

//// Calcular perimetro y area del cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    
    const squareResult = document.getElementById('squareResult');
    squareResult.innerText = "The perimeter of the square is " + perimetro + "cm";
};
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    
    const squareResult = document.getElementById('squareResult');
    squareResult.innerText = "The perimeter of the square is " + area + "cm²";
};

///// Calcular perimetro y area del triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTrianguloA");
    const input2 = document.getElementById("inputTrianguloB");
    const inputBase = document.getElementById("inputTrianguloBase");
    const lado1 = Number(input1.value);
    const lado2 = Number(input2.value);
    const base = Number(inputBase.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    const triangleResult = document.getElementById("triangleResult");
    triangleResult.innerText = "The perimeter of the triangle is " + perimetro + "cm";
};
function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTrianguloBase");
    const input2 = document.getElementById("inputTrianguloAltura");
    const base = Number(input1.value);
    const altura = Number(input2.value);

    const area = areaTriangulo(base, altura);

    const triangleResult = document.getElementById("triangleResult");
    triangleResult.innerText = "The area of the triangle is " + area + "cm²";
};

///// Calcular diametro, area y perimetro del circulo

function calcularDiametroCirculo(){
    const input1 = document.getElementById("inputCirculoRadio");
    const radio = Number(input1.value);

    const diametro = diametroCirculo(radio);

    const circleResult = document.getElementById("circleResult");
    circleResult.innerText = "The diameter of the circle is " + diametro + "cm";
};
function calcularPerimetroCirculo(){
    const input1 = document.getElementById("inputCirculoRadio");
    const radio = Number(input1.value);

    const perimetro = perimetroCirculo(radio);

    const circleResult = document.getElementById("circleResult");
    circleResult.innerText = "The perimeter of the circle is " + perimetro + "cm";
};
function calcularAreaCirculo(){
    const input1 = document.getElementById("inputCirculoRadio");
    const radio = Number(input1.value);

    const area = areaCirculo(radio);

    const circleResult = document.getElementById("circleResult");
    circleResult.innerText = "The area of the circle is " + area + "cm²";
};
