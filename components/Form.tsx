import { useRef } from 'react';

import { FieldTitleStyled } from 'styles/styledComponents/Contact';

const Form = ({ handleSubmit }: { handleSubmit: (values: any) => void }) => {
	const contactForm = useRef<HTMLFormElement>(null);

	return (
		<form
			ref={contactForm}
			className='contact__form'
			onSubmit={ev => {
				ev.preventDefault();
				const fields = [...contactForm.current!.elements];
				handleSubmit(fields);
			}}
		>
			<div className='contact--userinfo'>
				<label className='contact--field'>
					<FieldTitleStyled>Name</FieldTitleStyled>
					<input type='text' name='name' placeholder='Your Name' />
				</label>
				<label className='contact--field'>
					<FieldTitleStyled>Subject</FieldTitleStyled>
					<input type='text' name='subject' placeholder='Matter' />
				</label>
			</div>
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
