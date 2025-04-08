export const typedefs = `
    type Query { 
        hello: String
        bye: Int
        otro: String
        users: [User]
        user(id: ID!): User
        posts: [Post]
        post(id: ID!): Post
    }

    type User {
        id: ID!
        name: String
        age: Int
        friends: [User]
        posts: [Post]
    }

    type Post {
        id: ID!
        title: String
        content: String
        creator: User
    }
`;
