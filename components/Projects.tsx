import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import ProjectCard from './ProjectCard';
import GithubIcon from './SVGIcons/github';

import { ProjectsStyled } from '../styles/styledComponents/Projects';

const Projects = ({ projectsData }: { projectsData: TProjects[] }) => {
	const theme = useContext(ThemeContext);

	return (
		<ProjectsStyled>
			<div className='projects--header'>
				<a target='_blank' href='https://github.com/NilsonKr'>
					My Pr
					<GithubIcon size='40' color={theme.textMain} />
					jects
				</a>
			</div>
			<section id='projects' className='projects__list'>
				{projectsData.map((project, index) => {
					const isInverted = (index + 1) % 2 === 0 ? true : false;

					return (
						<ProjectCard
							key={project.id}
							project={project}
							inverted={isInverted}
							isSecondary={project.isSecondary}
							position={index + 1}
							iconColor={theme.textMain}
						/>
					);
				})}
			</section>
		</ProjectsStyled>
	);
};

export default Projects;
