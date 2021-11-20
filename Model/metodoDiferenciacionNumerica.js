//Metodo biseccion
function getMetodoDiferenciacionNumerica() {
  const regex = /\,/g;
  //Obteniendo variables
  let  X =  document.getElementById("valoresX").value;
  let  Y =  document.getElementById("valoresY").value;
  let  opcion =  document.getElementById("opciones").value;
  
  let arrX = X.split(regex);
  let arrY = Y.split(regex);

  console.table(arrX)
  console.table(arrY)
  console.log(arrX.length + "   "+  arrY.length)
  if(arrX.length == 5 && arrY.length == 5){
    let  head = `<table>
    <thead>
        <th scope="col">N</th>
        <th scope="col">X</th>
        <th scope="col">Y</th>
    </thead>
    <tbody id="tableRows">
    </tbody>
  </table>`;

//Para ver en donde se van a meter las tablas
var table = document.getElementById("buildTable");
table.innerHTML = head;
//Ahora que se creo deberiamos poder agarrar este ID
var rows = document.getElementById("tableRows");

//Inicio iteración
let i = -2, k = 1;

var row = `<tr class="bg-secondary">
<td class="font-weight-bold">${i}</td>
<td>${parseFloat(arrX[0]).toFixed(6)}</td>
<td>${parseFloat(arrY[0]).toFixed(6)}</td>
    </tr>`;
//Añadiento rows
rows.innerHTML += row;
//contando iteraciones
i += 1;

//DO
do {

//Reescribiendo
var row = `<tr class=bg-secondary>
<td class="font-weight-bold">${i}</td>
<td>${parseFloat(arrX[k]).toFixed(6)}</td>
<td>${parseFloat(arrY[k]).toFixed(6)}</td>
  </tr>`;
k++;
//Añadiento rows
rows.innerHTML += row;

//contando iteraciones
i += 1;
} while (k<arrY.length);

let fXim2 = parseFloat(arrY[0]);
let fXim1 = parseFloat(arrY[1]);
let fXi   = parseFloat(arrY[2]);
let fXi1  = parseFloat(arrY[3]);
let fXi2  = parseFloat(arrY[4]);

let Xi   = parseFloat(arrX[2]);
let Xi1  = parseFloat(arrX[3]);

let integral = 0,
    tipoIntegral = "";

let  h = Xi1 - Xi;

if (opcion == 1){
  integral = (((-fXi2) + (4*fXi1) - (3*fXi))/ (2*h));
  tipoIntegral = "PROGRESIVA";
}else if (opcion == 2){
  integral = (((3 * fXi) - (4*fXim1) + (fXim2))/ (2*h));
  tipoIntegral = "REGRESIVA"
}else if (opcion == 3){
  integral = (((-fXi2) + (8*fXi1) - (8*fXim1) + (fXim2))/ (12*h));
  tipoIntegral = "CENTRADA"
}else{
  alert("Selecione como resolverla")
}

//Total 
let rowAns = `<tr class=bg-success>
<td colspan="2" class="font-weight-bold">DERIVADA ${tipoIntegral}</td>
<td>${parseFloat(integral).toFixed(6)}</td>
</tr>`;

rows.innerHTML += rowAns;

  }else{
    alert('Ingrese 5 valores correctamente')
  }
}
