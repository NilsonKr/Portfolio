import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { GetStaticProps } from 'next';

import ProgressScrollBar from '@components/ProgressScrollBar';
import Header from '@components/Header';
import Landing from '@components/Landing';
import Projects from '@components/Projects';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

import EnvelopeIcon from '@components/SVGIcons/envelope';
import ContactFloatIcon from '../styles/styledComponents/ContactFloatIcon';

export const getStaticProps: GetStaticProps = async () => {
	//Fetch Portfolio Data
	if (process.env.NODE_ENV === 'production') {
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
	} else {
		//import data mocks

		const landingInfo = (await import('../data/landing')).default;
		const projectsInfo = (await import('../data/projects')).default;
		const extras = (await import('../data/extras')).default;

		return {
			props: {
				data: {
					landing: landingInfo,
					projects: projectsInfo,
					extras: extras,
					env: process.env.NODE_ENV,
				},
			},
		};
	}
};

type props = {
	data: TDataFormat;
	error?: string;
};

const Home = ({ data }: props) => {
	const themeContext = useContext<Ttheme>(ThemeContext);

	return (
		<>
			<ProgressScrollBar />
			<Header />
			<Landing landingData={data.landing} />
			<ContactFloatIcon>
				<a href='#contact'>
					<EnvelopeIcon size='30' color={themeContext.background} />
				</a>
			</ContactFloatIcon>
			<Projects projectsData={data.projects} theme={themeContext} />
			<Contact extras={data.extras} />
			<Footer image={data.extras.footer.X1} />
		</>
	);
};

export default Home;
