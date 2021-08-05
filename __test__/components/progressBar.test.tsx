import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import ProgressScrollBar from '../../components/ProgressScrollBar';
import useScrollBar from '../../hooks/useScrollBar';

describe('<ProgressBar />', () => {
	beforeEach(() => {
		render(<ProgressScrollBar />);
	});
	test('Render Correctly', () => {
		expect(screen.getByLabelText('progress')).toBeInTheDocument();
		screen.getByLabelText('progress').querySelector('.progress__hidden');
	});

	test('useScrollBar hook', () => {
		const { result } = renderHook(() => useScrollBar(25));

		expect(result.current.scroll).toBe(205);
	});
});
