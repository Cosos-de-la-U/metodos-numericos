//Metodo biseccion
function getMetodoEulerMejorado() {
  //Obteniendo variables
  var Xn = parseFloat(document.getElementById("limiteInferior").value);
  var Yn = parseFloat(document.getElementById("limiteSuperior").value);
  var h = parseFloat(document.getElementById("numH").value);
  var Xf = parseFloat(document.getElementById("xf").value);
  var expression = document.getElementById("eq").value;

  var head = `<table>
        <thead>
            <th scope="col">Iteración</th>
            <th scope="col">Xn</th>
            <th scope="col">Yn</th>
            <th scope="col">(Yn+1)*</th>
            <th scope="col">Xn+1</th>
            <th scope="col">Yn+1</th>
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

  //Calculado funcion en F(Xn)
  var scope = {
    x: Xn,
    y: Yn,
  };

  var fXn = parseFloat(math.evaluate(expression, scope));

  //(Yn+1)*
  let Ynplus1asterisk = Yn + h * fXn;

  //(Xn+1)
  let Xnplus1 = Xn + h;

  //Calculado funcion en F(Xn)+1
  var scope2 = {
    x: Xnplus1,
    y: Ynplus1asterisk,
  };

  var fXnplus1 = parseFloat(math.evaluate(expression, scope2));

  //Yn+1
  let Ynplus1 = Yn + (h / 2) * (fXn + fXnplus1);

  var row = `<tr class="bg-secondary">
    <td class="font-weight-bold">${i}</td>
    <td>${parseFloat(Xn).toFixed(2)}</td>
    <td>${parseFloat(Yn).toFixed(2)}</td>
    <td>${parseFloat(Ynplus1asterisk).toFixed(2)}</td>
    <td>${parseFloat(Xnplus1).toFixed(2)}</td>
    <td>${parseFloat(Ynplus1).toFixed(2)}</td>
        </tr>`;
  //Añadiento rows
  rows.innerHTML += row;

  do {
    //contando iteraciones
    i += 1;

    //Asignando valores
    Xn = Xnplus1;
    Yn = Ynplus1;

    //Calculado funcion en F(Xn)
    scope = {
      x: Xn,
      y: Yn,
    };
    fXn = parseFloat(math.evaluate(expression, scope));

    //(Yn+1)*
    Ynplus1asterisk = Yn + h * fXn;

    //(Xn+1)
    Xnplus1 = Xn + h;

    //Calculado funcion en F(Xn)+1
    scope2 = {
      x: Xnplus1,
      y: Ynplus1asterisk,
    };
    fXnplus1 = parseFloat(math.evaluate(expression, scope2));

    //Yn+1
    Ynplus1 = Yn + ((h / 2) * (fXn + fXnplus1));

    row = `<tr class=${(Xn >= Xf) ? "bg-success" : "bg-secondary"}>
    <td class="font-weight-bold">${i}</td>
    <td>${parseFloat(Xn).toFixed(2)}</td>
    <td class=${(Xn >= Xf) ? "bg-font-weight-bold" : ""}>${parseFloat(Yn).toFixed(2)}</td>
    <td>${parseFloat(Ynplus1asterisk).toFixed(2)}</td>
    <td>${parseFloat(Xnplus1).toFixed(2)}</td>
    <td>${parseFloat(Ynplus1).toFixed(2)}</td>
        </tr>`;
    //Añadiento rows
    rows.innerHTML += row;
  } while (Xn <= Xf);
}
