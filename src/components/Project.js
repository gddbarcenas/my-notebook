import React from 'react';

const Project = (props) => {
	const { img, title, url } = props.project;
	console.log(url);

	return (
		<>
			<a href={url} className="cards">
				<section className='project'>
					<img src={img} alt="" style={{ width: '100%' }} />
					<h2 className='project-title'>{title}</h2>
				</section>
			</a>
		</>
	);
}

export default Project;