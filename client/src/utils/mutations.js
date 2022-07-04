import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`

export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`

export const SAVE_ATTRACTION = gql`
    mutation saveAttraction($input: AttractionData!) {
        saveAttraction(input: $input) {
            _id
            email
            attractionCount
            savedAttractions {
                attractionId
                name
                type
                status
                waitTime
            }
        }
    }
`

export const REMOVE_ATTRACTION = gql`
    mutation removeAttraction($attractionId: String!) {
        removeAttraction(attractionId: $attractionId) {
            _id
            username
            email
            attractionCount
            savedAttractions {
                attractionId
                name
                type
                status
                waitTime
                
            }
        }
    }
`

