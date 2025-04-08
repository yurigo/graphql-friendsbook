# friendsbook

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
> | npm package             | Descripción                                                                              |
> | ----------------------- | ---------------------------------------------------------------------------------------- |
> | `chalk`                 | Librería para dar color a la consola.                                                    |
> | `dotenv`                | Librería para cargar variables de entorno desde un archivo .env.                         |
> | `express`               | Framework para crear aplicaciones web en Node.js.                                        |
> | `graphql`               | Librería para crear y ejecutar consultas GraphQL.                                        |
> | `graphql-http`          | Middleware para GraphQL que permite manejar peticiones HTTP.                             |
> | `@graphql-tools/schema` | Herramienta para crear y manipular esquemas GraphQL.                                     |
> | `helmet`                | Middleware para proteger aplicaciones Express de vulnerabilidades comunes.               |
> | `morgan`                | Middleware para registrar peticiones HTTP en la consola.                                 |
> | `nodemon`               | Herramienta para reiniciar automáticamente el servidor al detectar cambios en el código. |
> | `ruru`                  | Generador del cliente graphiQL para crear y ejecutar consultas GraphQL.                  |

2. Ejecuta el servidor

```bash
npm run dev
```

## Notas de desarrollo

Se ha utilizado un boilerplate[^1] básico.
Se ha añadido `@grapqhql-tools/schema`. [(Ver versión sin `@graphql-tools/schema`)](https://github.com/yurigo/graphql-friendsbook/tree/without-graphql-tools)
Se han implementado typedefs y resolvers con `@graphql-tools/schema`[^2].

Se pasa de una implementación básica a una implementación más robusta y escalable utilizando resolvers y typedefs de `@graphql-tools/schema`:

```js
import * as userDAO from "./DAO/userDAO.js";
import * as postDAO from "./DAO/postDAO.js";

function wrapUser(user) {
  return {
    ...user,
    friends: async () => (await userDAO.allFrom(user.id)).map(wrapUser), // <-- recursive wrapping
    posts: async () => (await postDAO.allFromUser(user.id)).map(wrapPost), // <-- recursive wrapping
  };
}

const wrapPost = (post) => {
  console.log("post", post);
  return {
    ...post,
    creator: () => wrapUser(userDAO.get(post.creator)),
  };
};

export const rootValue = {
  hello: () => "hello world",
  bye: () => 42,
  otro: () => "Lorem ipsum dolor sit amet",
  users: () => userDAO.all().map(wrapUser),
  user: ({ id }) => wrapUser(userDAO.get(id)),
  posts: () => postDAO.all().map(wrapPost),
  post: ({ id }) => wrapPost(postDAO.get(id)),
};
```

a:

```js
import * as userDAO from "./DAO/userDAO.js";
import * as postDAO from "./DAO/postDAO.js";

export const resolvers = {
  Query: {
    hello: () => "hello world",
    bye: () => 42,
    otro: () => "Lorem ipsum dolor sit amet",
    users: () => userDAO.all(),
    user: (_, { id }) => userDAO.get(id),
    posts: () => postDAO.all(),
    post: (_, { id }) => postDAO.get(id),
  },

  User: {
    friends: (ctx) => userDAO.allFrom(ctx.id),
  },

  Post: {
    creator: (ctx) => userDAO.get(ctx.creator),
  },
};
```

Mejorando la legibilidad y la escalabilidad del código y desentendiendonos del wrapping de los datos.

[^1]: https://www.graphql-js.org/docs/running-an-express-graphql-server/.
[^2]: https://the-guild.dev/graphql/tools/docs/generate-schema
