import { gql } from '@apollo/client'

export const getliveData = (query) => {
    return fetch(`https://api.themeparks.wiki/v1/entity/${query}/live`)
} 

export const GET_ME = gql`
  {
    me {
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