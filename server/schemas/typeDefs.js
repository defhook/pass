const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
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
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!): Auth
        saveAttraction(input: AttractionData!): User
        removeAttraction(attractionId: String!): User
    }
`;

module.exports = typeDefs
