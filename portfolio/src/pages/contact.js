import React from 'react';

function Contact() {
	return (
		<div class="contactbox" id="contact">
			<h2>
				Contact <hr />
			</h2>
			<p class="break">
				You can contact me directly by email <a href="mailto:dreamsfromayame@gmail.com">HERE</a>, or by phone at
				303.667.4813
			</p>
			<p class="break">
				You can find my GitHub page{' '}
				<a href="https://github.com/waterylime" target="_blank">
					HERE
				</a>
				, and my LinkedIn profile{' '}
				<a href="https://www.linkedin.com/in/shauna-larkin-bb534a13/" target="_blank">
					HERE
				</a>
				.
			</p>
			<p class="break">Alternately, feel free to fill out the contact box, and I will contact you back.</p>

			<form class="break" id="forming" action="https://formspree.io/xvoplyvd" method="POST" target="_blank">
				Name: <br />
				<input type="text" name="userName" size="111%" id="inputName" />
				<br />
				Email: <br />
				<input type="text" name="userMail" size="111%" id="inputMail" />
				<br />
				Messege:
				<br />
				<textarea name="messege" rows="15" cols="100%" id="inputText" /> <br />
				<input
					onclick="window.location.href = 'https://tzvik15.github.io/Responsive-Portfolio/index.html';"
					type="submit"
					value="Submit"
					class="button"
					id="submitBtn"
				/>
			</form>
		</div>
	);
}
export default Contact;
