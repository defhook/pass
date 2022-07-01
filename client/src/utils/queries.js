// import { gql } from '@apollo/client'

export const getDestinations = () => {
     fetch('https://api.themeparks.wiki/v1/destinations')
    } 

export const getliveData = (query) => {
    return fetch(`https://api.themeparks.wiki/v1/entity/${query}/live`)
} 