import ContactForm from './Form';
import ContactFigure from './figures/ContactFigure';

import { ContactStyled } from '../styles/styledComponents/Contact';

const Contact = ({ extras }: { extras: TExtras }) => {
	const handleSubmission = (formFields: HTMLFormElement[]) => {
		const mailInfo: { [key: string]: string } = {};

		//Retriev Inputs values excluding submit button
		formFields.forEach(el => {
			if (el.type === 'submit') {
				return;
			}
			mailInfo[el.name] = el.value;
		});

		console.log(mailInfo);
	};

	return (
		<ContactStyled id='contact'>
			<div className='form__section'>
				<h1 className='contact--title'>Get In Touch 📬</h1>
				<p className='contact--subtitle'>Let’s create web stuff together !</p>
				<ContactForm handleSubmit={handleSubmission} />
			</div>
			<section className='contact__socialHub'>
				<ContactFigure image={extras.contact.X1} />
				<div className='contact--gmail'>
					<img src='/images/gmail.svg' alt='Gmail Inbox' title='Gmail Inbox' />
					<p>nilson444diaz@gmail.com</p>
				</div>
			</section>
		</ContactStyled>
	);
};

export default Contact;
