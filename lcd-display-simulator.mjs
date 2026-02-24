/******************************************
 * Práctica 1: Pantalla LCD
 * Fecha: 23 de febrero, 2026
 * Autor: A01802127 Luis Alejandro Olvera Hernández
 ******************************************/

let digitos = [
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1],
  ];

function imprimirHor (fila, t, d)
{
  fila += " ";

  if (d == 1) {
    fila += "-".repeat(t);
  } 
  else {
    fila += " ".repeat(t);
  }

  fila += " ";
  
  fila += " "; 

  return fila;
}

function imprimirVer(fila, t, d, d2)
{
  if (d == 1) {
    fila += "|";
  } 
  else {
    fila += " ";
  }

  fila += " ".repeat(t);

  if (d2 == 1) {
    fila += "|";
  } 
  else {
    fila += " ";
  }
  
  fila += " ";

  return fila;
}

function lcd (t, n) {
  if (t < 1 || t > 10 || n < 0 || n > 99999999) {
    console.log("Error: Los parámetros están fuera de rango.");
    return; 
  }
  
  let num = n.toString();
  let fila1 = "";
  let fila2 = "";
  let fila3 = "";
  let fila4 = "";
  let fila5 = "";

  for (let i = 0; i < num.length; i++)
  {
    let digito = digitos[parseInt(num[i], 10)];
    
    fila1 = imprimirHor(fila1, t, digito[0]);
    
    fila2 = imprimirVer(fila2, t, digito[1], digito[2]);
    
    fila3 = imprimirHor(fila3, t, digito[3]);
    
    fila4 = imprimirVer(fila4, t, digito[4], digito[5]);
    
    fila5 = imprimirHor(fila5, t, digito[6]);
  }

  console.log(fila1);
  for(let a = 0; a < t; a++)
  {
    console.log(fila2);
  }
  console.log(fila3);
  for(let b = 0; b < t; b++)
  {
    console.log(fila4);
  }
  console.log(fila5);
}

lcd(2,12345);