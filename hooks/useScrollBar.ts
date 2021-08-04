import { useEffect, useState } from 'react';

type returnValues = { scroll: number };

const useScrollbar = (initial: number): returnValues => {
	// console.log(initial);
	const [scroll, setScroll] = useState<number>(initial);

	//Update Scroll Porcent listen the event
	useEffect(() => {
		if (scroll < 100) {
			window.addEventListener('scroll', handleScroll);
		}

		return () => window.removeEventListener('scroll', handleScroll);
	}, [scroll]);

	function handleScroll() {
		const scrollDown = document.documentElement.scrollTop;
		const totalHeigth =
			document.documentElement.scrollHeight - document.documentElement.clientHeight;

		const scrollPorcent = (scrollDown / totalHeigth) * 100;

		if (scrollPorcent > scroll) {
			setScroll(scrollPorcent);
		}
	}

	return { scroll };
};

export default useScrollbar;
