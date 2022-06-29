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
        bookId: String
        name: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input ParkData {
        parkId: String
        name: String
    }

    type Query {
        me: User
    }

    type Mutation {
        savePark(input: ParkData!): User
        removePark(parkId: String!): User
    }
`;

module.exports = typeDefs