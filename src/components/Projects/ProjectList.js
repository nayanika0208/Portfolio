import React from 'react';
import Card from './ProjectCard';


const ProjectList=({Projects}) =>{
  console.log('ProjectList');
		return (
		 <div>
		 {
		 Projects.map((user,i) => {

		return(
		<Card
		key = {i}
		id={Projects[i].id}
		name={Projects[i].name}
        website={Projects[i].website}
        image={Projects[i].image}
        description={Projects[i].description}
        
		/>
	);
		})
		}
		</div>


		);
}
export default ProjectList;
