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
