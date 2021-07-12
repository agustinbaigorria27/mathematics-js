//////// Media /////////

function formulaMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function calcularMediaAritmetica(){
    let resultData = document.getElementById("resultData");

    let input = document.getElementById("inputData");
    let value = input.value;
    console.log(value);
    let valueArray = Array.from(value.split(','),Number);
    console.log(valueArray);
    let promedio = formulaMediaAritmetica(valueArray);

    resultData.innerText = "The mean of the data entered is " + promedio;
}


//// Mediana ////////


function formulaMediana(lista){

    const listaOrdenada = lista.sort(function(a,b) {
        return a - b;
    });

    const mitadLista1 = parseInt(listaOrdenada.length / 2);

    let mediana;

    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista1 - 1];
        const elemento2 = listaOrdenada[mitadLista1];
    
        const promedioElemento1y2 = formulaMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
        return mediana;
    } else {
        mediana = listaOrdenada[mitadLista1];
        return mediana;
    };


    function esPar(numerito) {
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
    };
};

function calcularMediana(){
    let result = document.getElementById("resultData");
    
    let input = document.getElementById("inputData");
    let value = input.value;

    let valueArray = Array.from(value.split(','),Number);

    let mediana = formulaMediana(valueArray);

    result.innerText = "The median of the data entered is " + mediana;
};



/////// Moda //////////

function calcularModa(){
    let result = document.getElementById("resultData");

    let input = document.getElementById("inputData");
    let value = input.value;

    let valueArray = Array.from(value.split(','),Number);

    let moda = formulaModa(valueArray);
    result.innerText = "The mode of the data entered is " + moda;
}


function formulaModa(lista){

    const listaCount = {};

    lista.map(elemento => {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        }else {
            listaCount[elemento] = 1;
        }
    });

    const listaArray = Object.entries(listaCount).sort((elementoA, elementoB) => elementoA[1] - elementoB[1]);

    const moda = listaArray[listaArray.length - 1];

    return moda;
}



