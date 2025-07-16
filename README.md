# BlockNotas

BlockNotas es una aplicación web de notas desarrollada con TypeScript, Webpack y Jest. Permite crear, editar, completar, eliminar y buscar notas, con persistencia en localStorage y una interfaz moderna.

## Características

- **Crear notas**: Añade nuevas notas con título.
- **Editar notas**: Modifica el título directamente en la lista.
- **Completar notas**: Marca notas como completadas o pendientes.
- **Eliminar notas**: Borra notas individualmente.
- **Buscar y filtrar**: Busca por texto y filtra por estado (todas, completadas, pendientes).
- **Contador**: Muestra el total y las completadas.
- **Persistencia**: Las notas se guardan en localStorage.
- **Interfaz moderna**: HTML y CSS responsivos y atractivos.
- **Tests**: Cobertura de pruebas con Jest para las clases principales.

## Estructura del proyecto

```
babel.config.js
package.json
tsconfig.json
webpack.config.js
jest.setup.js
public/
  index.html
  style.css
  assets/
src/
  main.ts
  clases/
    Notas.ts
    ListaNotas.ts
    Notas.test.ts
    ListaNotas.test.ts
```

## Instalación y uso

1. Instala las dependencias:
   ```sh
   npm install
   ```
2. Compila el proyecto:
   ```sh
   npx webpack --config webpack.config.js
   ```
3. Abre `public/index.html` en tu navegador para usar la app.
4. Ejecuta los tests:
   ```sh
   npm test
   ```

## Tecnologías
- TypeScript
- Webpack
- Jest
- Babel
- HTML5/CSS3

## Scripts útiles
- `npm test`: Ejecuta los tests con Jest.
- `npx webpack --config webpack.config.js`: Compila el proyecto y genera el bundle.

## Autor
- Marcos Bazan


