import React from 'react';
import Project from '../Project';
import CounterPicture from '../../assets/counterPage.jpg';
import DarkModePicture from '../../assets/darkModePage.jpg';
import PseudoTypePicture from '../../assets/pseudotype.png';



function Projects() {

	const projectList = [
		{
			index: 1,
			img: PseudoTypePicture,
			title: 'PseudoType',
			url: 'https://pseudo-type.web.app/'
		},
		{
			index: 2,
			img: CounterPicture,
			title: 'Counter',
			url: 'https://counter-project-react-app.netlify.app/'
		},
		{
			index: 3,
			img: DarkModePicture,
			title: 'Dark Mode',
			url: 'https://dark-mode-project-react-app.netlify.app/'
		}
	];

	return (
		<>
			<h1 className='projects'>Projects</h1>
				<section className="projectList">
				{projectList.map((project) => {
					return (
						<Project key={project.index} project={project} />
					)
				})}
			</section>
		</>
	)
}

export default Projects;