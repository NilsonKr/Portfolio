import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Landing from '../../components/Landing';
import landingData from '../../data/landing';
import ThemeMockProvider from '../__mocks__/ThemeMockProvider';

describe('<Landing />', () => {
	beforeEach(() => {
		render(
			<ThemeMockProvider>
				<Landing landingData={landingData} />
			</ThemeMockProvider>
		);
	});

	test('Renders correctly', () => {
		expect(screen.getByText(/Nilson Diaz/i)).toBeInTheDocument();
	});

	test('Render projects thumbnail', () => {
		expect(screen.getAllByAltText(/Project/i)[0]).toBeInTheDocument();

		expect(screen.getAllByAltText(/Project/i).length).toBe(3);
	});

	test('Figure Render', () => {
		expect(screen.getByAltText(/Technologies Hub/i)).toBeInTheDocument();
	});
});
