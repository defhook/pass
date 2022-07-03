const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        attractionCount: Int
        savedAttractions: [Attraction]
    }

    type Attraction {
        attractionId: String
        name: String
        type: String
        status: String
        waitTime: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    input AttractionData {
        attractionId: String
        name: String
        type: String
        status: String
        waitTime: Int
    }

    type Query {
        me: User
    }

    type Mutation {
        saveAttraction(input: AttractionData!): User
        removeAttraction(parkId: String!): User
    }
`;

module.exports = typeDefs