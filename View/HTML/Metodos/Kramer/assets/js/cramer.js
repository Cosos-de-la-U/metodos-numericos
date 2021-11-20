//captura los values de los inputs
const obtenerNumero = (inputaBuscar) => document.querySelector(`#${inputaBuscar}`).value;

//captura los inputs
const obtenerInputs = (inputaBuscar) => document.querySelector(`#${inputaBuscar}`);

//captura los inputs
const ponerRespuesta = (inputaBuscar, dato) => {
    console.log({inputaBuscar});
    document.querySelector(`#${inputaBuscar}`).innerText = dato};

//Agarrar todos los datos de los inputs
const obtenerArray = (inputaBuscar, tamanoDelArray) =>{

    const array = [];

    for (let i = 1; i <= tamanoDelArray; i++){
        array.push(parseInt(obtenerNumero(`${inputaBuscar}${i}`)));
    };

    return array
};

//Sarrus
const calcularSarrus = (arrayA, arrayB, filaSustituir="") =>{

        console.log("---" + filaSustituir);
    const array = [...arrayA];
    const verificarSustitucion = (filaSustituir == "x") ? (array[0] = arrayB[0], array[3] = arrayB[1],array[6] = arrayB[2]) :
                                 (filaSustituir == "y") ? (array[1] = arrayB[0], array[4] = arrayB[1],array[7] = arrayB[2]) :
                                 (filaSustituir == "z") ? (array[2] = arrayB[0], array[5] = arrayB[1],array[8] = arrayB[2]) : null;

    const determinantePositivo = ((array[0]*array[4]*array[8]) + 
                                  (array[3]*array[7]*array[2]) + 
                                  (array[6]*array[1]*array[5]));
    console.log(determinantePositivo);

    const determinanteNegativo = ((array[2]*array[4]*array[6]) + 
                                  (array[5]*array[7]*array[0]) + 
                                  (array[8]*array[1]*array[4]));
    console.log(determinanteNegativo);
console.table(array);
        console.log("---");

    return determinantePositivo - determinanteNegativo;
};

//Cramer
const calcularCramer = (arrayA, arrayB) =>{

    const determinanteS = calcularSarrus(arrayA, arrayB);

    if(determinanteS != 0){

        const determinanteX = calcularSarrus(arrayA, arrayB, "x");
        const determinanteY = calcularSarrus(arrayA, arrayB, "y");
        const determinanteZ = calcularSarrus(arrayA, arrayB, "z");
        console.log("---");
        console.log(determinanteS);
        console.log(determinanteX);
        console.log(determinanteY);
        console.log(determinanteZ);
        console.log("---");
        const X = (determinanteX / determinanteS);
        const Y = (determinanteY / determinanteS);
        const Z = (determinanteZ / determinanteS);

        return [X, Y, Z];
    }
};

//Pinta las respuestas
const pintarCramer = (respuestas) =>{

    const spanRespuesta = [];
    const variables = ["X: ", "Y: ", "Z: "]
    for(let i=1; i < 4 ; i++) {
        ponerRespuesta(`respuesta${i}`,`${variables[i-1]} ${Math.floor(respuestas[i-1])}`);
    }
};

const procesarCramer = () => {
    const arrayA = obtenerArray("num",9);
    const arrayB = obtenerArray("res",3);
    console.table(arrayA);
    console.table(arrayB);
    const respuestas = calcularCramer(arrayA, arrayB);
    console.log(respuestas);
    pintarCramer(respuestas);
};

const btnCalcular = document.querySelector('#calcular');
//Accion al presionar el boton
btnCalcular.addEventListener('click',() =>{
    procesarCramer();
});