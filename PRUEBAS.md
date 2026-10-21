# Pruebas del proyecto

## Pruebas manuales

Ejecutar desde la raíz del proyecto con VS Code Live Server. Marcar el resultado después de realizar cada caso.

| # | Caso | Cómo se prueba | Resultado esperado | Resultado |
|---|---|---|---|---|
| 1 | Carga de la página | Abrir `index.html` con Live Server | Se muestra el nombre del proyecto sin mensaje de error | ⬜ |
| 2 | Datos del proyecto | Comparar encabezado y `datos/equipo.json` | Nombre, descripción y versión coinciden | ⬜ |
| 3 | Integrantes | Contar tarjetas y comparar con el JSON | Hay una tarjeta por integrante, con nombre y rol | ⬜ |
| 4 | Enlaces de GitHub | Abrir cada enlace de perfil | Cada enlace lleva al usuario indicado en el JSON | ⬜ |
| 5 | JSON válido | Ejecutar `npm test` | El archivo existe, se puede parsear y cumple el contrato | ⬜ |
| 6 | Diseño móvil | F12 → modo dispositivo móvil | Las tarjetas caben en pantalla sin desbordamiento horizontal | ⬜ |
| 7 | Publicación | Abrir la URL de GitHub Pages | La página carga los datos y no muestra errores | ⬜ |

## Pruebas automatizadas del contrato de datos

Requieren Node.js 18 o superior. Ejecutar `npm test` desde la raíz. No requieren dependencias externas.

El conjunto automatizado valida que `datos/equipo.json` exista, que sea JSON válido, que incluya los campos consumidos por el frontend y que cada integrante tenga nombre, rol y usuario de GitHub no vacíos.

