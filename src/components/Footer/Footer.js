import React from 'react'
import './Footer.css';

function Footer() {
	return (
		<>
			<div className="footer">
				<div className="left-content">
					<a href="/" >
						<i class="fas fa-home"></i>
						<div className="text">Homepage</div>
					</a>
					<a href="/about">
						<i class="fas fa-address-card"></i>
						<div className="text">About Me</div>
					</a>
					<a href="https://github.com/gddbarcenas">
						<i class="fab fa-github"></i>
						<div className="text">GitHub</div>
					</a>
				</div>
				<div className="right-content">
					<p>©2021 Gen Barcenas</p>	
				</div>			
			</div>
		</>
	)
}

export default Footer;
