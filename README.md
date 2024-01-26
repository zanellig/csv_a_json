# Conversor de CSV a JSON en Node.js

Este documento proporciona una guía detallada sobre cómo usar un script de Node.js para convertir archivos CSV en formato JSON. El script lee un archivo CSV, procesa sus datos y genera un archivo JSON correspondiente.

## Requisitos

Para ejecutar este script, es necesario tener instalado Node.js en tu sistema. Puedes descargar la versión requerida de Node.js desde el siguiente enlace:

[Descargar Node.js](https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi)

## Descripción

El script realiza las siguientes operaciones:

1. **Lectura del archivo CSV**: Lee un archivo CSV especificado por el usuario.
2. **Procesamiento de Datos**: Separa el archivo CSV en líneas, extrayendo los encabezados y convirtiendo cada línea en un objeto JSON.
3. **Generación de archivo JSON**: Crea un archivo JSON con los datos convertidos.

## Uso

Para utilizar este script, sigue estos pasos:

1. **Instalar Node.js**: Asegúrate de tener Node.js instalado en tu sistema.
2. **Preparar el Archivo CSV**: El archivo CSV debe estar en el mismo directorio que el script.
3. **Ejecutar el Script**: Usa el siguiente comando en la terminal, reemplazando `nombre_del_archivo` con el nombre de tu archivo CSV **(sin la extensión `.csv`)**.

   ```bash
   node csv_a_json.js nombre_del_archivo
   ```

## Ejemplos

### Archivo CSV de Ejemplo

Supongamos que tienes un archivo CSV llamado `inventario.csv` con el siguiente contenido:

```csv
id,producto,cantidad
1,"Laptop HP",10
2,"Mouse Inalámbrico",25

```

### Ejecutando el Script

Ejecuta el script con el nombre del archivo CSV (sin la extensión):

```bash
node csv_a_json.js inventario
```

Esto generará un archivo **`inventario.json`** con el siguiente contenido:

```json
[
  {
    "id": "1",
    "producto": "Laptop HP",
    "cantidad": "10"
  },
  {
    "id": "2",
    "producto": "Mouse Inalámbrico",
    "cantidad": "25"
  }
]
```

### Notas Adicionales

- Asegúrate de que el archivo CSV tenga una primera línea con encabezados, ya que estos se utilizan como claves en los objetos JSON.
- El script maneja casos donde pueden haber valores vacíos en el CSV, asignando un string vacío a esos campos en el JSON.
