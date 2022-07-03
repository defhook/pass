import { gql } from '@apollo/client';

export const SAVE_ATTRACTION = gql`
    mutation saveAttraction($input: AttractionData!) {
        saveAttraction(input: $input) {
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

