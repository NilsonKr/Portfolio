// import {  useState } from 'react';
// import { GetStaticProps } from 'next';
import landingData from '../data/landing';
import projectsData from '../data/projects';
import extras from '../data/extras';

import Header from '@components/Header';
import Landing from '@components/Landing';
import Projects from '@components/Projects';
import Contact from '@components/Contact';

// export const getStaticProps: GetStaticProps = async () => {
// 	//Fetch Portfolio Data
// 	try {
// 		const response = await fetch(process.env.API_URL as string, {
// 			headers: {
// 				'X-Master-Key': process.env.API_KEY as string,
// 			},
// 		});
// 		const { record }: TAPIResponse = await response.json();

// 		return {
// 			props: { data: record },
// 		};
// 	} catch (error) {
// 		console.log(error);

// 		return {
// 			props: { data: {}, error: 'Oh oh Something Went Wrong! Try Later 😢' },
// 		};
// 	}
// };

//{ data }: { data: TDataFormat }

const Home = () => {
	return (
		<>
			<Header />
			<Landing landingData={landingData} />
			<Projects projectsData={projectsData} />
			<Contact extras={extras} />
		</>
	);
};

export default Home;
