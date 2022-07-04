
import React from "react";
import ReactDOM from "react-dom";

import styled, { css } from "styled-components";

import "../custom.css";


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
 function CreateFavorite(props){

		return(
			

			
			<div className="color-box">
				<img className="clickable" src = {require( "../assets/images/red-x-icon.png")} onClick = {unfavorite} alt=""
				 style={{
					height: "25px"

				  }}>
				</img>
				<CenteredText>
				{props._name}
				</CenteredText >
				<CenteredText>
				{props._hours}
				</CenteredText>
			</div>

		)
 }
function Favorites() {
    //replace the contents of the grid with a forloop looping through each fave _name and _hours can be replaced with the correct value
        return (
		
				
				<Grid>
					
		<CreateFavorite _name="words" _hours="520"/>
		<CreateFavorite _name="words" _hours="520"/>
		<CreateFavorite _name="words" _hours="520"/>
		<CreateFavorite _name="words" _hours="520"/>
		<CreateFavorite _name="words" _hours="520"/>
		</Grid>

        // createFavorite("john", "12")
        )

}
function unfavorite (name){
	console.log ("placeholder");
	//use this function to unfavorite favorited parks  <----------------------
  }

  
export default Favorites;

