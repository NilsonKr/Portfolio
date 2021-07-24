import ProjectCard from './ProjectCard';
import GithubIcon from './SVGIcons/github';

import { ProjectsStyled } from '../styles/styledComponents/Projects';

type props = { projectsData: TProjects[]; theme: Ttheme };

const Projects = ({ projectsData, theme }: props) => {
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
							themeStyle={theme.current}
						/>
					);
				})}
			</section>
		</ProjectsStyled>
	);
};

export default Projects;
