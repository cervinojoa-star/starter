# React: API, map y filter — starter

## Iniciar

Usar Node.js 22.12 o superior. Abrir la terminal en esta carpeta:

```bash
npm install
npm run dev
```

Abrir la dirección que indica Vite. `npm run build` verifica la compilación.
La configuración incluye @vitejs/plugin-react y JSX automático, como el template
de React de Vite. No hace falta importar React en cada archivo.

## Recorrido

1. useEffect consulta la API al montar App.
2. La respuesta JSON es un objeto; datos.results es el array de personajes.
3. setPersonajes guarda ese array y React vuelve a renderizar.
4. map convierte los objetos en tarjetas que reciben props.
5. El input actualiza busqueda con useState.
6. filter selecciona por nombre; includes comprueba si contiene el texto.

Solo hay dos estados: personajes y busqueda. personajesFiltrados es un valor
derivado: no necesita otro estado ni otro useEffect.

## Starter: orden de trabajo

- TODO 1: guardar el array recibido.
- TODO 2: renderizar con map, key y props.
- TODO 3: conectar el evento del buscador.
- TODO 4: aplicar filter por nombre.

El starter compila, pero no muestra tarjetas hasta completar los primeros pasos.
La consulta y su manejo básico de errores ya están preparados.

## Alcance

La API devuelve hasta 20 personajes por página. Este ejercicio consulta solo la
primera: el buscador filtra ese conjunto local, sin hacer nuevas peticiones.
Requiere Internet. No usa API key. Al inicio el catálogo está vacío hasta recibir
los datos; se omite un indicador de carga para mantener el ejemplo pequeño.
Ante un error se muestra un aviso y se registra el detalle en la consola.

StrictMode está activado. En desarrollo puede observarse una consulta adicional
por su comprobación de efectos. No se agrega cancelación al ejemplo introductorio.

## Comprobar

Ver tarjetas al recibir la respuesta. Buscar Rick y luego RICK: mismos resultados.
Buscar zzzzzz: mensaje sin resultados. Borrar el texto: recuperar los personajes.

Datos e imágenes: https://rickandmortyapi.com/
Documentación: https://rickandmortyapi.com/documentation
