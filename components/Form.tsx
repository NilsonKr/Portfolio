import React from 'react';

import { FieldTitleStyled } from 'styles/styledComponents/Contact';

const Form = () => {
	return (
		<form
			className='contact__form'
			onSubmit={ev => {
				ev.preventDefault();
				console.log('New Email!');
			}}
		>
			<label className='contact--field'>
				<FieldTitleStyled>Name</FieldTitleStyled>
				<input type='text' name='name' placeholder='Your Name' />
			</label>
			<label className='contact--field'>
				<FieldTitleStyled>E-mail</FieldTitleStyled>
				<input type='text' name='email' placeholder='someone@gmail.com' />
			</label>
			<label className='contact--field contact--message'>
				<FieldTitleStyled>Message</FieldTitleStyled>
				<textarea name='message' id=''></textarea>
			</label>
			<button className='contact--submit' type='submit'>
				<img src='/images/send.svg' alt='Send Email' />
			</button>
		</form>
	);
};

export default Form;
