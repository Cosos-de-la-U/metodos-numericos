//Metodo biseccion
function getMetodoNewtonCotes() {
  //Obteniendo variables
  var Xi = parseFloat(document.getElementById("limiteInferior").value);
  var Xs = parseFloat(document.getElementById("limiteSuperior").value);
  var n =  parseFloat(document.getElementById("numTrapecios").value);
  var expression = document.getElementById("eq").value;

  var head = `<table>
        <thead>
            <th scope="col">Iteración</th>
            <th scope="col">X</th>
            <th scope="col">f(X)</th>
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
  let i = 0;

  //Calculando (b-a)
  let h = (Xs - Xi)/n;

  //Trapecio
  let trapecio = Xi;

  //Calculado funcion en F(Xi)
  var scope = {
    x: Xi,
  };

  var fXi = parseFloat(math.evaluate(expression, scope));

  //Calcular funcion en F'(Xi) derivado
  scope = {
    x: Xi,
  };

  var row = `<tr class="bg-secondary">
    <td class="font-weight-bold">${i}</td>
    <td>${parseFloat(Xi).toFixed(6)}</td>
    <td>${parseFloat(fXi).toFixed(6)}</td>
        </tr>`;
  //Añadiento rows
  rows.innerHTML += row;
  //contando iteraciones
  i += 1;

  let arrfXi = [];

  //DO
  do {
    //Nuvo trapecio
    trapecio += h;

    //Calculado funcion en F(Xi)
    scope = {
      x: trapecio,
    };
    let = fXiNuevo = parseFloat(math.evaluate(expression, scope));
    arrfXi.push(fXiNuevo);


    //Reescribiendo
    var row = `<tr class=bg-secondary>
    <td class="font-weight-bold">${i}</td>
    <td>${parseFloat(trapecio).toFixed(6)}</td>
    <td>${parseFloat(fXiNuevo).toFixed(6)}</td>
      </tr>`;

    //Añadiento rows
    rows.innerHTML += row;

    //contando iteraciones
    i += 1;
  } while (i<=n);
  let Xn = arrfXi.pop();
  let sumafXi = arrfXi.reduce( (e,t) => (t+=e));

  let totalIntegral = (Xs - Xi) * ((Xi + (2 * sumafXi) + Xs)/ (2 * n));

  //Total intngral
  let rowAns = `<tr class=bg-success>
  <td colspan="2" class="font-weight-bold">INTEGRAL</td>
  <td>${parseFloat(totalIntegral).toFixed(6)}</td>
    </tr>`;

    rows.innerHTML += rowAns;

    console.log(sumafXi);
}
