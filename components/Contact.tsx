import React from 'react';

const Contact = () => {
	return (
		<section className='contact__section'>
			<div className='form__section'>
				<h1 className='contact--title'>Get In Touch 📬</h1>
				<p className='contact--subtitle'>Let’s create web stuff together !</p>
				<form
					className='contact__form'
					onSubmit={ev => {
						ev.preventDefault();
						console.log('New Email!');
					}}
				>
					<label className='contact--field'>
						<p>Name</p>
						<input type='text' name='name' placeholder='Your Name' />
					</label>
					<label className='contact--field'>
						<p>E-mail</p>
						<input type='text' name='email' placeholder='someone@gmail.com' />
					</label>
					<label className='contact--field contact--message'>
						<p>Message</p>
						<textarea name='message' id=''></textarea>
					</label>
					<button className='contact--submit' type='submit'>
						<img src='/images/send.svg' alt='Send Email' />
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
