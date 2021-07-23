import React from 'react';

import ProjectCard from './ProjectCard';
import GithubIcon from './SVGIcons/github';

const Projects = ({ projectsData }: { projectsData: TProjects[] }) => {
	return (
		<section className='projects__container'>
			<div className='projects--header'>
				<a target='_blank' href='https://github.com/NilsonKr'>
					My Pr
					<GithubIcon size='40' />
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
						/>
					);
				})}
			</section>
		</section>
	);
};

export default Projects;
