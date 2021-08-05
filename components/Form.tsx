import { FormEvent, useState } from 'react';

import { FieldTitleStyled } from '../styles/styledComponents/Contact';
import Loader from './Loader';

type FormField = HTMLInputElement | HTMLTextAreaElement;
type props = {
	handleSendEmail: (values: any) => any;
	dataStatus: TStatus;
};

const INITIAL_STATE = {
	name: '',
	subject: '',
	email: '',
	message: '',
};

const Form = ({ handleSendEmail, dataStatus }: props) => {
	const [formInfo, setFormInfo] = useState<TemailInfo>(INITIAL_STATE);

	const setEmailInfo = (field: FormField) => {
		setFormInfo({ ...formInfo, [field.name]: field.value });
	};

	const handleSubmit = async (ev: FormEvent) => {
		ev.preventDefault();
		try {
			const response = await handleSendEmail(formInfo);

			if (!response.error) {
				setFormInfo(INITIAL_STATE);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className='contact__form' onSubmit={handleSubmit}>
			<div className='contact--userinfo'>
				<label className='contact--field'>
					<FieldTitleStyled>Name</FieldTitleStyled>
					<input
						type='text'
						name='name'
						placeholder='Your Name'
						value={formInfo.name}
						onChange={ev => setEmailInfo(ev.target)}
					/>
				</label>
				<label className='contact--field'>
					<FieldTitleStyled>Subject</FieldTitleStyled>
					<input
						type='text'
						name='subject'
						placeholder='Matter'
						value={formInfo.subject}
						onChange={ev => setEmailInfo(ev.target)}
					/>
				</label>
			</div>
			<label className='contact--field'>
				<FieldTitleStyled>E-mail</FieldTitleStyled>
				<input
					type='text'
					name='email'
					value={formInfo.email}
					placeholder='someone@gmail.com'
					onChange={ev => setEmailInfo(ev.target)}
				/>
			</label>
			<label className='contact--field contact--message'>
				<FieldTitleStyled>Message</FieldTitleStyled>
				<textarea
					name='message'
					value={formInfo.message}
					onChange={ev => setEmailInfo(ev.target)}
				></textarea>
			</label>
			{dataStatus.loading && <Loader />}
			{dataStatus.error && <p className='error--message'>{dataStatus.error}</p>}
			<button className='contact--submit' type='submit'>
				<img src='/images/send.svg' alt='Send Email' />
			</button>
		</form>
	);
};

export default Form;
