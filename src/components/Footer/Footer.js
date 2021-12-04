import React from 'react'
import './Footer.css';

function Footer() {
	return (
		<>
			<div className="footer">
				<div className="left-content">
					<a href="/" >Homepage</a>
					<a href="/about">About Me</a>
					<a href="https://github.com/gddbarcenas">GitHub</a>
				</div>
				<div className="right-content">
					<p>©2021 Gen Barcenas</p>	
				</div>			
			</div>
		</>
	)
}

export default Footer;
