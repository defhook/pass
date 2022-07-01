import { gql } from '@apollo/client';

export const SAVE_PARK = gql`
    mutation savePark($input: ParkData!) {
        savePark(input: $input) {
            _id
            username
            email
            parkCount
            savedParks {
                parkId
                name
                status
            }
        }
    }
`

export const REMOVE_PARK = gql`
    mutation removePark($parkId: String!) {
        removePark(parkId: $parkId) {
            _id
            username
            email
            parkCount
            savedParks {
                parkId
                name
                status
            }
        }
    }
`

