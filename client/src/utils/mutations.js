import { gql } from '@apollo/client';

export const SAVE_PARK = gql`
    mutation savePark($input: ParkData!) {
        savePark(input: $input) {
            _id
            username
            email
            parkCount
            savedParks {
                id
                name
                timezone
            }
        }
    }
`

export const REMOVE_PARK = gql`
    mutation removePark($id: String!) {
        removePark(id: $id) {
            _id
            username
            email
            parkCount
            savedParks {
                id
                name
                timezone
            }
        }
    }
`

