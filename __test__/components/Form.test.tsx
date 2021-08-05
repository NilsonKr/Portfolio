import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../../components/Form';

const INITIAL_STATE = {
	name: '',
	subject: '',
	email: '',
	message: '',
};

describe('<Form />', () => {
	test('Render correctly', () => {
		render(
			<Form handleSendEmail={() => null} dataStatus={{ error: null, loading: false }} />
		);

		expect(screen.getByText('Name')).toBeInTheDocument();
		expect(screen.getByText('Subject')).toBeInTheDocument();
		expect(screen.getByText('E-mail')).toBeInTheDocument();
		expect(screen.getByText('Message')).toBeInTheDocument();
		expect(screen.getByAltText('Send Email')).toBeInTheDocument();
	});

	test('Handle submit', () => {
		const handleEmail = jest.fn(values => {
			expect(values).toEqual(INITIAL_STATE);

			return { error: null };
		});

		render(
			<Form handleSendEmail={handleEmail} dataStatus={{ error: null, loading: false }} />
		);

		const button = screen.getByAltText('Send Email').parentElement;

		userEvent.click(button!);

		expect(handleEmail).toBeCalledTimes(1);
	});

	test('submit with onChange event at form inputs', async () => {
		const returnPromise = Promise.resolve({ error: null });
		const handleEmail = jest.fn(values => {
			expect(values).toEqual({ ...INITIAL_STATE, name: 'Nilson Diaz' });

			return returnPromise;
		});

		render(
			<Form handleSendEmail={handleEmail} dataStatus={{ error: null, loading: false }} />
		);

		const button = screen.getByAltText('Send Email').parentElement;
		const nameInput = screen.getByPlaceholderText(/your name/i);

		userEvent.type(nameInput, 'Nilson Diaz');

		expect(nameInput).toHaveValue('Nilson Diaz');

		userEvent.click(button!);

		expect(handleEmail).toBeCalledTimes(1);

		//Wait for update state inside component
		await act((): Promise<any> => returnPromise);
	});
});
