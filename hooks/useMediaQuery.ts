import { useEffect, useState } from 'react';

type windowSizes = {
	innerWidth?: number;
	innerHeight?: number;
};

function useMediaQuery(minWidth: number, direction: string) {
	const [isQuery, setResult] = useState<boolean>(false);
	const [currentSize, setSize] = useState<windowSizes>({});

	//Get Dimmensions
	useEffect(() => {
		const sizes = currentSize.innerWidth ? currentSize : window;

		//Listen Resize only with set one EventListener
		if (!currentSize.innerWidth) {
			const listenResize = (ev: UIEvent) => {
				const { innerHeight, innerWidth } = ev.target as Window;
				setSize({ innerHeight, innerWidth });
			};
			window.addEventListener('resize', listenResize);
		}
		//Validate
		if (direction === 'width') {
			const validate = (sizes.innerWidth as number) >= minWidth;

			setResult(validate);
		}

		if (direction === 'height') {
			const validate = (sizes.innerHeight as number) >= minWidth;

			setResult(validate);
		}
	}, [currentSize]);

	return [isQuery];
}

export default useMediaQuery;
