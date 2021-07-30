import { useState } from 'react';
import validateForm from 'utils/validateForm';

import ContactForm from './Form';
import EmailSuccess from './EmailSuccess';

import { ContactStyled } from '../styles/styledComponents/Contact';
import ContactFigure from './figures/ContactFigure';

const Contact = ({ extras }: { extras: TExtras }) => {
	const [status, setStatus] = useState<TStatus>({ error: null, loading: false });
	const [isEmailSuccess, setEmailStatus] = useState<boolean>(false);

	const sendEmail = async (formInfo: TemailInfo) => {
		setStatus({ error: null, loading: true });
		const isFormValid = validateForm(formInfo);

		//Validate Fields for then send email request
		if (isFormValid.isValid === false) {
			setStatus({
				error: isFormValid.message,
				loading: false,
			});

			return { error: true };
		} else {
			try {
				const emailResponse = await window.fetch('/api/sendmail', {
					method: 'post',
					body: JSON.stringify(formInfo),
					headers: { 'Content-Type': 'application/json' },
				});

				const data = await emailResponse.json();

				setStatus({ error: null, loading: false });
				//UI Success Message
				setEmailStatus(true);
				setTimeout(() => setEmailStatus(false), 4500);
				return data;
			} catch (error) {
				console.log(error);
				setStatus({
					error: 'Oh oh Something went wrong , Try again in a few Moments :( ',
					loading: false,
				});
				return { error: true };
			}
		}
	};

	return (
		<>
			{isEmailSuccess && <EmailSuccess />}
			<ContactStyled id='contact'>
				<div className='form__section'>
					<h1 className='contact--title'>Get In Touch 📬</h1>
					<p className='contact--subtitle'>Let’s create web stuff together !</p>
					<ContactForm handleSendEmail={sendEmail} dataStatus={status} />
				</div>
				<section className='contact__socialHub'>
					<ContactFigure image={extras.contact.X1} />
					<div className='contact--gmail'>
						<img src='/images/gmail.svg' alt='Gmail Inbox' title='Gmail Inbox' />
						<p>nilson444dev@gmail.com</p>
					</div>
				</section>
			</ContactStyled>
		</>
	);
};

export default Contact;
