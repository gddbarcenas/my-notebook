import React from 'react'
import './Footer.css';

function Footer() {
	return (
		<>
			<div className="footer">
				<div className="left-content">
					<a href="/" >Homepage</a>
					&nbsp;•&nbsp;
					<a href="/about">About Me</a>
					&nbsp;•&nbsp;
					<a href="https://github.com/gddbarcenas">GitHub</a>
					&nbsp;•&nbsp;
					<p>©2021 Gen Barcenas</p>	
				</div>
				<div className="right-content">Version</div>			
			</div>
		</>
	)
}

export default Footer;
