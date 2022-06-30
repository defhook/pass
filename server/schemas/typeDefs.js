const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Park {
        id: String
        name: String
        timezone: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input ParkData {
        id: String
        name: String
        timezone: String
    }

    type Query {
        me: User
    }

    type Mutation {
        savePark(input: ParkData!): User
        removePark(id: String!): User
    }
`;

module.exports = typeDefs