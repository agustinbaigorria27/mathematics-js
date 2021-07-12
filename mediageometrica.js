///////// Media-Geometrica ////////
//const lista = [23,42,36]
function formulaMediaGeometrica(lista) {
    let acumulado = 0;
    producto = lista.map((elemento) => {
        if(acumulado == 0){
            acumulado = (elemento);
        } else {
            acumulado *= (elemento);
        }
    });
    const mediageometrica = parseFloat(Math.pow(acumulado,(1/lista.length)).toFixed(2));
    return mediageometrica;
};

function calcularMediaGeometrica() {
    let result = document.getElementById("geometricResult");

    let input = document.getElementById("geometricInput");
    let value = input.value;

    let valueArray = Array.from(value.split(','),Number);

    let meanGeometric = formulaMediaGeometrica(valueArray);

    result.innerText = "The annual growth is of " + meanGeometric + "%.";
}
