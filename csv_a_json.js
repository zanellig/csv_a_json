const fs = require('fs');
const path = require('path');

const argument = process.argv[2];
const csvFilePath = `./${argument}.csv`; // Reemplaza con la ruta de tu archivo CSV
const jsonFilePath = `./${argument}.json`; // Ruta de salida para el archivo JSON

// Leer el archivo CSV y convertirlo en JSON
fs.readFile(csvFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Separar los datos en líneas y extraer los encabezados
  const lines = data.split('\r\n');
  const headers = lines[0].split(',');

  // Pasar las lineas a un array
  const lineas_como_string = [];
  for (let i = 1; i <= lines.length; i++) {
    const item = lines[i];
    lineas_como_string.push(item);
  }

  /**
   * @type {Object[]}
   */
  const inventario_array = [];
  // Convertir las lineas del array a objeto y pasar los objetos al array de inventario
  lineas_como_string.forEach(linea => {
    if (linea) {
      const linea_con_headers = convertir_linea_a_objeto_inventario(
        linea,
        headers
      );
      inventario_array.push(linea_con_headers);
    }
  });

  // Convertir el array de inventario a formato JSON
  const jsonData = JSON.stringify(inventario_array);

  // Escribir el JSON en un archivo
  fs.writeFile(jsonFilePath, jsonData, 'utf8', err => {
    if (err) {
      console.error('Error al escribir el archivo JSON:', err);
      return;
    }
    console.log('Archivo JSON generado con éxito.');
  });
});

/**
 * Convierte una línea de CSV en un objeto.
 *
 * @param {string} linea_string - La línea de texto en formato CSV.
 * @param {string[]} headers - Los encabezados que se utilizarán como claves en el objeto resultante.
 * @returns {Object} - Devuelve un objeto donde cada propiedad corresponde a una cabecera y su valor asociado en la línea CSV.
 */
function convertir_linea_a_objeto_inventario(linea_string, headers) {
  const values = linea_string.split(',');

  return headers.reduce((obj, header, index) => {
    // Si el header esta vacio o no tiene un valor le asigna null
    if (header === '') {
      header += 'null';
    }
    obj[header] = values[index] || ''; // Usa un string vacío si no hay valor para ese header
    return obj;
  }, {});
}
