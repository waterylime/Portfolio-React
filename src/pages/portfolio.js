import React from 'react';
import book from '../assets/Video/BookFinder.mp4';
import code from '../assets/Video/CodeQuiz.mp4';
import dragon from '../assets/Video/dragon.mp4';
import word from '../assets/Video/whatintheword.mp4';
import pass from '../assets/Video/PasswordGen.mp4';
// import translation from
// import weather from

function Portfolio() {
	function modeFun2() {
		let firstTime = localStorage.getItem('first');

		const modal = document.getElementById('myModal');
		const span = document.getElementsByClassName('close-btn')[0];

		localStorage.setItem('first', 'nope');
		if (firstTime == null) {
			modal.style.display = 'block';
		}

		span.onclick = function() {
			modal.style.display = 'none';
		};
	}

	return (
		<div class="back" id="portBack">
			{modeFun2}
			<div class="contactbox" id="placeholders">
				<h2>
					Portfolio
					<hr />
				</h2>
				<div class="container" id="linkTwo">
					<img src={book} alt="book" style={{ width: 200, height: 200 }} class="linkvid" />
					<div class="btn1" id="btn1">
						Book Finder
						<span id="bookFinder">
							ur usuer story: As a reader I want to see books recommend from a title entered/ books
							recommended from genres. Along with reader reviews and rating. So that I can find new
							literature to read.
						</span>
					</div>
				</div>
				<div class="container" id="linkSix">
					<img src={code} style={{ width: 200, height: 200 }} className="linkvid" alt="code" />
					<div className="btn2" id="btn2">
						Code Quiz
						<span id="codeQuiz">
							Create an application that generates a random password based on user-selected criteria. This
							app will run in the browser and feature dynamically updated HTML and CSS powered by your
							JavaScript code.
						</span>
					</div>
				</div>
				<div class="container" id="linkFive">
					<img src={pass} alt="password" style={{ width: 200, height: 200 }} class="linkvid" />
					<div class="btn3" id="btn3">
						Password Generater
						<span id="passPop">
							Create an application that generates a random password based on user-selected criteria. This
							app will run in the browser and feature dynamically updated HTML and CSS powered by your
							JavaScript code.
						</span>
					</div>
				</div>
				{/* <div class="container" id="linkSeven">
					<img src={translation} alt="translation" style={{ width: 200, height: 200 }} class="linkvid" />
					<div class="btn4" id="btn4">
						Translation Website COMING SOON
						<span id="bsnPop">
							Nothing to do with develoment but I did make the site. This is the website for my
							translation of light novels in to english.
						</span>
					</div>
				</div>
				<div class="container" id="linkThree">
					<img src={weater} alt="weather" style={{ width: 200, height: 200 }} class="linkvid" />
					<div class="btn5" id="btn5">
						React Weather App
						<span id="weatherPop">
							This is a React basied weather app. Using hooks and styled componets.
						</span>
					</div>
				</div>{' '} */}

				<div class="container" id="linkOne">
					<img src={word} alt="word" style={{ width: 200, height: 200 }} class="linkpic" id="word" />
					<div class="btn6" id="btn6">
						What in the Word
						<span id="Word">
							Our usuer story: As a reader As a I reader I want to be able to look up foreign word, that
							is in my book. be provided with definitions and text to speech of word and maybe a picture.
							So that I can under stand what I am reading. Patent Pending
						</span>
					</div>
				</div>
				<div class="container" id="linkFour">
					<img src={dragon} alt="rest screenshot" style={{ width: 200, height: 200 }} class="linkpic" />
					<div class="btn7" id="btn7">
						Dragon Restaurant
						<span id="restPop">
							A full stack application that simulates a reservation system for a restaurant with only five
							tables. Includes 2 RESTful API's and code that determinates between the two.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
