import React from 'react';
import './navbar.css';

function Navbar() {
	return (
		<header class="head">
			{/* <h1 id="title">Shauna Larkin</h1> */}
			<h1 id="subtitle"> Dreams of Ayame Freelance Web Design</h1>
			<nav class="navigation">
				<a href="index.html">About</a>
				<span> |</span> <a href="contact.html">Contact</a>
				<span> |</span> <a href="portfolio.html">Portfolio</a>
			</nav>
		</header>
	);
}

export default Navbar;
