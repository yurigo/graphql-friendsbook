const posts = [
  { id: 1, title: "Post 1", content: "Content 1", creator: 1 },
  { id: 2, title: "Post 2", content: "Content 2", creator: 1 },
  { id: 3, title: "Post 3", content: "Content 3", creator: 2 },
  { id: 4, title: "Post 4", content: "Content 4", creator: 3 },
  { id: 5, title: "Post 5", content: "Content 5", creator: 4 },
  { id: 6, title: "Post 6", content: "Content 6", creator: 5 },
  { id: 7, title: "Post 7", content: "Content 7", creator: 1 },
  { id: 8, title: "Post 8", content: "Content 8", creator: 2 },
  { id: 9, title: "Post 9", content: "Content 9", creator: 3 },
  { id: 10, title: "Post 10", content: "Content 10", creator: 4 },
  { id: 11, title: "Post 11", content: "Content 11", creator: 5 },
  { id: 12, title: "Post 12", content: "Content 12", creator: 1 },
  { id: 13, title: "Post 13", content: "Content 13", creator: 2 },
  { id: 14, title: "Post 14", content: "Content 14", creator: 3 },
  { id: 15, title: "Post 15", content: "Content 15", creator: 4 },
];

export const all = () => posts;
export const get = (id) => posts.find((elem) => elem.id == id);
export const allFromUser = (userID) =>
  posts.filter((elem) => elem.creator === userID);
