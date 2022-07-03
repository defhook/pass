
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import {favs} from "../utils/favs";

// export const Favorites = () => {
//   return (
//     <Container>
//       <center>
//         <h1>Favorite Theme Parks</h1>
//       </center>

//        <div class="row row-cols-3">

//       {/* <favs></favs> */}

//        </div>

//     </Container>
//   );
// };



import React from "react";
import ReactDOM from "react-dom";
//import styled from "styled-components";
//import { Container, Row, Col } from "react-bootstrap";
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
//export const Favorites = () => {
	// function unfavorite (name){
	// 	console.log ("placeholder");
	// 	//use this function to unfavorite favorited parks  <----------------------
	//   }
	
	// function createFavorite (Name, Hours){
	// 	var main = document.createElement ("div");
	// 	main.className = "color-box";
	// 	var favoriteButton = document.createElement ("img");
	// 	favoriteButton.className = "clickable";
	// 	favoriteButton.src = "./assets/images/red-x-icon.png";
	// 	//favoriteButton.style.height = "25px";
	// 	//favoriteButton.onclick = unfavorite;
	// 	var _name = document.createElement ('p');
	// 	_name.className = "text-center fs-2";
	// 	_name.innerHTML = Name;
	// 	var hours = document.createElement ('p');
	// 	hours.className = "text-center fs-5";
	// 	hours.innerHTML = Hours;
	// 	main.appendChild (favoriteButton);
	// 	main.appendChild (_name);
	// 	main.appendChild (hours);
	// 	var column = document.createElement ("div");
	// 	column.className = "col";
	// 	column.appendChild (main);
	// 	//document.getElementById ("attractions").appendChild (column);
	// 	return Object.values(column);
	
	// }
	// return (
	// 	createFavorite ("favLoop", "9to5")
      
	// );

//}

// const Container = styled.div``;

// const Button = styled.button`
// cursor: pointer;
// background: white;
// color: #ce5428;
// font-size: 1em;
// margin: 1em;
// padding: 0.25em 1em;
// border: 2px solid #ce5428;
// border-radius: 3px;
// transition: background-color 1s;
// transition: color 1s;

// &:hover {
// 	color: white;
// 	background: #ce5428;
// }

// &:after {
// 	content: " ☓";	
// 	width: 100%;
// 	height: 100%;
// 	opacity: 0;
// 	transition: all 0.5s;
//   }
  
//   &:active:after {
// 	opacity: 1;
// 	transition: 0s;
//   }

//   &:active {
// 	top: 1px;
//   }
// `

// const Content = styled.div`
// 	display: grid;
// 	grid-gap: 35px;
// 	grid-template-columns: repeat(2, minmax(0, 1fr));
//   margin: 80px;
// `;
// const Wrap = styled.div`
//   border-color: #4f468a;
//   border-style: solid;
//   text-align: center;
//   color: #6eaceb;
// 	border-radius: 10px;
// 	cursor: pointer;
// 	transition: all 250ms cubic-bezier(0.25, 0.75, 0.55, 2) 0s;
//   overflow: hidden;
// 	img {
// 		width: 100%;
// 		height: 100%;
// 		object-fit: cover;
// 	}
// 	&:hover {
// 		transform: scale(1.05) rotate(5deg);
//     box-shadow:10px 10px #4f468a;
    
// 	}
// `;

export default Favorites;

