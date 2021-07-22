// import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
	try {
		const response = await fetch(process.env.API_URL as string, {
			headers: {
				'X-Master-Key': process.env.API_KEY as string,
			},
		});
		const { record }: TAPIResponse = await response.json();

		return {
			props: { data: record },
		};
	} catch (error) {
		console.log(error);

		return {
			props: { data: {}, error: 'Oh oh Something Went Wrong! Try Later 😢' },
		};
	}
};

const Home = ({ data }: { data: TDataFormat }) => {
	console.log(data);

	return (
		<div>
			<h1>Hello</h1>
			<img src={data.landing.figure.X1} alt='Figure' />
		</div>
	);
};

export default Home;
