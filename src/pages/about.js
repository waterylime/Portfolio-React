import React from 'react';
import good from '../assets/Pic/good.JPG';
import logo from '../assets/Pic/logo.png';

function About() {
	function modeFun1() {
		const modal2 = document.getElementById('tModal');

		// Get the button that opens the modal
		const btn = document.getElementById('techModal');

		// Get the <span> element that closes the modal
		const span2 = document.getElementsByClassName('close-btn')[0];

		// When the user clicks on the button, open the modal
		btn.onclick = function() {
			modal2.style.display = 'block';
		};

		// When the user clicks on <span> (x), close the modal
		span2.onclick = function() {
			modal2.style.display = 'none';
		};

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target === modal2) {
				modal2.style.display = 'none';
			}
		};
	}

	return (
		<div>
			<section className="contactbox" id="box">
				<h2>
					About Me <hr />
				</h2>
				<img src={good} alt="picMe" id="mepic" height="420" width="290" />
				<p className="break" id="pOne">
					Welcome to my developer site! My name is Shauna Larkin. I hope you enjoy your time spent here. In
					this section I will tell you a little about myself, my history, and the work I've done and hoping to
					do.
					<p className="break" id="pTwo">
						I am a Colorado Native, my home town is Georgetown. I have owned and opprated my own pet care
						bussines for 14 years and going. With completion of my formal training in web develoment I will
						be opening my own freelance web design bussines. My formal studies were in the field of art, in
						both animation and illistratution, with some graphic design thrown in the mix.
					</p>
				</p>
				<p className="break" id="pThree">
					It was here in Colorado that I learned how important collaboration is to me. In fact, the concept is
					so meaningful for me that I wrote my doctoral thesis on the subject!
				</p>
				<br />
				<p className="break" id="pFour">
					While my studies were in art and I have a love for all art. My intrest are more specifically lie in
					the Renaissance to Romanticism periods of western art, and in general for Middle Eastern and Aisan
					art.
				</p>
				<p className="break" id="pFive">
					As a developer, I am passionate about using my art education and pasion for art to creative websits
					that is both fuctional and aesthetically pleasing. Where beauty is just as important as fuction.
				</p>
				<p className="break" id="pSix">
					As my client, I will work together with you, collaborating to realize the projects you envision,
					providing you with the best quality and support, and the knowledge that the final product will
					truely be a part and representation of YOU and YOUR needs.
				</p>
				<p className="break" id="pSeven">
					You can see examples of my projects in the <a href="portfolio.html">portfolio</a> section.{' '}
					<a href="https://github.com/waterylime" target="_blank" rel="noopener noreferrer">
						THIS
					</a>{' '}
					is a link to my GitHub page,{' '}
					<a
						href="https://www.linkedin.com/in/shauna-larkin-bb534a13/"
						target="_blank"
						rel="noopener noreferrer"
					>
						THIS
					</a>{' '}
					is a link to my LinkedIn page, and{' '}
					<a href="./assets/pdf/code.pdf" download target="_blank">
						HERE
					</a>{' '}
					you can download my resume. For my technical skills and proficiencies, click{' '}
					<a id="techModal" onClick={modeFun1}>
						HERE.
					</a>
				</p>
				<img src={logo} className="App-logo" alt="logo" />
				<div id="tModal" className="modal">
					<div className="modal-content">
						<span className="close-btn">&times;</span>
						<p>
							<h3>Programing Languages Known:</h3> HTML 5, CSS, JavaScript (ES6) <br />
							<h3>Front End:</h3>React.js (including hooks), REST API queries, 3rd party JS and CSS
							library integration, deployment of web pages <br />
							<h3>Back End: </h3>Node.js, Express servers, REST API creation, NPM, Handlebars, Sequelize{' '}
							<br />
							<h3>Cross Stack: </h3>MERN stack, jQuery, Test Driven Development with Jest, mySQL, Object
							Oriented Programming, MongoDB and Mongoose, PWA creation (including offline support) <br />
						</p>
						<p>
							To see these skills in use, please click <a href="portfolio.html">HERE</a>.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
