const { buildSchema } = require('graphql');
const users = require('../data/users');

const schema = buildSchema(`
    type User {
        id: ID!
        username: String!
        email: String!
        role: String!
    }

    type Query {
        users: [User]
        user(id: ID!): User
    }
`);

const root = {
    users: () => {
        return users.getPublicUsers();
    },
    user: ({ id }) => {
        return users.getPublicUserById(id);
    }
};

module.exports = schema; 