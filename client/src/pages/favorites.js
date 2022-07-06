import React from "react";
import styled, { css } from "styled-components";
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth'
import "../custom.css";
import { useQuery, useMutation} from '@apollo/client';
import {REMOVE_ATTRACTION} from '../utils/mutations'

export const Grid = styled.div`
display: grid;
	grid-gap: 35px;
	grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 80px;

`;
export const CenteredText = styled.div`
text-align: center
`;
// this function creates a single favorite block it can be called multiple times for many faves
function Favorites() {
	const { loading, data } = useQuery(GET_ME)

	const userData = data?.me || data?.user || {}

	const showEm = userData?.savedAttractions

	const [deleteFave] = useMutation(REMOVE_ATTRACTION);


	const handleDelete = async (attractionId) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null

		if(!token) {
			return false;
		}

		try {
			await deleteFave({
				variables: { attractionId }
			})
		} catch (err) {
			console.log(err)
		}

	}

	if (loading) {
		return <h2>Loading...</h2>
	}

	return (
		<>
		{userData.savedAttractions ? null : 'You have no saved attractions'}
		<div className='maindisp container p-2 d-flex flex-wrap justify-content-center'>
        {showEm.map((each) => {
            return(
                <>      
                
                <form className='color-box p-2 m-2' key={each.attractionId}>
                <img className="clickable" onClick={() => handleDelete(each.attractionId)} src = {require( "../assets/images/red-x-icon.png")} alt=""
				 style={{
					height: "25px"

				  }}>
				</img>
                <a className='text-light' href={`/single/${each.attractionId}`}><h5>{each.name}</h5></a>
                <p>{each.type}</p>
                </form>              
                <br/>
                </>
            )   
        })}
            </div>
		</>
	
        )

}
  
export default Favorites

