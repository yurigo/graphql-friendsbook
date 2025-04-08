# friendsbook (without @graphql-tools/schema)

Friendsbook es una red social que permite a personas conectar entre sí (`friends`) y compartir contenido (`posts`).

## GraphQL

Se utiliza GraphQL para la api, lo que permite realizar consultas de manera eficiente y flexible. GraphQL permite a los clientes especificar exactamente qué datos necesitan, lo que reduce la cantidad de datos transferidos y mejora el rendimiento de la aplicación.

## Puesta en marcha

1. Instala todas las dependencias

```bash
npm install
```

> ### Dependencias
>
> | npm package    | Descripción                                                                              |
> | -------------- | ---------------------------------------------------------------------------------------- |
> | `chalk`        | Librería para dar color a la consola.                                                    |
> | `dotenv`       | Librería para cargar variables de entorno desde un archivo .env.                         |
> | `express`      | Framework para crear aplicaciones web en Node.js.                                        |
> | `graphql`      | Librería para crear y ejecutar consultas GraphQL.                                        |
> | `graphql-http` | Middleware para GraphQL que permite manejar peticiones HTTP.                             |
> | `helmet`       | Middleware para proteger aplicaciones Express de vulnerabilidades comunes.               |
> | `morgan`       | Middleware para registrar peticiones HTTP en la consola.                                 |
> | `nodemon`      | Herramienta para reiniciar automáticamente el servidor al detectar cambios en el código. |
> | `ruru`         | Generador del cliente graphiQL para crear y ejecutar consultas GraphQL.                  |

2. Ejecuta el servidor

```bash
npm run dev
```

## Notas de desarrollo

Se ha utilizado un boilerplate[^1] básico.
Se ha implementado las dependencias mínimas de graphql: `graphql` y `graphql-http`.
Se han implementado typedefs y resolvers sin `@graphql-tools/schema`. [(Ver versión con `@graphql-tools/schema`)](https://github.com/yurigo/graphql-friendsbook/tree/master)

[^1]: https://www.graphql-js.org/docs/running-an-express-graphql-server/.
