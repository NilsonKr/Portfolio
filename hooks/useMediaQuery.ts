import { useEffect, useState } from 'react';

function useMediaQuery(minWidth: number, direction: string) {
	const [isQuery, setResult] = useState<boolean>(false);

	//Get Dimmensions
	useEffect(() => {
		const { innerHeight, innerWidth } = window;

		if (direction === 'width') {
			const validate = innerWidth >= minWidth;

			setResult(validate);
		}

		if (direction === 'height') {
			setResult(innerHeight >= minWidth);
		}
	}, []);

	return [isQuery];
}

export default useMediaQuery;
