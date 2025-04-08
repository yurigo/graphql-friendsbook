const users = [
  {
    id: 1,
    name: "Alice",
    age: 20,
    friends: [2, 3, 4, 5],
  },
  {
    id: 2,
    name: "Bob",
    age: 20,
    friends: [5],
  },
  {
    id: 3,
    name: "Charlie",
    age: 25,
    friends: [1, 2],
  },
  {
    id: 4,
    name: "Dave",
    age: 20,
    friends: [1, 2, 3, 5],
  },
  {
    id: 5,
    name: "Eevee",
    age: 103,
    friends: [1, 2],
  },
];

export const all = () => users;
export const get = (id) => users.find((user) => user.id == id);
export const allFrom = (id) => get(id).friends.map((id) => get(id));
