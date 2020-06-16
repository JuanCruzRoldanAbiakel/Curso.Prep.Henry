// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1  // y devuelve el array
  // Tu código:
  for(var i = 0; i < array.length; i++){
    array [i]= array [i] + 1;
  }
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  unir = palabras.join(" ");
  return unir;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i < array.length; i++){
    if(array[i] == elemento){
      return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var extractor =0 ;
  var acumulador = 0;
  for(var i = 0; i < numeros.length; i++){
    extractor = numeros[i];
    acumulador = acumulador + extractor;
  }
  return acumulador;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var acumulador = 0;
  var extractor = 0;
  var promedio = 0;
  var resultado = 0;
  for(var i = 0; i < resultadosTest.length; i++){
    extractor = resultadosTest[i];
    acumulador = acumulador + extractor;
  }
  promedio = resultadosTest.length;
  resultado = acumulador / promedio;
  return resultado;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var valormayor = 0;
  var auxiliar = 0;
  var auxiliar2= 0;
  for (var i = 1; i < numeros.length; i++){
    j = i - 1;
    if(numeros[j] > numeros[i]){
      auxiliar = numeros[j];
    }
    else {
      auxiliar2 = numeros[i];
    }

    if (auxiliar >= auxiliar2){
      if(auxiliar > valormayor){
        valormayor = auxiliar;
      }
    }
    else{
      if(auxiliar2 > valormayor){
        valormayor = auxiliar2;
      }
    }
  }
  return valormayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
    var resultado = 1;
   if (arguments.length == 0){
      return 0;
   }

   for(var i = 0; i < arguments.length; i++){
    resultado = resultado * arguments[i];
   }
   return resultado;
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
