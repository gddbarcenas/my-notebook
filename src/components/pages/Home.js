import React from 'react';

function Home() {
	return(
		<>
			<h1 className='home'>Home</h1>
			<div className="introduction">
				<h2>Hi, My name is Gen Dominic Barcenas.</h2>
				<p>I am a software developer living in Los Angeles, CA. I have a diverse set of skills, ranging from design to front-end development.</p>
			</div>
			<div className="content">
				<div className="front-end">
					<h3 className="card-title">
						Front-end Development
					</h3>
					<p className="padding">When creating a website, I am more comfortable with vanilla HTML, CSS, JavaScript, however, I am capable of learning and implementing frameworks.</p>
					<h4 className="card-title">
						Languages
					</h4>
					<ul className="list">
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>ReactJs</li>
					</ul>
					<h5 className="card-title">Tools</h5>
					<ul className="list">
						<li>GitHub</li>
						<li>Figma</li>
						<li>Firebase</li>
					</ul>
				</div>
				<div className="programming">
					<h3 className="card-title padding">
						Programming
					</h3>
					<p className="padding">I use these skillset to learn and apply programming concepts. This has allowed me to better understand how to successfully solve coding problems.</p>
					<h4 className="card-title">
						Languages
					</h4>
					<ul className="padding">
						<li>Python</li>
						<li>C/C++</li>
						<li>Java</li>
					</ul>
					<h5 className="card-title">Tools</h5>
					<ul className="list">
						<li>GitHub</li>
						<li>Firebase</li>
					</ul>
				</div>
			</div>
			
		</>

	);
}

export default Home;