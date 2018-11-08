import React from 'react';

import './ProjectCard.css';


const Card =(props) =>{
	const {name,description,image,id,website}=props;

	return (
  <div className=" tc bg-white dib ma2 pa3 br3 grow bw2 shadow-5" >
  <a href={website} target="_blank" className="db link dim tc animated fadeInDown">
  <img alt= 'robo 1 'src={require(`../images/${image}`)} className="size"/>
  <div>
 <h1 className="ml0 black truncate w-100 ttu">{name}</h1>
 <p className="ml0 gray truncate w-100">{description}</p>
 </div>
 </a>

  </div>
 )
}


export default Card;
