import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
// import { GetStaticProps } from 'next';
import landingData from '../data/landing';
import projectsData from '../data/projects';
import extras from '../data/extras';

import ProgressScrollBar from '@components/ProgressScrollBar';
import Header from '@components/Header';
import Landing from '@components/Landing';
import Projects from '@components/Projects';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

import EnvelopeIcon from '@components/SVGIcons/envelope';
import ContactFloatIcon from '../styles/styledComponents/ContactFloatIcon';

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

type props = {
	data?: TDataFormat;
};

const Home = () => {
	const themeContext = useContext<Ttheme>(ThemeContext);

	return (
		<>
			<ProgressScrollBar />
			<Header />
			<Landing landingData={landingData} />
			<ContactFloatIcon>
				<a href='#contact'>
					<EnvelopeIcon size='30' color={themeContext.background} />
				</a>
			</ContactFloatIcon>
			<Projects projectsData={projectsData} theme={themeContext} />
			<Contact extras={extras} />
			<Footer image={extras.footer.X1} />
		</>
	);
};

export default Home;
