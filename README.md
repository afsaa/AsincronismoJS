# Asincronismo en JS
Formas de resolver *tareas asincronas* usando **JavaScript**, con sus ventajas y desventajas.

------------

## Callbacks
Los callbacks son una de las primeras formas que se implementaron en JS para resolver tareas asincronas.

### Ventajas
-  Se puede identificar facilmente el patrón de su implementación.
-  Cualquier navegador puede interpretarlos de forma directa.

### Desventajas
-  Callback hell -> Acumulación de muchos callbacks anidados.
-  No son tan legibles como otras implementaciones.

------------

## Promesas
Agregadas a las funcionalidades de JS en la versión **EcmaScript 6** o **ES6**.

### Ventajas
-  Mejor legibilidad que los callbacks.
-  Anidamiento de tareas asincronas mejorado usando multiples `.then()`.
-  Ejecución de multiples promesas usando `Promise.all()`.

### Desventajas
-  Es necesario usar un polyfill para convertir las promesas a código JS que pueda procesar el navegador.
-  Manejo de errores no tan eficiente.

------------

## Async/Await
Agregado a las funcionalidades de JS en la versión **EcmaScript 8** o **ES8**.

### Ventajas
-  Mayor legibilidad y control de errores.

### Desventajas
-  Es necesario usar un polyfill para convertir las promesas a código JS que pueda procesar el navegador.
